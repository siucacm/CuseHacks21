import Knex from 'knex'
import db from '../db'

export function Schema(knex : Knex) : Promise<void> {
  return knex.schema.createTable('machine_ratings', table => {
    table.increments('id')
    table.integer('value')
    table.string('article_name')
  })
}

export function DestroySchema(knex : Knex) : Promise<void> {
  return knex.schema.dropTable('machine_ratings');
}

export function CreateMachineRating(value : Number, articleName : String) {
  return db('machine_ratings').insert({value, article_name: articleName})
}