const db = require('../db/connections.js');

function ResourceFactory(table) {
  class Resource {
    constructor() {}

    static all(){
      return db(table)
    }

    static create(body){
      return db(table).insert(body).returning('*')
    }

    static show(id){
      return db(table).where({id}).first()
    }

    static update(id, body){
      return db(table).update(body, '*').where({id})
    }
  }

  return Resource;
}


module.exports = ResourceFactory;
