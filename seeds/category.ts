import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("categories").del();

    // Inserts seed entries
    await knex("categories").insert([
        { id: 1, description: "Alimentos e Bebidas" },
        { id: 2, description: "Calçados, Roupas e Bolsas" },
        { id: 3, description: "Papelaria" },
        { id: 4, description: "Beleza e Cuidado Pessoal" },
        { id: 5, description: "Brinquedos e Hobbies" },
        { id: 6, description: "Câmeras" },
        { id: 7, description: "Carros, Motos e Outros" },
        { id: 8, description: "Casa, Móveis e Decoração" },
        { id: 9, description: "Celulares e Telefones" },
        { id: 10, description: "Construção" },
        { id: 11, description: "Eletrodomésticos" },
        { id: 12, description: "Eletrônicos, Áudio e Vídeo" },
        { id: 13, description: "Esportes" },
        { id: 14, description: "Ferramentas" },
        { id: 15, description: "Festas" },
        { id: 16, description: "Games" },
        { id: 17, description: "Imóveis" },
        { id: 18, description: "Informática" },
        { id: 19, description: "Ingressos" },
        { id: 20, description: "Instrumentos Musicais" },
        { id: 21, description: "Joias e Relógios" },
        { id: 22, description: "Livros, Revistas e Comics" },
        { id: 23, description: "Música, Filmes e Seriados" },
        { id: 24, description: "Saúde" },
        { id: 25, description: "Serviços" },
        { id: 26, description: "Acessórios para Veículos" },
    ]);
};
