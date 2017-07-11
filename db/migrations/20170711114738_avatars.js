exports.up = (knex) => {
  return knex.schema.createTable('avatars', table => {
    table.increments()
    table.text('image_url').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('avatars')
}
