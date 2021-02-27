import Knex from 'knex'
import db from '../db'

export function Schema(knex : Knex) : Promise<void> {
  return knex.schema.createTable('user_ratings', table => {
    table.string('article_name').primary()
    table.uuid('user_id').references('id').inTable('users').onDelete('CASCADE')
    table.integer('value')
  })
}

export function DestroySchema(knex : Knex) : Promise<void> {
  return knex.schema.dropTable('user_ratings');
}

export function CreateUserRating(link : String, userId : String, value : Number) {
  return db('user_ratings').insert({article_link: link, user_id: userId, value})
}