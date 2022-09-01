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
        { id: 7, description: "XGG" },
        { id: 8, description: "EG" },
        { id: 9, description: "EGG" },
        { id: 10, description: "32/33" },
        { id: 11, description: "33" },
        { id: 12, description: "34" },
        { id: 13, description: "35" },
        { id: 14, description: "35/36" },
        { id: 15, description: "36" },
        { id: 16, description: "36/37" },
        { id: 17, description: "37" },
        { id: 18, description: "38" },
        { id: 19, description: "39" },
        { id: 20, description: "40" },
        { id: 21, description: "41" },
        { id: 22, description: "42" },
        { id: 23, description: "42/43" },
        { id: 24, description: "43" },
        { id: 25, description: "43/44" },
        { id: 26, description: "44" },
        { id: 27, description: "46" },
    ]);
};
