const Resource = require('./resource')('quests')
const rp = require('request-promise')
const BASE_URL = "https://www.pivotaltracker.com/services/v5"

class Quests extends Resource {
  constructor() {}

  static showStories(){
    let proj_id = 2076033
    console.log("===Model====");
    console.log(`${BASE_URL}/projects/${proj_id}/stories`);
    return rp({
      method: 'GET',
      uri: `${BASE_URL}/projects/${proj_id}/stories`,
      headers: {'X-TrackerToken': 'fb0ff656b12bf40cee14581a7854f840'},
      json:true
    }).then(results => {
      let output = results.map(el => {return el.name})
      return results
    })
  }
}


module.exports = Quests;
