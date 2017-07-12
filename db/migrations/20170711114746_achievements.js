exports.up = (knex) => {
  return knex.schema.createTable('achievements', table => {
    table.increments()
    table.string('name').notNullable()
    table.text('description').notNullable()
    table.dateTime('date_completed')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('achievements')
}
