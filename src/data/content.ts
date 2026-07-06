// Conteúdo do site consolidado (textos e imagens originais da clínica)

import Aparelhos from '../assets/images/aparelhos-icon.png';
import Implantes from '../assets/images/implantes-icon.png';
import Proteses from '../assets/images/proteses-icon.png';
import Canal from '../assets/images/canal-icon.png';
import Clareamentos from '../assets/images/clareamentos-icon.png';
import Restauracoes from '../assets/images/restauracao-icon.png';
import HOFIcon from '../assets/images/hof-icon.png';
import Sisos from '../assets/images/sisos-icon.png';
import Gengivoplastia from '../assets/images/gengivoplastia-icon.png';
import Limpeza from '../assets/images/limpeza-icon.png';
import Odontopediatria from '../assets/images/odontopediatria-icon.png';
import Facetas from '../assets/images/facetas-icon.png';

import OrtoBanner1 from '../assets/images/banner_1_ortodontia.png';
import OrtoBanner2 from '../assets/images/banner_2_ortodontia.png';
import OrtoBanner3 from '../assets/images/banner_3_ortodontia.png';
import OrtoBanner4 from '../assets/images/banner_4_ortodontia.png';
import OrtoBanner5 from '../assets/images/banner_5_ortodontia.png';
import OrtoBanner6 from '../assets/images/banner_6_ortodontia.png';
import OrtoBanner7 from '../assets/images/banner_7_ortodontia.png';
import OrtoBanner8 from '../assets/images/banner_8_ortodontia.png';
import OrtoBanner9 from '../assets/images/banner_9_ortodontia.png';

import EndoBanner1 from '../assets/images/banner_1_endodontia.png';
import EndoBanner2 from '../assets/images/banner_2_endodontia.png';
import EndoBanner3 from '../assets/images/banner_3_endodontia.png';
import EndoBanner4 from '../assets/images/banner_4_endodontia.png';
import EndoBanner5 from '../assets/images/banner_5_endodontia.png';

import CirBanner1 from '../assets/images/banner_1_cirurgia.png';
import CirBanner2 from '../assets/images/banner_2_cirurgia.png';
import CirBanner3 from '../assets/images/banner_3_cirurgia.png';
import CirBanner4 from '../assets/images/banner_4_cirurgia.png';
import CirBanner5 from '../assets/images/banner_5_cirurgia.png';
import CirBanner6 from '../assets/images/banner_6_cirurgia.png';

import HOFBanner1 from '../assets/images/banner_1_hof.png';
import HOFBanner2 from '../assets/images/banner_2_hof.png';
import HOFBanner3 from '../assets/images/banner_3_hof.png';
import HOFBanner4 from '../assets/images/banner_4_hof.png';
import HOFBanner5 from '../assets/images/banner_5_hof.png';

import BannerImplanto from '../assets/images/banner_implanto.png';
import ImplantoCard1 from '../assets/images/card_1_implantodontia.png';
import ImplantoCard2 from '../assets/images/card_2_implantodontia.png';
import ImplantoCard3 from '../assets/images/card_3_implantodontia.png';
import ImplantoCard4 from '../assets/images/card_4_implantodontia.png';

import Pri from '../assets/images/pri.png';
import PriSobre from '../assets/images/pri_sobre.png';
import PriOrtodontia from '../assets/images/pri_ortodontia.png';
import PriEndodontia from '../assets/images/pri_endodontia.png';
import PriCirurgia from '../assets/images/pri_cirurgia.png';
import PriImplantodontia from '../assets/images/pri_implantodontia.png';
import PriHOF from '../assets/images/pri_hof.png';

import Fachada from '../assets/images/fachada2.png';
import AtendimentoMobile from '../assets/images/atendimento.png';
import AtendimentoWide from '../assets/images/atendimento2.png';

import MissaoIcon from '../assets/images/missao_icon.png';
import VisaoIcon from '../assets/images/visao_icon.png';
import ValoresIcon from '../assets/images/valores_icon.png';

import GalleryA from '../assets/images/A.jpg';
import GalleryB from '../assets/images/B.jpg';
import GalleryC from '../assets/images/C.jpg';
import GalleryD from '../assets/images/D.jpg';
import GalleryE from '../assets/images/E.jpg';
import GalleryF from '../assets/images/F.jpg';
import GalleryG from '../assets/images/G.jpg';
import GalleryH from '../assets/images/H.jpg';
import GalleryI from '../assets/images/I.jpg';
import GalleryJ from '../assets/images/J.jpg';
import GalleryK from '../assets/images/K.jpg';
import GalleryL from '../assets/images/L.jpg';
import GalleryM from '../assets/images/M.jpg';
import GalleryN from '../assets/images/N.jpg';

export const clinic = {
  name: 'Orthopress Odontologia',
  slogan: 'Seu sorriso é nossa paixão',
  sloganSub: 'Venha conhecer nosso trabalho!',
  city: 'Cianorte/PR',
  phone: '(44) 99836-1616',
  landline: '(44) 3039-0704',
  whatsappUrl:
    'https://api.whatsapp.com/send?phone=554498361616&text=Ol%C3%A1,%20gostaria%20de%20agendar%20uma%20consulta!',
  address: ['Travessa Itororó, 407 – Zona 1', 'Cianorte-PR', 'CEP 87200-113'],
  hours: ['Segunda à Sexta, das 09h às 19h', 'Sábado, das 08h às 12h'],
  social: {
    facebook: 'https://www.facebook.com/orthopressodontologia',
    instagram: 'https://www.instagram.com/orthopressodontologia/',
    youtube: 'https://www.youtube.com/@orthopressodontologia1423/',
  },
  stats: [
    { value: '+6.000', label: 'Sorrisos transformados' },
    { value: '+10', label: 'Anos de experiência' },
  ],
  aboutShort:
    'A Orthopress é uma clínica odontológica preparada para atender todas as necessidades de seus clientes. Contamos com uma estrutura completa onde o paciente encontrará um atendimento reservado, individualizado e de qualidade.',
};

export const images = {
  pri: Pri,
  priSobre: PriSobre,
  fachada: Fachada,
  atendimentoMobile: AtendimentoMobile,
  atendimentoWide: AtendimentoWide,
};

export interface Treatment {
  title: string;
  content: string;
  link: string;
  icon: string;
}

export const treatments: Treatment[] = [
  {
    title: 'Aparelhos',
    content:
      'Conquiste um sorriso alinhado e transformado com a magia dos aparelhos ortodônticos. Confira nossos modelos disponíveis e agende sua avaliação inicial com um especialista para dar início ao seu tratamento.',
    link: '/ortodontia',
    icon: Aparelhos,
  },
  {
    title: 'Canal',
    content:
      'Dor de dente muito forte, espontânea, contínua, que não passa com o uso de analgésicos? O tratamento de canal é a chave para aliviar a dor e salvar dentes, restaurando a saúde bucal e o conforto do paciente.',
    link: '/endodontia',
    icon: Canal,
  },
  {
    title: 'Sisos',
    content:
      'Os dentes do siso são uma parte natural do nosso desenvolvimento dentário, e sua extração é recomendada quando apresentam problemas de espaço ou impactação.',
    link: '/cirurgia',
    icon: Sisos,
  },
  {
    title: 'Implantes',
    content:
      'Implantes dentários são como raízes artificiais que sustentam sorrisos naturais, restabelecendo não apenas os dentes perdidos, mas também a confiança e qualidade de vida.',
    link: '/implantodontia',
    icon: Implantes,
  },
  {
    title: 'Próteses',
    content:
      'Com as próteses dentárias, reconstruímos sorrisos e restauramos a autoconfiança de nossos pacientes. Recupere o prazer de sorrir e comer com conforto e segurança.',
    link: '',
    icon: Proteses,
  },
  {
    title: 'Clareamentos',
    content:
      'O clareamento dental é o toque de brilho que seu sorriso merece, revelando a sua melhor versão com dentes mais brancos e radiantes. Confira todas as nossas opções disponíveis.',
    link: '',
    icon: Clareamentos,
  },
  {
    title: 'Restaurações',
    content:
      'Restaurações dentárias personalizadas, feitas sob medida para cada paciente, são a chave para um sorriso completo e funcional. Dê aos seus dentes o cuidado que eles merecem.',
    link: '',
    icon: Restauracoes,
  },
  {
    title: 'HOF',
    content:
      'A harmonização orofacial é a arte de realçar a beleza natural do seu rosto, equilibrando proporções e revitalizando sua aparência com procedimentos seguros e personalizados.',
    link: '/hof',
    icon: HOFIcon,
  },
  {
    title: 'Gengivoplastia',
    content:
      'Através da gengivoplastia, é possível eliminar o excesso de tecido gengival, revelando dentes mais longos e proporcionando um sorriso mais estético.',
    link: '',
    icon: Gengivoplastia,
  },
  {
    title: 'Limpeza',
    content:
      'A limpeza dentária regular é fundamental para manter a saúde bucal, prevenindo o acúmulo de placa bacteriana e evitando problemas como cáries e doenças gengivais.',
    link: '',
    icon: Limpeza,
  },
  {
    title: 'Odontopediatria',
    content:
      'A odontopediatria é crucial para identificar e tratar problemas dentários em estágios iniciais, evitando complicações futuras e garantindo um sorriso bonito e funcional.',
    link: '',
    icon: Odontopediatria,
  },
  {
    title: 'Facetas',
    content:
      'Desperte a confiança em seu sorriso com facetas dentárias, a escolha preferida de quem busca uma transformação estética rápida e duradoura.',
    link: '',
    icon: Facetas,
  },
];

export interface Procedure {
  title: string;
  content: string;
  image: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface SpecialtySection {
  title: string;
  text: string;
  image?: string;
  imageCards?: string[];
}

export interface Specialty {
  slug: string;
  name: string;
  heroTitle: string;
  heroEyebrow: string;
  heroTagline: string;
  heroImage: string;
  proceduresTitle?: string;
  procedures: Procedure[];
  sections?: SpecialtySection[];
  faq: Faq[];
}

export const specialties: Specialty[] = [
  {
    slug: 'ortodontia',
    name: 'Ortodontia',
    heroTitle: 'Ortodontia',
    heroEyebrow: 'Saiba tudo sobre aparelhos',
    heroTagline: 'Um sorriso saudável é um sorriso mais feliz!',
    heroImage: PriOrtodontia,
    proceduresTitle: 'Conheça os modelos mais utilizados no tratamento ortodôntico',
    procedures: [
      {
        title: 'Aparelho Fixo Convencional',
        content:
          'Esse é o tipo mais comum entre os aparelhos ortodônticos. Recomendado para fins estéticos e funcionais para quem busca ter os dentes alinhados e em harmonia. É um dispositivo ortodôntico composto por bandas, fios, bráquetes e borrachinhas de diversas cores que garantem a movimentação dos dentes para a posição correta.',
        image: OrtoBanner1,
      },
      {
        title: 'Aparelho Fixo Estético',
        content:
          'Se você está buscando por um tratamento discreto, os aparelhos ortodônticos transparentes são os ideais. Eles funcionam como os aparelhos fixos convencionais, mas não têm a aparência metálica. Os bráquetes são feitos de materiais transparentes como policarbonato, porcelana ou safira e com cores próximas às dos dentes, tornando-os menos perceptíveis e mais esteticamente agradáveis.',
        image: OrtoBanner2,
      },
      {
        title: 'Aparelho Fixo Autoligado',
        content:
          'O aparelho autoligado é uma opção moderna de tratamento odontológico que difere do convencional ao não utilizar as borrachinhas coloridas. Em vez disso, o fio é diretamente fixado aos bráquetes, que possuem um mecanismo de fechamento para facilitar o encaixe. Isso torna a higiene bucal mais simples e reduz os riscos de cáries, gengivite e mau hálito.',
        image: OrtoBanner3,
      },
      {
        title: 'Fixo Autoligado Transparente',
        content:
          'Este é uma variação do aparelho autoligado que se destaca por não necessitar das borrachinhas coloridas. É especialmente recomendado para quem deseja combinar os benefícios desse tipo de aparelho com uma aparência menos evidente e esteticamente mais atraente.',
        image: OrtoBanner4,
      },
      {
        title: 'Aparelho Lingual',
        content:
          'O aparelho lingual, similar ao modelo convencional, é uma alternativa discreta. Colocado na parte de trás dos dentes, requer cuidado extra com a higiene para prevenir cáries e doenças gengivais. Geralmente recomendado para tratamentos breves.',
        image: OrtoBanner5,
      },
      {
        title: 'Contenções Fixas e Móveis',
        content:
          'A contenção dentária ou contenção ortodôntica pode ser um dispositivo fixo ou removível, de diferentes modelos, conformações e materiais. Sua utilização tem sempre o mesmo objetivo: manter os resultados após o final do tratamento por meio da estabilização dentária.',
        image: OrtoBanner6,
      },
      {
        title: 'Aparelhos Móveis Funcionais',
        content:
          'Os aparelhos móveis, frequentemente recomendados para crianças e adolescentes em crescimento, possuem a finalidade de influenciar o posicionamento e o desenvolvimento da mandíbula e maxila.',
        image: OrtoBanner7,
      },
      {
        title: 'Alinhadores Invisíveis',
        content:
          'Os alinhadores invisíveis revolucionaram o campo da ortodontia oferecendo uma alternativa discreta e eficaz aos aparelhos tradicionais. Feitos de material transparente e removíveis, esses dispositivos personalizados são projetados para alinhar os dentes gradualmente, proporcionando um sorriso harmonioso.',
        image: OrtoBanner9,
      },
      {
        title: 'Documentação Ortodôntica',
        content:
          'A Documentação Ortodôntica incorpora diversos exames, como radiografias, fotografias intra e extra-orais, moldes e análises computadorizadas. Esses exames fornecem uma visão detalhada do paciente, possibilitando ao dentista compreender minuciosamente o caso. São fundamentais para um tratamento ortodôntico preciso e eficaz.',
        image: OrtoBanner8,
      },
    ],
    faq: [
      {
        question: 'Será que eu preciso usar aparelho ortodôntico?',
        answer: `Existem diversos sinais que indicam que é preciso usar aparelho ortodôntico. No entanto, nem sempre eles são de fácil percepção. Por isso, o ideal é sempre buscar um ortodontista, caso você desconfie que há algo errado com a mordida ou o posicionamento dos seus dentes.

Alguns dos sinais para que você procure um ortodontista:
- Dentes muito tortos (encavalados);
- Dificuldade para fechar a boca;
- Dificuldade na mordida;
- Dores no maxilar;
- Espaço entre os dentes.`,
      },
      {
        question: 'Qual é a importância da avaliação inicial?',
        answer: `O sucesso de um tratamento ortodôntico começa com um planejamento cuidadoso, que envolve uma avaliação inicial minuciosa. Nessa etapa, são definidas todas as estratégias necessárias para alcançar os objetivos estéticos e funcionais do paciente.

Sem um planejamento adequado, é como embarcar em uma jornada sem um mapa: torna-se desafiador saber a direção certa. Isso pode resultar em complicações futuras, muitas vezes difíceis de resolver.

Portanto, é aconselhável pesquisar sobre o profissional escolhido e suas credenciais, uma vez que os profissionais atenciosos e detalhistas costumam estar comprometidos com o alcance de excelentes resultados no tratamento.`,
      },
      {
        question: 'Quais são as etapas do tratamento ortodôntico?',
        answer: `O tratamento ortodôntico compreende seis etapas essenciais para alcançar um alinhamento dentário satisfatório:

1 - Diagnóstico: o tratamento começa com uma consulta para avaliar a necessidade do aparelho e seu tipo, às vezes requerendo extração de dentes.

2 - Instalação do aparelho: após a decisão, o aparelho é colocado, iniciando o movimento dos dentes.

3 - Alinhamento: a fase de ajuste e alinhamento começa, frequentemente com fios leves.

4 - Correção: dentes são corrigidos com fios mais grossos e elásticos para fechar espaços e ajustar a mordida.

5 - Finalização: neste ponto, os dentes estão próximos da posição correta, muitas vezes exigindo recursos adicionais.

6 - Contenção: após a remoção do aparelho, o paciente continua com acompanhamento para garantir que os dentes permaneçam alinhados.

O tempo de cada fase varia de acordo com o caso, sendo essencial a colaboração do paciente e a adesão às orientações de cuidados e higiene. As consultas periódicas são cruciais para verificar o progresso do alinhamento dentário.`,
      },
      {
        question: 'Por quanto tempo preciso usar o aparelho?',
        answer: `Para determinar o tempo indicado de tratamento, é necessário fazer uma avaliação com o seu dentista.

Os tratamentos em adultos variam em média de 18 a 36 meses. Já nos adolescentes, o tratamento costuma durar cerca de 24 meses.

Lembrando que depende muito da severidade do problema, do metabolismo da pessoa e se o paciente está seguindo as orientações do dentista.`,
      },
      {
        question: 'Precisarei extrair dentes para fazer um tratamento ortodôntico?',
        answer: `Em grande parte dos casos, não são necessárias extrações.

A remoção de dentes é necessária apenas em casos específicos onde a falta de espaço para acomodação dos dentes é severa.

Através do exame clínico é possível determinar se seu caso precisará de extrações ou não.`,
      },
      {
        question: 'É preciso extrair os sisos para realizar um tratamento ortodôntico?',
        answer:
          'Embora em alguns casos a extração seja necessária, isso não é uma regra. Quem vai definir se será preciso retirar os sisos ou não é o dentista, após estudar as radiografias.',
      },
      {
        question: 'Eu vou sentir dor durante o tratamento?',
        answer: `O que é comum é sentir os dentes sensíveis ao toque e à mastigação durante os três dias após o atendimento, ou seja, após a manutenção ortodôntica.

Nesse período, deve-se evitar alimentos duros ou crocantes, gerando menos desconforto na mastigação. Após esses dias, a sensibilidade tende a cessar, voltando à normalidade.`,
      },
      {
        question: 'Por que meus dentes ficaram tortos?',
        answer: `Os dentes tortos podem ter origem genética, ou seja, transmitida dos pais para filhos.

O tamanho dos ossos maxilares e o tamanho dos dentes são influências familiares herdadas, resultando na falta de espaço e, consequentemente, no desalinhamento.

Além disso, pode ser causado devido à presença de hábitos como o uso de chupeta, dedos, mamadeira, problemas respiratórios ou até mesmo por perda de dentes de leite de forma precoce.`,
      },
      {
        question: 'Quais são as vantagens do tratamento?',
        answer: `São inúmeras as vantagens, abrangendo:

Benefícios funcionais: contribuição na correção de problemas respiratórios, estabelecimento de uma mastigação adequada, aprimoramento na articulação da fala e auxílio na resolução de questões relacionadas à ATM (como estalos, dores de cabeça e faciais), além da prevenção da perda dentária.

Vantagens estéticas: elevação da autoestima, alcance de alinhamento dental adequado e harmonia na estética facial, resultando em um sorriso invejável, mais equilibrado e saudável.`,
      },
      {
        question: 'Quando devo levar meu filho ao ortodontista pela primeira vez?',
        answer:
          'A primeira visita deve ser ainda na dentição de leite, pois diversos problemas graves como a "mordida cruzada" são comuns nessa fase e, geralmente, passam despercebidos.',
      },
    ],
  },
  {
    slug: 'endodontia',
    name: 'Endodontia',
    heroTitle: 'Endodontia',
    heroEyebrow: 'Saiba tudo sobre endodontia',
    heroTagline: 'Raízes saudáveis, sorrisos felizes!',
    heroImage: PriEndodontia,
    proceduresTitle: 'Conheça os procedimentos mais utilizados na endodontia',
    procedures: [
      {
        title: 'Tratamento de Canal',
        content:
          'O Tratamento de Canal é uma intervenção odontológica essencial para preservar um dente comprometido pela cárie profunda, lesão ou infecção na polpa dentária. Este procedimento consiste na remoção cuidadosa do tecido danificado, limpeza, desinfecção e selamento do canal, visando salvar o dente e aliviar a dor associada.',
        image: EndoBanner1,
      },
      {
        title: 'Retratamento de Canal',
        content:
          'Esta técnica envolve a remoção cuidadosa do material de obturação anterior, a limpeza minuciosa do canal radicular e a aplicação de novos materiais para selar adequadamente o canal.',
        image: EndoBanner2,
      },
      {
        title: 'Apicectomia',
        content:
          'A apicectomia é um procedimento cirúrgico realizado na endodontia para tratar infecções persistentes na ponta da raiz do dente (ápice). Consiste na remoção da porção da raiz que está infectada, seguida pela limpeza, desinfecção e selamento da área afetada. É indicada quando o tratamento de canal convencional não foi eficaz ou quando há complicações adicionais.',
        image: EndoBanner3,
      },
      {
        title: 'Tratamento de Lesões Periapicais',
        content:
          'O tratamento de lesões periapicais é realizado para tratar inflamações ou infecções ao redor da ponta da raiz do dente (periápice). Essas lesões geralmente se desenvolvem como resultado de infecções bacterianas originadas do interior do dente.',
        image: EndoBanner4,
      },
      {
        title: 'Tratamento de Traumas Dentários',
        content:
          'O tratamento de traumas dentários é destinado a restaurar a saúde e a funcionalidade do dente após lesões físicas, como fraturas, deslocamentos ou impactos nos dentes.',
        image: EndoBanner5,
      },
    ],
    faq: [
      {
        question: 'O que é endodontia?',
        answer:
          'Endodontia é uma especialidade odontológica que trata dos tecidos internos dos dentes, como a polpa dental e os tecidos ao redor das raízes.',
      },
      {
        question: 'Quando é necessário um tratamento de canal?',
        answer:
          'Um tratamento de canal é necessário quando a polpa do dente está infectada ou danificada devido a cárie profunda, trauma ou lesões.',
      },
      {
        question: 'Como saber se preciso de um tratamento de canal?',
        answer:
          'Sintomas como dor intensa ao mastigar, sensibilidade ao calor ou frio extremos, gengivas inchadas ou presença de abscesso podem indicar a necessidade de um tratamento de canal.',
      },
      {
        question: 'O tratamento de canal é doloroso?',
        answer:
          'Com os avanços modernos, o tratamento de canal é realizado sob anestesia local, tornando-o geralmente indolor.',
      },
      {
        question: 'O que acontece durante um tratamento de canal?',
        answer:
          'Durante o tratamento de canal, o dentista remove a polpa infectada, limpa, desinfeta e sela o interior do dente para protegê-lo de futuras infecções.',
      },
      {
        question: 'Quanto tempo dura um tratamento de canal?',
        answer:
          'Em geral, um tratamento de canal pode ser concluído em uma ou duas sessões, dependendo da complexidade do caso.',
      },
      {
        question: 'O que acontece após um tratamento de canal?',
        answer:
          'Após o tratamento de canal, pode ser necessária a restauração do dente com uma coroa ou obturação para fortalecê-lo e protegê-lo de danos futuros.',
      },
      {
        question: 'Quais são os benefícios do tratamento de canal?',
        answer:
          'O tratamento de canal preserva o dente natural, alivia a dor associada à infecção e restaura a função mastigatória normal.',
      },
      {
        question: 'Quais são as alternativas ao tratamento de canal?',
        answer:
          'A alternativa ao tratamento de canal é a extração do dente. Porém, preservar o dente natural é sempre preferível sempre que possível.',
      },
      {
        question: 'O que é um retratamento de canal?',
        answer:
          'O retratamento de canal é realizado quando um dente tratado anteriormente apresenta sintomas persistentes de infecção ou problemas. É uma tentativa de corrigir problemas após um tratamento de canal inicial.',
      },
    ],
  },
  {
    slug: 'cirurgia',
    name: 'Cirurgia',
    heroTitle: 'Cirurgia',
    heroEyebrow: 'Saiba tudo sobre cirurgia',
    heroTagline: 'Transformando sorrisos, com expertise cirúrgica!',
    heroImage: PriCirurgia,
    proceduresTitle: 'Conheça os procedimentos mais utilizados na cirurgia',
    procedures: [
      {
        title: 'Extração de Dentes Permanentes',
        content:
          'A Extração de Dentes Permanentes é um procedimento cirúrgico para remover dentes irreparáveis ou com problemas graves, como cáries profundas ou danos. Feita com anestesia local, a extração visa prevenir complicações futuras e promover a saúde bucal, seguida por orientações pós-operatórias para uma recuperação adequada.',
        image: CirBanner1,
      },
      {
        title: 'Extração de Sisos',
        content:
          'Os dentes do siso são uma parte natural do nosso desenvolvimento dentário, e sua extração é recomendada quando apresentam problemas de espaço ou impactação. Feita com anestesia local, a extração visa prevenir complicações futuras e promover a saúde bucal, seguida por orientações pós-operatórias para uma recuperação adequada.',
        image: CirBanner2,
      },
      {
        title: 'Exodontia',
        content:
          'A Exodontia trata da remoção de dentes, incluindo procedimentos como a extração de dentes supranumerários (extras) e a remoção de raízes residuais. Essas intervenções visam resolver problemas de espaço e prevenir complicações, mantendo a saúde e funcionalidade bucal do paciente.',
        image: CirBanner3,
      },
      {
        title: 'Ulectomia',
        content:
          'A Ulectomia é uma cirurgia oral para remover pequenas lesões ou mucoceles na boca, aliviando desconfortos e promovendo a saúde bucal do paciente.',
        image: CirBanner4,
      },
      {
        title: 'Ulotomia',
        content:
          'A ulotomia é uma cirurgia periodontal que envolve a remoção de tecido gengival excessivo para tratar bolsas periodontais profundas e melhorar a saúde das gengivas ao redor dos dentes.',
        image: CirBanner5,
      },
      {
        title: 'Biópsia',
        content:
          'A biópsia odontológica é um procedimento que envolve a remoção de uma pequena amostra de tecido oral para análise laboratorial, visando diagnosticar e determinar a natureza de lesões ou condições anormais na boca.',
        image: CirBanner6,
      },
    ],
    faq: [
      {
        question: 'O que é uma extração de dentes permanentes?',
        answer:
          'A extração de dentes permanentes é a remoção de um dente danificado, quebrado, infectado ou irreparável.',
      },
      {
        question: 'Qual a finalidade da extração de sisos?',
        answer:
          'A extração de sisos é realizada para remover os terceiros molares, frequentemente devido a problemas de impactação, falta de espaço ou risco de infecção.',
      },
      {
        question: 'O que envolve o procedimento de exodontia?',
        answer:
          'A exodontia é o termo geral para a remoção de dentes, abrangendo procedimentos como extração de sisos, dentes supranumerários ou dentes afetados por cáries avançadas.',
      },
      {
        question: 'O que é uma ulectomia na odontologia?',
        answer:
          'A ulectomia é a remoção cirúrgica de pequenas lesões ou mucoceles presentes na mucosa oral.',
      },
      {
        question: 'Qual é o objetivo da ulotomia?',
        answer:
          'A ulotomia é a cirurgia que remove excessos de tecido gengival para tratar bolsas periodontais profundas.',
      },
      {
        question: 'O que é uma biópsia na odontologia?',
        answer:
          'Uma biópsia odontológica é a remoção e análise de uma pequena amostra de tecido bucal anormal para diagnóstico de lesões ou condições.',
      },
      {
        question: 'A extração de dentes permanentes é dolorosa?',
        answer:
          'Normalmente, o procedimento é realizado com anestesia local, minimizando o desconforto durante a extração.',
      },
      {
        question: 'É comum sentir dor após a extração de sisos?',
        answer:
          'Algum desconforto é normal após a extração de sisos, mas pode ser controlado com analgésicos e seguindo as orientações do dentista.',
      },
      {
        question: 'Qual é o tempo de recuperação após a exodontia?',
        answer:
          'A recuperação varia, mas geralmente leva alguns dias a uma semana para a cicatrização completa.',
      },
      {
        question: 'A biópsia odontológica é um procedimento invasivo?',
        answer:
          'Sim, a biópsia envolve a remoção de uma pequena parte de tecido oral, mas é um procedimento geralmente bem tolerado e com recuperação rápida.',
      },
    ],
  },
  {
    slug: 'implantodontia',
    name: 'Implantodontia',
    heroTitle: 'Implantodontia',
    heroEyebrow: 'Saiba tudo sobre implantodontia',
    heroTagline: 'Reconstruindo sorrisos, renovando confiança!',
    heroImage: PriImplantodontia,
    procedures: [],
    sections: [
      {
        title: 'O que é a Implantodontia?',
        text: 'Implantodontia é uma especialidade da odontologia que se concentra na substituição de dentes ausentes ou perdidos.\n\nOs implantes dentários são estruturas de titânio, biocompatíveis com o osso humano, inseridos cirurgicamente no maxilar ou mandíbula, funcionando como raízes artificiais. Uma vez integrados ao osso, servem de suporte para próteses dentárias, restaurando a função mastigatória, a estética e prevenindo a reabsorção óssea.',
        image: BannerImplanto,
      },
      {
        title: 'Procedimentos',
        text: 'Os procedimentos para realizar um implante dentário começam com uma avaliação da saúde bucal, seguida pela cirurgia de colocação do implante no osso da mandíbula ou maxilar. Após a cicatrização, é feita uma segunda cirurgia para conectar o pilar protético.\n\nPor fim, a prótese dentária é fixada sobre o implante, restaurando a estética e função mastigatória. O acompanhamento regular é importante para garantir o sucesso do implante a longo prazo.',
        imageCards: [ImplantoCard1, ImplantoCard2, ImplantoCard3, ImplantoCard4],
      },
      {
        title: 'Cuidados com o implante',
        text: 'É essencial que os pacientes mantenham a mesma dedicação à higiene bucal ao utilizar próteses dentárias, incluindo a limpeza regular, o uso de fio dental e visitas periódicas ao dentista para avaliações e ajustes necessários. Além disso, é recomendado evitar alimentos duros que possam danificar a prótese, mesmo que seja feita de material resistente.\n\nO tabagismo é prejudicial à saúde bucal de várias maneiras e pode afetar negativamente o processo de osseointegração, aumentando o risco de falha do implante. Portanto, é importante evitar o tabaco durante todo o processo de implante para garantir o sucesso e a durabilidade do tratamento.',
      },
      {
        title: 'Contraindicações',
        text: 'Existem algumas contraindicações para a realização de implantes dentários. Isso inclui pacientes com condições médicas não controladas, como diabetes descompensada, problemas cardíacos graves ou imunidade comprometida. Além disso, a falta de osso na área do implante, o tabagismo crônico e a gravidez, especialmente no primeiro trimestre, também podem ser contraindicações. Entre em contato conosco e saiba mais!',
      },
    ],
    faq: [],
  },
  {
    slug: 'hof',
    name: 'HOF',
    heroTitle: 'Harmonização Orofacial',
    heroEyebrow: 'Saiba tudo sobre HOF',
    heroTagline: 'Equilibrando sua expressão!',
    heroImage: PriHOF,
    proceduresTitle: 'Conheça os procedimentos mais utilizados na Harmonização Orofacial',
    procedures: [
      {
        title: 'Toxina Botulínica',
        content:
          'A toxina botulínica, popularmente conhecida como botox, é uma substância utilizada na odontologia para tratar diversos problemas estéticos e funcionais. Ela atua relaxando os músculos faciais, reduzindo rugas, linhas de expressão e até mesmo ajudando no tratamento de disfunções da articulação temporomandibular (ATM).',
        image: HOFBanner1,
      },
      {
        title: 'Preenchimento Facial',
        content:
          'O preenchimento facial é um procedimento odontológico estético que visa restaurar o volume e a firmeza da pele do rosto, reduzindo rugas, sulcos e linhas de expressão. Utilizando materiais como ácido hialurônico, o preenchimento facial proporciona resultados naturais e duradouros.',
        image: HOFBanner2,
      },
      {
        title: 'Preenchimento Labial',
        content:
          'O preenchimento labial é uma técnica que visa aumentar o volume dos lábios, proporcionando uma aparência mais harmoniosa e volumosa. Realizado com ácido hialurônico, o procedimento é seguro e oferece resultados imediatos, realçando a beleza do sorriso.',
        image: HOFBanner3,
      },
      {
        title: 'Bioestimulador de Colágeno',
        content:
          'O bioestimulador de colágeno é uma opção inovadora para promover a produção natural de colágeno na pele, melhorando sua firmeza e elasticidade. Utilizando substâncias como a hidroxiapatita de cálcio, o procedimento estimula a renovação celular e rejuvenesce a aparência facial.',
        image: HOFBanner4,
      },
      {
        title: 'Fios de Colágeno (PDO)',
        content:
          'Os fios de colágeno, também conhecidos como fios PDO, são uma técnica minimamente invasiva para promover o rejuvenescimento facial. Esses fios são inseridos na pele, estimulando a produção de colágeno e promovendo um lifting natural, com resultados visíveis e duradouros.',
        image: HOFBanner5,
      },
    ],
    faq: [
      {
        question: 'O que é Harmonização Orofacial?',
        answer:
          'A Harmonização Orofacial é uma área da odontologia que visa promover a estética e a funcionalidade da face, por meio de procedimentos como toxina botulínica, preenchimento facial e outros.',
      },
      {
        question: 'Quais são os principais procedimentos realizados na Harmonização Orofacial?',
        answer:
          'Alguns dos principais procedimentos incluem aplicação de toxina botulínica, preenchimento facial, preenchimento labial, bioestimulador de colágeno e fios de colágeno.',
      },
      {
        question: 'Quais são os benefícios da Harmonização Orofacial?',
        answer:
          'Os benefícios incluem melhoria da estética facial, redução de rugas e linhas de expressão, correção de assimetrias, aumento do volume labial, rejuvenescimento facial e até mesmo tratamento de disfunções da articulação temporomandibular (ATM).',
      },
      {
        question: 'Quem pode se submeter à Harmonização Orofacial?',
        answer:
          'A Harmonização Orofacial é indicada para pessoas que desejam melhorar sua aparência facial e funcionalidade. No entanto, é essencial passar por uma avaliação com um profissional qualificado para determinar a adequação dos procedimentos para cada caso.',
      },
      {
        question: 'Qual é a duração dos resultados dos procedimentos de Harmonização Orofacial?',
        answer:
          'A duração dos resultados varia de acordo com o procedimento realizado. Por exemplo, a toxina botulínica geralmente dura de 3 a 6 meses, enquanto o preenchimento facial pode durar de 6 meses a 2 anos, dependendo do material utilizado.',
      },
      {
        question: 'Os procedimentos de Harmonização Orofacial são seguros?',
        answer:
          'Sim, quando realizados por profissionais qualificados e em ambiente adequado, os procedimentos de Harmonização Orofacial são seguros e têm baixos riscos de complicações.',
      },
      {
        question: 'Os procedimentos de Harmonização Orofacial causam dor?',
        answer:
          'Os procedimentos podem causar algum desconforto, mas geralmente são bem tolerados pelos pacientes. O uso de anestesia local ou tópica pode ser aplicado para minimizar qualquer desconforto durante o procedimento.',
      },
      {
        question: 'Quais são os cuidados necessários após os procedimentos de Harmonização Orofacial?',
        answer:
          'Os cuidados pós-procedimento podem variar dependendo do tipo de intervenção realizada, mas geralmente incluem evitar exposição solar direta, evitar manipulação da área tratada e seguir as instruções do profissional quanto a cuidados específicos.',
      },
      {
        question: 'Quais são as contraindicações para os procedimentos de Harmonização Orofacial?',
        answer:
          'As contraindicações podem variar de acordo com o procedimento e a condição de saúde do paciente. Por exemplo, gestantes, lactantes, pessoas com infecções ativas na área a ser tratada e pacientes com certas condições médicas podem não ser elegíveis para certos procedimentos.',
      },
      {
        question: 'Qual é o tempo de recuperação após os procedimentos de Harmonização Orofacial?',
        answer:
          'O tempo de recuperação pode variar de acordo com o procedimento realizado. Em geral, os pacientes podem retornar às atividades normais imediatamente após a maioria dos procedimentos, embora possam ocorrer inchaço, vermelhidão ou pequenos hematomas temporários, que geralmente desaparecem em poucos dias.',
      },
    ],
  },
];

export const doctor = {
  name: 'Dra. Priscila Ferraz Fuzimoto',
  role: 'Especialista em Ortodontia e Implantodontia',
  subtitle: 'Proprietária da Orthopress Odontologia · Cirurgiã Dentista – CRO 23.612-PR',
  photo: PriSobre,
  credentials: [
    { title: 'Graduação em Odontologia', place: 'Universidade Federal do Paraná (2008–2012)' },
    { title: 'Especialização em Ortodontia', place: 'Universidade Estadual de Maringá (2013–2016)' },
    { title: 'Aperfeiçoamento em Cirurgia de Dentes Retidos', place: 'Dental Press International (2017)' },
    { title: 'Curso de Imersão em Toxina Botulínica e Preenchedores', place: 'Odonto Partners (2019)' },
    { title: 'Curso VIP de Endodontia Mecanizada', place: 'Universidade Paranaense (2020)' },
    { title: 'Curso Full Face 4D – Fios de Sustentação + Preenchedores', place: 'NULAB Curitiba (2021)' },
    { title: 'Curso de Imersão em Bioestimuladores e Fios Faciais', place: 'Maringá (2021)' },
    { title: 'Especialização em Implantodontia', place: 'Instituto Primer (2021–2023)' },
  ],
  story: [
    'Na odontologia, mais do que o dom, é fundamental ter paixão.',
    'Nossa história de amor por essa profissão começou cedo, desde a infância, e cresceu ao longo da graduação.',
    'A cada curso que realizamos, buscamos incessantemente o conhecimento necessário para impactar positivamente a vida das pessoas.',
    'Hoje, o sentimento é indescritível, pois não existem palavras capazes de expressar a satisfação de promover a saúde e elevar a autoestima de nossos pacientes.',
    'Temos verdadeira paixão por resolver cada caso.',
    'Convidamos você a conhecer nosso trabalho!',
  ],
};

export const missionCards = [
  {
    title: 'Missão',
    content:
      'Nosso principal objetivo é a satisfação do paciente. Para isto, estamos sempre em busca de atualizações profissionais, materiais de qualidade e métodos inovadores.',
    icon: MissaoIcon,
  },
  {
    title: 'Visão',
    content:
      'Pretendemos mostrar com empatia e com um tratamento humanizado que a saúde bucal é importante e necessária para uma vida saudável.',
    icon: VisaoIcon,
  },
  {
    title: 'Valores',
    content:
      'Profissionalismo · Compromisso · Dedicação · Igualdade · Respeito · Empatia',
    icon: ValoresIcon,
  },
];

export const galleryImages = [
  GalleryA,
  GalleryB,
  GalleryC,
  GalleryD,
  GalleryE,
  GalleryF,
  GalleryG,
  GalleryH,
  GalleryI,
  GalleryJ,
  GalleryK,
  GalleryL,
  GalleryM,
  GalleryN,
];
