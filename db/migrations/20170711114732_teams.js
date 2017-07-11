exports.up = (knex) => {
  return knex.schema.createTable('teams', table => {
    table.increments()
    table.integer('manager_id')
    table.integer('lead_id').notNullable()
    table.string('team_name').notNullable()
    table.integer('avatar_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('teams')
}


//manager_id is user_id
//lead_id is user_id and can match manager_id
