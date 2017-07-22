const db = require('../db/connections.js');
const rp = require('request-promise')
const BASE_URL = "https://www.pivotaltracker.com/services/v5/"

class Dashboard {
  constructor() {}

  static showUser(id){

    

    let skills =  db('skills').select('skills.name', 'skill_user.skill_id', 'skill_user.user_id', 'skill_user.xp_gained').innerJoin('skill_user', 'skills.id', 'skill_user.skill_id')
    .where({user_id: id})

    let user = db('users').select('users.*', 'teams.team_name', 'teams.manager_id')
    .innerJoin('teams', 'users.team_id', 'teams.id')
    .where({'users.id':id})

    return Promise.all([skills, user]).then(results => {
      let skills = JSON.parse(JSON.stringify(results[0]));
      let user = JSON.parse(JSON.stringify(results[1]));
      let finishedUser = user[0];
      delete finishedUser.hashed_password;
      finishedUser.skills = [];
      skills.forEach(el => finishedUser.skills.push(el))
      return finishedUser
    })
  }
}


module.exports = Dashboard;
