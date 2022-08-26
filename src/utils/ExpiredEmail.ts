import { Knex } from "knex";

export class ExpiredEmail {
  #database: Knex

  constructor(database: Knex) {
    this.#database = database;
  }

  async delete() {
    setInterval(async () => {
      try {
        this.#database.raw(`delete FROM company where date_format(createdAt, '%Y-%m-%d') = date_format(DATE_ADD(NOW(), INTERVAL -7 DAY), '%Y-%m-%d') and id = '2f90e873-6e4a-4407-a4e0-da25857a0f93' and confirmed = 0`)
      } catch (error) {
        console.log(error)
      }
    }, 604800000)
  }
}

