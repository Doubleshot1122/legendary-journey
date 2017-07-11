exports.up = (knex) => {
  return knex.schema.createTable('skills', table => {
    table.increments()
    table.string('name').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('skills')
}
