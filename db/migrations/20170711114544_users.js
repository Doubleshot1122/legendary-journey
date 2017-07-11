exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('user_name').notNullable()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.integer('avatar_id').notNullable()
    table.integer('team_id')
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
