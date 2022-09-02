import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("subcategories").del();

    // Inserts seed entries
    await knex("subcategories").insert([
        { id: 1, idCategory: 1, description: "Alimentos e Bebidas" },
        { id: 2, idCategory: 1, description: "Calçados, Roupas e Bolsas" },
        { id: 3, idCategory: 1, description: "Papelaria" },
        { id: 4, idCategory: 1, description: "Beleza e Cuidado Pessoal" },
        { id: 5, idCategory: 1, description: "Brinquedos e Hobbies" },
        { id: 6, idCategory: 1, description: "Câmeras" },
        { id: 7, idCategory: 1, description: "Carros, Motos e Outros" },
        { id: 8, idCategory: 1, description: "Casa, Móveis e Decoração" },
        { id: 9, idCategory: 1, description: "Celulares e Telefones" },
        { id: 10, idCategory: 1, description: "Construção" },
        { id: 11, idCategory: 1, description: "Eletrodomésticos" },
        { id: 12, idCategory: 1, description: "Eletrônicos, Áudio e Vídeo" },
        { id: 13, idCategory: 1, description: "Esportes" },
        { id: 14, idCategory: 1, description: "Ferramentas" },
        { id: 15, idCategory: 1, description: "Festas" },
        { id: 16, idCategory: 1, description: "Games" },
        { id: 17, idCategory: 1, description: "Imóveis" },
        { id: 18, idCategory: 1, description: "Informática" },
        { id: 19, idCategory: 1, description: "Ingressos" },
        { id: 20, idCategory: 1, description: "Instrumentos Musicais" },
        { id: 21, idCategory: 1, description: "Joias e Relógios" },
        { id: 22, idCategory: 1, description: "Livros, Revistas e Comics" },
        { id: 23, idCategory: 1, description: "Música, Filmes e Seriados" },
        { id: 24, idCategory: 1, description: "Saúde" },
        { id: 25, idCategory: 1, description: "Serviços" },
        { id: 26, idCategory: 1, description: "Acessórios para Veículos" },
    ]);
};
