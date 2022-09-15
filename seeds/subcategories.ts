import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("subcategories").del();

    // Inserts seed entries
    await knex("subcategories").insert([
        { id: 1, idCategory: 1, description: "Bebidas" },
        { id: 2, idCategory: 1, description: "Comida Preparada" },
        { id: 3, idCategory: 1, description: "Congelados" },
        { id: 4, idCategory: 1, description: "Frescos" },
        { id: 5, idCategory: 1, description: "Mercearia" },
        { id: 6, idCategory: 1, description: "Outros" },
        { id: 7, idCategory: 2, description: "Acessórios de Moda" },
        { id: 8, idCategory: 2, description: "Agasalhos" },
        { id: 9, idCategory: 2, description: "Bermudas e Shorts" },
        { id: 10, idCategory: 2, description: "Blusas" },
        { id: 11, idCategory: 2, description: "Calçados" },
        { id: 12, idCategory: 2, description: "Calças" },
        { id: 13, idCategory: 2, description: "Camisas" },
        { id: 14, idCategory: 2, description: "Camisetas" },
        { id: 15, idCategory: 2, description: "Kimonos" },
        { id: 16, idCategory: 2, description: "Kits de Conjuntos de Roupa" },
        { id: 17, idCategory: 2, description: "Leggings" },
        { id: 18, idCategory: 2, description: "Macacão" },
        { id: 19, idCategory: 2, description: "Malas e Bolsas" },
        { id: 20, idCategory: 2, description: "Moda Fitness" },
        { id: 21, idCategory: 2, description: "Moda Íntima e Lingerie" },
        { id: 22, idCategory: 2, description: "Moda Praia" },
        { id: 23, idCategory: 2, description: "Roupas para Bebês" },
        { id: 24, idCategory: 2, description: "Saias" },
        { id: 25, idCategory: 2, description: "Ternos" },
        { id: 26, idCategory: 2, description: "Vestidos" },
        { id: 26, idCategory: 2, description: "Outros" },
        { id: 27, idCategory: 3, description: "Materiais Escolares" },
        { id: 28, idCategory: 3, description: "Outros" },
        { id: 29, idCategory: 4, description: "Artefatos para Cabelo" },
        { id: 30, idCategory: 4, description: "Artigos para Cabeleireiros" },
        { id: 31, idCategory: 4, description: "Barbearia" },
        { id: 32, idCategory: 4, description: "Cuidados com a Pele" },
        { id: 33, idCategory: 4, description: "Cuidados com o Cabelo" },
        { id: 34, idCategory: 4, description: "Depilação" },
        { id: 35, idCategory: 4, description: "Farmácia" },
        { id: 36, idCategory: 4, description: "Higiene Pessoal" },
        { id: 37, idCategory: 4, description: "Manicure e Pedicure" },
        { id: 38, idCategory: 4, description: "Maquiagem" },
        { id: 39, idCategory: 4, description: "Perfumes e Fragrâncias" },
        { id: 40, idCategory: 4, description: "Tratamentos de Beleza" },
        { id: 41, idCategory: 4, description: "Outros" },
        { id: 42, idCategory: 5, description: "Álbuns e Figurinhas" },
        { id: 43, idCategory: 5, description: "Anti-stress e Engenho" },
        { id: 44, idCategory: 5, description: "Ar Livre e Playground" },
        { id: 45, idCategory: 5, description: "Artes e Atividades" },
        { id: 46, idCategory: 5, description: "Bonecos e Bonecas" },
        { id: 47, idCategory: 5, description: "Brinquedos de Faz de Conta" },
        { id: 48, idCategory: 5, description: "Brinquedos de Montar" },
        { id: 49, idCategory: 5, description: "Brinquedos de Pegadinhas" },
        { id: 50, idCategory: 5, description: "Brinquedos de Praia e Piscina" },
        { id: 51, idCategory: 5, description: "Brinquedos Eletrônicos" },
        { id: 52, idCategory: 5, description: "Brinquedos para Bebês" },
        { id: 53, idCategory: 5, description: "Casinhas e Barracas" },
        { id: 54, idCategory: 5, description: "Fantoches e Marionetas" },
        { id: 55, idCategory: 5, description: "Hobbies" },
        { id: 56, idCategory: 5, description: "Instrumentos Musicais" },
        { id: 57, idCategory: 5, description: "Jogos de Salão" },
        { id: 58, idCategory: 5, description: "Jogos de Tabuleiro e Cartas" },
        { id: 59, idCategory: 5, description: "Lançadores de Brinquedo" },
        { id: 60, idCategory: 5, description: "Mini Veículos e Bicicletas" },
        { id: 61, idCategory: 5, description: "Patins e Skates" },
        { id: 62, idCategory: 5, description: "Pelúcias" },
        { id: 63, idCategory: 5, description: "Piscinas e Infláveis" },
        { id: 64, idCategory: 5, description: "Veículos de Brinquedo" },
        { id: 65, idCategory: 5, description: "Outros" },
        { id: 66, idCategory: 8, description: "Banheiros" },
        { id: 67, idCategory: 8, description: "Camas, Colchões e Acessórios" },
        { id: 68, idCategory: 8, description: "Cozinha" },
        { id: 69, idCategory: 8, description: "Cuidado da Casa e Lavanderia" },
        { id: 70, idCategory: 8, description: "Enfeites e Decoração da Casa" },
        { id: 71, idCategory: 8, description: "Iluminação Residencial" },
        { id: 72, idCategory: 8, description: "Jardim e Ar Livre" },
        { id: 73, idCategory: 8, description: "Móveis para Casa" },
        { id: 74, idCategory: 8, description: "Organização para Casa" },
        { id: 75, idCategory: 8, description: "Segurança para Casa" },
        { id: 76, idCategory: 8, description: "Têxteis de Casa e Decoração" },
        { id: 77, idCategory: 8, description: "Outros" },
        { id: 78, idCategory: 9, description: "Acessórios para Celulares" },
        { id: 79, idCategory: 9, description: "Celulares e Smartphones" },
        { id: 80, idCategory: 9, description: "Óculos de Realidade Virtual" },
        { id: 81, idCategory: 9, description: "Peças para Celular" },
        { id: 82, idCategory: 9, description: "Rádio Comunicadores" },
        { id: 83, idCategory: 9, description: "Smartwatches e Acessórios" },
        { id: 84, idCategory: 9, description: "Telefonia Fixa e Sem Fio" },
        { id: 85, idCategory: 9, description: "VoIP" },
        { id: 86, idCategory: 9, description: "Outros" },
        { id: 87, idCategory: 10, description: "Acessórios de Construção" },
        { id: 88, idCategory: 10, description: "Encanamento" },
        { id: 89, idCategory: 10, description: "Energia" },
        { id: 90, idCategory: 10, description: "Loja das Tintas" },
        { id: 91, idCategory: 10, description: "Máquinas para Construção" },
        { id: 92, idCategory: 10, description: "Materiais de Obra" },
        { id: 93, idCategory: 10, description: "Mobiliário para Banheiros" },
        { id: 94, idCategory: 10, description: "Mobiliário para Cozinhas" },
        { id: 95, idCategory: 10, description: "Pisos e Rejuntes" },
        { id: 96, idCategory: 10, description: "Outros" },
        { id: 97, idCategory: 11, description: "Ar e Ventilação" },
        { id: 98, idCategory: 11, description: "Bebedouros e Purificadores" },
        { id: 99, idCategory: 11, description: "Cuidado Pessoal" },
        { id: 100, idCategory: 11, description: "Fornos e Fogões" },
        { id: 101, idCategory: 11, description: "Lavadores" },
        { id: 102, idCategory: 11, description: "Pequenos Eletrodomésticos" },
        { id: 103, idCategory: 11, description: "Refrigeração" },
        { id: 104, idCategory: 11, description: "Outros" },
        { id: 105, idCategory: 12, description: "Acessórios para Áudio e Vídeo" },
        { id: 106, idCategory: 12, description: "Acessórios para TV" },
        { id: 107, idCategory: 12, description: "Aparelhos DVD e Bluray" },
        { id: 108, idCategory: 12, description: "Áudio" },
        { id: 109, idCategory: 12, description: "Bolsas e Estojos" },
        { id: 110, idCategory: 12, description: "Cabos" },
        { id: 111, idCategory: 12, description: "Componentes Eletrônicos" },
        { id: 112, idCategory: 12, description: "Controles Remotos" },
        { id: 113, idCategory: 12, description: "Drones e Acessórios" },
        { id: 114, idCategory: 12, description: "Media Streaming" },
        { id: 115, idCategory: 12, description: "Peças para TV" },
        { id: 116, idCategory: 12, description: "Pilhas e Carregadores" },
        { id: 117, idCategory: 12, description: "Projetores e Telas" },
        { id: 118, idCategory: 12, description: "Televisores" },
        { id: 119, idCategory: 12, description: "Outros Eletrônicos" },
        { id: 120, idCategory: 16, description: "Acessórios para Consoles" },
        { id: 121, idCategory: 16, description: "Acessórios para PC Gaming" },
        { id: 122, idCategory: 16, description: "Consoles" },
        { id: 123, idCategory: 16, description: "Fliperamas e Arcade" },
        { id: 124, idCategory: 16, description: "Peças para Consoles" },
        { id: 125, idCategory: 16, description: "Video Games" },
        { id: 126, idCategory: 16, description: "Outros" },
        { id: 127, idCategory: 17, description: "Apartamentos" },
        { id: 128, idCategory: 17, description: "Casas" },
        { id: 129, idCategory: 17, description: "Chácaras" },
        { id: 130, idCategory: 17, description: "Fazendas" },
        { id: 131, idCategory: 17, description: "Galpões" },
        { id: 132, idCategory: 17, description: "Lojas Comerciais" },
        { id: 133, idCategory: 17, description: "Salas Comerciais" },
        { id: 134, idCategory: 17, description: "Sítios" },
        { id: 135, idCategory: 17, description: "Terrenos" },
        { id: 136, idCategory: 17, description: "Outros Imóveis" },
        { id: 137, idCategory: 18, description: "Acessórios de Antiestática" },
        { id: 138, idCategory: 18, description: "Acessórios para PC Gaming" },
        { id: 139, idCategory: 18, description: "Armazenamento" },
        { id: 140, idCategory: 18, description: "Cabos e Hubs USB" },
        { id: 141, idCategory: 18, description: "Componentes para PC" },
        { id: 142, idCategory: 18, description: "Conectividade e Redes" },
        { id: 143, idCategory: 18, description: "Estabilizadores e No Breaks" },
        { id: 144, idCategory: 18, description: "Impressão" },
        { id: 145, idCategory: 18, description: "Leitores e Scanners" },
        { id: 146, idCategory: 18, description: "Limpeza de PCs" },
        { id: 147, idCategory: 18, description: "Monitores e Acessórios" },
        { id: 148, idCategory: 18, description: "Palms e Handhelds" },
        { id: 149, idCategory: 18, description: "PC de Mesa" },
        { id: 150, idCategory: 18, description: "Periféricos para PC" },
        { id: 151, idCategory: 18, description: "Portáteis e Acessórios" },
        { id: 152, idCategory: 18, description: "Projetores e Telas" },
        { id: 153, idCategory: 18, description: "Software" },
        { id: 154, idCategory: 18, description: "Tablets e Acessórios" },
        { id: 155, idCategory: 18, description: "Outros" },
        { id: 156, idCategory: 20, description: "Baterias e Percussão" },
        { id: 157, idCategory: 20, description: "Caixas de Som" },
        { id: 158, idCategory: 20, description: "Equipamento para DJs" },
        { id: 159, idCategory: 20, description: "Estúdio de Gravação" },
        { id: 160, idCategory: 20, description: "Instrumentos de Corda" },
        { id: 161, idCategory: 20, description: "Instrumentos de Sopro" },
        { id: 162, idCategory: 20, description: "Metrônomos" },
        { id: 163, idCategory: 20, description: "Microfones e Amplificadores" },
        { id: 164, idCategory: 20, description: "Partituras e Letras" },
        { id: 165, idCategory: 20, description: "Pedais e Acessórios" },
        { id: 166, idCategory: 20, description: "Pianos e Teclados" },
        { id: 167, idCategory: 20, description: "Outros" },
        { id: 168, idCategory: 21, description: "Acessórios Para Relógios" },
        { id: 169, idCategory: 21, description: "Artigos de Joalharia" },
        { id: 170, idCategory: 21, description: "Canetas e Lapiseiras de Luxo" },
        { id: 171, idCategory: 21, description: "Joias e Bijuterias" },
        { id: 172, idCategory: 21, description: "Pedras Preciosas" },
        { id: 173, idCategory: 21, description: "Piercings" },
        { id: 174, idCategory: 21, description: "Porta Joias" },
        { id: 175, idCategory: 21, description: "Relógios" },
        { id: 176, idCategory: 21, description: "Outros" },
        { id: 177, idCategory: 22, description: "Catálogos" },
        { id: 178, idCategory: 22, description: "Ebooks" },
        { id: 179, idCategory: 22, description: "HQs" },
        { id: 180, idCategory: 22, description: "Livros Fisicos" },
        { id: 181, idCategory: 22, description: "Mangá" },
        { id: 182, idCategory: 22, description: "Revistas" },
        { id: 183, idCategory: 22, description: "Outros" },
        { id: 184, idCategory: 23, description: "Filmes" },
        { id: 185, idCategory: 23, description: "Filmes Online" },
        { id: 186, idCategory: 23, description: "Música" },
        { id: 187, idCategory: 23, description: "Seriados" },
        { id: 188, idCategory: 23, description: "Seriados Online" },
        { id: 189, idCategory: 23, description: "Outros" },
        { id: 190, idCategory: 24, description: "Cuidado da Saúde" },
        { id: 191, idCategory: 24, description: "Equipamento Médico" },
        { id: 192, idCategory: 24, description: "Massagem" },
        { id: 193, idCategory: 24, description: "Mobilidade" },
        { id: 194, idCategory: 24, description: "Ortopedia" },
        { id: 195, idCategory: 24, description: "Suplementos Alimentares" },
        { id: 196, idCategory: 24, description: "Terapias Alternativas" },
        { id: 197, idCategory: 24, description: "Outros" },
        { id: 198, idCategory: 25, description: "Academia e Esportes" },
        { id: 199, idCategory: 25, description: "Animais" },
        { id: 200, idCategory: 25, description: "Beleza, Estética e Bem Estar" },
        { id: 201, idCategory: 25, description: "Educação" },
        { id: 202, idCategory: 25, description: "Festas e Eventos" },
        { id: 203, idCategory: 25, description: "Gastronomia" },
        { id: 204, idCategory: 25, description: "Gráficas e Impressão" },
        { id: 205, idCategory: 25, description: "Lar" },
        { id: 206, idCategory: 25, description: "Marketing e Internet" },
        { id: 207, idCategory: 25, description: "Outros Profissionais" },
        { id: 208, idCategory: 25, description: "Outros Serviços" },
        { id: 209, idCategory: 25, description: "Saúde" },
        { id: 210, idCategory: 25, description: "Suporte Técnico" },
        { id: 211, idCategory: 25, description: "Veículos e Transportes" },
        { id: 212, idCategory: 25, description: "Vestuário" },
        { id: 213, idCategory: 25, description: "Viagens e Turismo" },
        { id: 214, idCategory: 26, description: "Aces. de Carros e Caminhonetes" },
        { id: 215, idCategory: 26, description: "Aces. de Motos e Quadriciclos" },
        { id: 216, idCategory: 26, description: "Acessórios Náuticos" },
        { id: 217, idCategory: 26, description: "Acessórios para Caminhões" },
        { id: 218, idCategory: 26, description: "Ferramentas para Veículos" },
        { id: 219, idCategory: 26, description: "GNV" },
        { id: 220, idCategory: 26, description: "Limpeza Automotiva" },
        { id: 221, idCategory: 26, description: "Lubrificantes e Fluidos" },
        { id: 222, idCategory: 26, description: "Motos" },
        { id: 223, idCategory: 26, description: "Navegadores GPS" },
        { id: 224, idCategory: 26, description: "Peças de Carros e Caminhonetes" },
        { id: 225, idCategory: 26, description: "Peças de Linha Pesada" },
        { id: 226, idCategory: 26, description: "Peças de Motos e Quadriciclos" },
        { id: 227, idCategory: 26, description: "Peças Náuticas" },
        { id: 228, idCategory: 26, description: "Performance" },
        { id: 229, idCategory: 26, description: "Pneus" },
        { id: 230, idCategory: 26, description: "Rodas" },
        { id: 231, idCategory: 26, description: "Segurança Veicular" },
        { id: 232, idCategory: 26, description: "Serviços Programados" },
        { id: 233, idCategory: 26, description: "Som Automotivo" },
        { id: 234, idCategory: 26, description: "Tags de Pagamento de Pedágio" },
        { id: 235, idCategory: 26, description: "Tuning" },
        { id: 236, idCategory: 26, description: "Outros" },
    ]);
};