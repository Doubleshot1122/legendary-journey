const Resource = require('./resource')('quests')
const db = require('../db/connections.js');


class Quests extends Resource {
  constructor() {}

  static storyByPivIDs(projID, storyID){
    return db('quests').where({pivotal_project_id:proj_id, story_id: storyID}).first()
  }

}


module.exports = Quests;
