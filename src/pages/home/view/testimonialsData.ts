export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarSrc: string;
  avatarAlt: string;
}

/**
 * Depoimentos da Home na ordem definida pelo conteúdo oficial.
 * Itens sem nome no texto original usam "Colaborador(a) SouJunior" — substitua quando tiver o nome.
 */
export const HOME_TESTIMONIALS: TestimonialItem[] = [
  {
    id: '0',
    quote:
      'Oi, sou a Priscila, UX/UI aqui na SouJunior e poder contribuir com a iniciativa é incrível!! Além de aprender muito com os desenvolvimentos de projetos, tenho a oportunidade de fazer networking e, com isso, trocar muitas experiências.',
    name: 'Priscilla Souza',
    role: 'UI & UX Designer',
    avatarSrc: '/testimonials/img.png',
    avatarAlt: 'Priscilla Souza',
  },
  {
    id: '1',
    quote:
      'Fui voluntário na Sou Junior e pude aprender sobre diversos aspectos da área de desenvolvimento e empregabilidade, o que acabou me auxiliando em processos seletivos, construção do perfil profissional e como ser encontrado pelos tech recruiters, até que após 6 meses de participação meu "sim" chegou.',
    name: 'Anderson Nunes',
    role: 'Front-end',
    avatarSrc: '/testimonials/img2.png',
    avatarAlt: 'Anderson Nunes',
  },
  {
    id: '2',
    quote:
      'Ambientes controlados, como salas de aula de cursos, são distantes da realidade de trabalho, repletos de variáveis desconhecidas. Isso gera um vácuo para os aprendizes, dificultando o progresso, sem que os estágios possam preenchê-lo. A SouJunior resolve esse problema, sendo aberta para todos. ',
    name: 'Caique Fonseca',
    role: 'UI & UX Designer',
    avatarSrc: '/testimonials/img3.png',
    avatarAlt: 'Caique Fonseca',
  },
  {
    id: '3',
    quote:
      'Atuar como Dev Front-end nesse projeto tem sido algo prazeroso em minha vida. Aqui tenho colocado em prática não só as minhas capacidades técnicas, estou fazendo amigos, estou tendo a oportunidade de criar laços, de crescer. Estamos sendo mentorados em diversas áreas, nós capacitando, não só nas hards skils, mas como também nas soft skils. Acredito que poucos projetos são tão imersivos como esse.',
    name: 'Ana Santos',
    role: 'Front-end',
    avatarSrc: '/testimonials/img4.png',
    avatarAlt: 'Ana Santos',
  },
  {
    id: '4',
    quote:
      'A SouJunior está me proporcionando ter uma vivência de trabalho como UX/UI Designer. Aplicar o conteúdo estudado em cursos, de forma prática, trabalhar em equipe com metodologias ágeis e me desenvolver profissionalmente, ao mesmo tempo que esse projeto está sendo construído.',
    name: 'Anna Claudia Andrade',
    role: 'UI & UX Designer',
    avatarSrc: '/testimonials/img5.png',
    avatarAlt: 'Anna Claudia Andrade',
  },
  {
    id: '5',
    quote:
      'A Sou Junior me desafia todos os dias com experiencias reais de trabalho: através da mentoria e do compromisso com o trabalho',
    name: 'Priscylla A. Ribeiro',
    role: 'Mentora UI & UX Designer',
    avatarSrc: '/testimonials/img6.png',
    avatarAlt: 'Priscylla A. Ribeiro',
  },
  {
    id: '6',
    quote:
      'Para mim, a teoria só faz sentido quando consigo aplicá-la na prática. Na SouJunior, temos a oportunidade de fazer isso diariamente, o que torna nosso aprendizado muito mais efetivo.',
    name: 'Talita Bitencourt',
    role: 'APM',
    avatarSrc: '/testimonials/img7.png',
    avatarAlt: 'Talita Bitencourt',
  },
  {
    id: '7',
    quote:
      'É uma honra poder fazer parte da Sou Junior e colocar em prática o que venho estudando, tenho certeza que a cada dia ganho mais experiência e me torno um UX Designer melhor, e logo logo irei conquistar meu lugar no mercado de trabalho. Tudo isso graças a Sou Junior.',
    name: 'Eduardo Bezerra',
    role: 'UI & UX Designer',
    avatarSrc: '/testimonials/img8.png',
    avatarAlt: 'Eduardo Bezerra',
  },
];
