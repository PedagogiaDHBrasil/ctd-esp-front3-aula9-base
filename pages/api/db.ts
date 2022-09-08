// Aqui encontramos as informações que devemos retornar
// em cada uma de nossas rotas de API.

// Para o caminho dos produtos em destaque

export const products = [
  {
    id: 1,
    title: "Mochila com alças",
    price: 7500,
    description:
      "Sua mochila perfeita para passeios do dia a dia e de fim de semana. Armazene seu notebook (até 15 polegadas) na capa acolchoada e proteja-o contra arranhões e choques",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: 4,
  },
  {
    id: 2,
    title: "Camisa manga 3/4 casual",
    price: 5000,
    description:
      "Estilo slim fit, manga de três quartos contrastante, gola de três botões, peso leve e tecido macio para uso confortável e elegante. Mangas costuradas sólidas com decote redondo para durabilidade.",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: 5,
  },
  {
    id: 3,
    title: "Jaqueta de algodão",
    price: 9500,
    description:
      "Excelente jaqueta quente de primavera/outono/inverno, adequada para muitas ocasiões, como trabalho, caminhadas, ciclismo, viagens ou outras atividades ao ar livre.",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: 4,
  },
  {
    id: 4,
    title: "Camisa de manga longa",
    price: 4300,
    description:
      "Camisa de manga comprida em algodão, ideal para a primavera. Decote em 'v' apertado no pescoço.",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: 2,
  },
  {
    id: 5,
    title: "Pulsera de mujer Naga",
    price: 6950,
    description:
      "De nuestra colección Legends, el Naga se inspiró en el mítico dragón de agua que protege la perla del océano. Transmite amor y abundancia, y es símbolo de protección.",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: 3,
  },
  {
    id: 6,
    title: "Pulseira feminina de prata",
    price: 10680,
    description:
      "Pulseira de prata com detalhes ao redor. Um tamanho Ideal para festas ou eventos.",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: 3,
  },
  {
    id: 7,
    title: "Anel princesa banhado a ouro branco",
    price: 9900,
    description:
      "Anel de princesa criado exclusivamente para ela. Ideal para mimar seu amor em seu aniversário, dia dos namorados ou qualquer outra data.",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: 5,
  },
  {
    id: 8,
    title: "Aros de aço inoxidável banhados a ouro rosa",
    price: 7500,
    description:
      "Brinco túnel duplo folheado a ouro rosé. Feito de aço inoxidável 316L",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: 1,
  },
  {
    id: 9,
    title: "Disco externo WD de 2TB",
    price: 6400,
    description:
      "Compatibilidade com USB 3.0 e USB 2.0 Transferências de dados rápidas Melhora o desempenho do PC Alta capacidade; Compatibilidade NTFS formatado para Windows 10, Windows 8.1, Windows 7.",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: 3,
  },
  {
    id: 10,
    title: "SSD interna SanDisk SSD PLUS 1TB",
    price: 3400,
    description:
      "O equilíbrio perfeito entre desempenho e confiabilidade Velocidades de leitura/gravação de até 535 MB/s/450 MB/s (com base em testes internos).",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: 2,
  },
];

// Para a rota de termos e condições
export const tycs = {
  version: "3 de julho, 2022",
  tycs: [
    {
      id: 1,
      title: "Em geral",
      description: `Loja Gratuita é uma empresa que oferece serviços principalmente ligados ao comércio eletrônico.
                     Os serviços são projetados para formar um ecossistema que permite que as pessoas vendam,
                     comprar, pagar, enviar produtos e realizar outras atividades comerciais com tecnologia aplicada.`,
    },
    {
      id: 2,
      title: "Idade minima",
      description: `Pessoas maiores de idade que tenham capacidade legal para contratar podem usar nossos serviços.
                     Os menores, a partir dos 13 anos, só podem utilizar a sua conta com autorização do
                     representante legal, que será responsável por todos os atos e obrigações decorrentes da
                     uso dessa conta e quem deve garantir o uso responsável e adequado da mesma em atenção aos
                     a maturidade do menor que ele autorizar.`,
    },
    {
      id: 3,
      title: "Conta",
      description: `Para utilizar os nossos serviços, deverá preencher o formulário de registo. Após o término,
                     você obterá uma conta pessoal, única e intransferível, ou seja, em nenhuma circunstância
                     podem ser vendidos ou transferidos para outra pessoa. É acessado com a chave de segurança pessoal que você escolheu
                     e que devem ser mantidos em sigilo absoluto.`,
    },
  ],
};
