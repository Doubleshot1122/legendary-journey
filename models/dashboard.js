const db = require('../db/connections.js');
const Quest = require('./quests.js');

class Dashboard {
  constructor() {}

  static showUser(id){
    let levels = db('levels')

    let levelsQuests = db('quests').select('quests.id as qID', 'quests.type', 'quests.name as qName', 'quests.xp_amount', 'quests.owner_id', 'skill_quest.skill_id').innerJoin('skill_quest', 'quests.id', 'skill_quest.quest_id').where({'quests.owner_id':id})

    let skills =  db('skills').select('skills.name', 'skill_user.skill_id', 'skill_user.user_id', 'skill_user.xp_gained').innerJoin('skill_user', 'skills.id', 'skill_user.skill_id')
    .where({user_id: id})

    let user = db('users').select('users.*', 'teams.team_name', 'teams.manager_id')
    .innerJoin('teams', 'users.team_id', 'teams.id')
    .where({'users.id':id})

    return Promise.all([skills, user, levelsQuests, levels]).then(results => {
      let skills = JSON.parse(JSON.stringify(results[0]));
      let user = JSON.parse(JSON.stringify(results[1]));
      let quests = JSON.parse(JSON.stringify(results[2]));
      let levels = JSON.parse(JSON.stringify(results[3]))//.map(el => el.cap_amount)
      let finishedUser = user[0];
      delete finishedUser.hashed_password;
      finishedUser.skills = [];
      skills.forEach(skillObj => {finishedUser.skills.push(skillObj)})
      finishedUser.skills.forEach(el => {
        el.level = 1
        el.level_cap = 520000
        levels.forEach(level => {
          if (parseInt(level.cap_amount) < parseInt(el.xp_gained)) {
            el.level = parseInt(level.id) + 1
            el.level_cap = parseInt(level.cap_amount) + 520000
          }
        })
      })
      finishedUser.skills.forEach(el => {
        el.quests = []
        quests.forEach(questObj => {
          if (questObj.skill_id === el.skill_id) {
            el.quests.push(questObj)
          }
        })
      })
      return finishedUser
    })
  }
}


module.exports = Dashboard;
