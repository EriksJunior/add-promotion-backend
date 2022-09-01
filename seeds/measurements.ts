import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("measurements").del();

    // Inserts seed entries
    await knex("measurements").insert([
        { id: 1, description: "PP" },
        { id: 2, description: "P" },
        { id: 3, description: "M" },
        { id: 4, description: "G" },
        { id: 5, description: "GG" },
        { id: 6, description: "XG" },
        { id: 7, description: "XGG" }, ,
        { id: 8, description: "EG" },
        { id: 9, description: "EGG" }
    ]);
};
