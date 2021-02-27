import * as Knex from "knex";
import * as User from '../models/User'


export async function up(knex: Knex): Promise<void> {
  await knex.raw('create extension if not exists "uuid-ossp"')
  return User.Schema(knex)
}


export async function down(knex: Knex): Promise<void> {
  await knex.raw('drop extension if exists "uuid-ossp"')
  return User.DestroySchema(knex)
}

