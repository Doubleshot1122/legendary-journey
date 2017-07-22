exports.up = (knex) => {
  return knex.schema.createTable('quests', table => {
    table.increments()
    table.string('type').notNullable()
    table.string('name').notNullable()
    table.text('description').notNullable()
    table.bigInteger('xp_amount').notNullable()
    table.string('project_name')
    table.integer('owner_id')
    table.integer('pivotal_project_id')
    table.integer('story_id')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('quests')
}
