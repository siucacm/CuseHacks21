import * as Knex from "knex";
import * as MachineRating from '../models/MachineRating'
import * as UserRating from '../models/UserRating'

export async function up(knex: Knex): Promise<void[]> {
  return Promise.all([
    MachineRating.Schema(knex),
    UserRating.Schema(knex)
  ])
}


export async function down(knex: Knex): Promise<void[]> {
  return Promise.all([
    MachineRating.DestroySchema(knex),
    UserRating.Schema(knex)
  ])
}

