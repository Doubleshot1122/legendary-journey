const db = require('../db/connections.js')

class Dashboard {
  constructor() {}

  static showUser(id){
    let skills =  db('skills').select('skills.name', 'skill_user.skill_id', 'skill_user.user_id', 'skill_user.xp_gained').innerJoin('skill_user', 'skills.id', 'skill_user.skill_id')
    .where({user_id: id})

    return Promise.all([skills]).then(results => {
      let output = JSON.parse(JSON.stringify(results[0]))
      return output
    })
  }
}


module.exports = Dashboard;
