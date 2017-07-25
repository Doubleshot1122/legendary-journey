const db = require('../db/connections.js');
const rp = require('request-promise')
const BASE_URL = "https://www.pivotaltracker.com/services/v5"
const Quest = require('../models/quests.js');
const User = require('../models/users.js');
const helper = require('../helpers/helpers.js')

class DataSync {
  constructor() {}

  static stories(proj_id){
    // let proj_id = 2076033
    return rp({
      method: 'GET',
      uri: `${BASE_URL}/projects/${proj_id}/stories`,
      headers: {'X-TrackerToken': 'fb0ff656b12bf40cee14581a7854f840'},
      json:true
    }).then(results => {
      return results
    })
  }

  static projects(){
    rp({
      method: 'GET',
      uri: `${BASE_URL}/me`,
      headers: {'X-TrackerToken': 'db82fcf8ef077c60859be505792891a1'},
      json:true
    }).then(pivProjects => {
        let pivProjNames = {}
        let pivProjectsProdIDs = pivProjects.projects.map(el => {return el.project_id})
        pivProjects.projects.forEach(el => {pivProjNames[el.project_id] = el.project_name})
        while (pivProjectsProdIDs.length >0) {
          this.stories(pivProjectsProdIDs[0])
          .then(piv_stories => {
            while (piv_stories.length >0) {
              let quests = Quest.all()
              let users = User.all()
              let skills = 0
              let skills_quest = 0
              return Promise.all([quests, users, skills, skills_quest]) //return
              .then(promiseData => {
                //local query data
                let questQuery = promiseData[0]
                let userQuery = promiseData[1]
                let skillQuery = promiseData[2]
                let skill_questQuery = promiseData[3]

                //pivotal api data broke out
                let pivotalProjectNum = piv_stories[0].project_id;
                let pivotalStoryNum = piv_stories[0].id;

                //array of local already loaded pivotal project ids
                let localProjectNums = questQuery.map(el => el.pivotal_project_id)

                //array of local already loaded pivotal story ids
                let localStoryNums = questQuery.map(el => el.story_id)

                //object of user table ids and thier pivotal id match
                let localUserIDs = userQuery.reduce((output, user) => {
                  output[user.pivotal_user_id] = user.id
                  return output},{})

                //object of quest id and pivotal story id match
                let questIDs = questQuery.reduce((output, quest) => {
                  output[quest.story_id] = quest.id
                  return output},{})

                //new and update quest table object
                let quests_toLoad = {
                  type: 'Main',
                  name: piv_stories[0].name,
                  description: piv_stories[0].description,
                  xp_amount: helper.calculateXPfromEstimate(piv_stories[0].estimate),
                  project_name: pivProjNames[piv_stories[0].project_id],
                  owner_id: localUserIDs[piv_stories[0].owner_ids[0]],
                  pivotal_project_id: piv_stories[0].project_id,
                  story_id: piv_stories[0].id,
                  complete: helper.calculateProjectStatus(piv_stories[0].current_status)
                }
                let skill_quest_toLoad = {}
                if (localProjectNums.includes(pivotalProjectNum)) {
                  let qid = questIDs[piv_stories[0].id]
                  Quest.update(qid, quests_toLoad).then(updatedQuest => console.log("===UPDATED===", updatedQuest));
                  console.log("qid", qid);
                  console.log('>>>>>>>>>>>>NOT NEW<<<<<<<<<<<<<<<<');
                  console.log(quests_toLoad);
                } else {
                  Quest.create(quests_toLoad).then(newQuest => console.log("LOADED", newQuest));
                  console.log('<<<<<<New>>>>>>>');
                  console.log(quests_toLoad);
                  console.log('<<<<<<New>>>>>>>');
                }


                console.log("piv_stories[0].owner_ids", piv_stories[0].owner_ids);

              })
              piv_stories.shift()
            }
          })
          pivProjectsProdIDs.shift()
        }
      })
      return {}
  }

}

module.exports = DataSync;
