exports.up = (knex) => {
  return knex.schema.createTable('tasks', table => {
    table.increments()
    table.string('quest_id').notNullable()
    table.string('description').notNullable()
    table.boolean('complete').defaultTo('false').notNullable()
    table.integer('pivotal_task_id')
    table.integer('position').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('tasks')
}
