import Knex from 'knex'
import db from '../db'

import { v4 as uuid } from 'uuid'

export function Schema(knex : Knex) : Promise<void> {
  return knex.schema.createTable('users', table => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
  })
}

export function DestroySchema(knex : Knex) : Promise<void> {
  return knex.raw('DROP TABLE users CASCADE');
}

export function GetUserById(id : String) {
  return db('users')
    .select('*')
    .where({id})
}

export function CreateUser() {
  let id = uuid()
  return db('users')
    .insert({id})
    .returning('id')
}