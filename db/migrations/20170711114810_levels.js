exports.up = (knex) => {
  return knex.schema.createTable('levels', table => {
    table.increments()
    table.bigInteger('cap_amount').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('levels')
}
