// data/projectData.ts

export interface ProjectItem {
  equipe: string
  isUrban: string
  premio: string
  title: string
  localizacao: string
  area: string
  status: string
  video: string
  ano: string
  description: string
  fotografia: string
  images: string[]
  floorPlans?: string[]
}

export interface ProjectCategory {
  [slug: string]: ProjectItem
}

export interface ProjectData {
  [category: string]: ProjectCategory
}


const projectData: ProjectData = {
  residencial: {
    "guyana-lodges-01": {
      equipe: "Paula Louzada, Diego Viana",
      premio: "",
      isUrban: "",
      title: "Guyana Lodges 01",
      description: "A visão arquitetônica deste projeto é a de um refúgio, um santuário para aqueles que buscam pausa e contemplação em meio ao ritmo acelerado da vida contemporânea. Mais do que um espaço construído, trata-se de uma experiência onde luxo e serenidade se entrelaçam, dissolvendo as fronteiras entre o abrigo e a paisagem. Situado no coração da vibrante floresta tropical da Guiana, o projeto adota uma estrutura modular e ortogonal, evocando a simplicidade geométrica como estratégia de ordenação do espaço. Cada módulo opera como um microcosmo de bem-estar, um oásis que, além de promover o descanso e a imersão na natureza, acomoda as demandas pragmáticas da vida moderna, um espaço onde o envio de um e-mail ou uma breve chamada telefônica coexistem com o som das folhas. O terreno escolhido se insere na densidade exuberante de uma floresta tropical, onde a paisagem se manifesta não como um fundo passivo, mas como um ator fundamental da composição arquitetônica. Longe de uma imposição sobre o solo, a edificação emerge do contexto, buscando uma relação de coexistência e respeito. A implantação será definida por uma leitura atenta da topografia, garantindo tanto a privacidade quanto a maximização das vistas e da iluminação natural. O uso de materiais locais e estratégias construtivas sustentáveis não apenas minimizam o impacto ambiental, mas também ressignificam a noção de habitar em um ambiente onde a presença humana deve ser percebida como efêmera, integrada e, sobretudo, consciente.",
      localizacao: "Georgetown (Guiana)",
      area: "90m²",
      status: "Em Desenvolvimento",
      video: "Pixl Media",
      fotografia: "Pixl Media",
      ano: "2024",
      images: ["/guyana/guyana001.JPEG", "/guyana/guyana002.JPG", "/guyana/guyana003.JPEG", "/guyana/guyana004.JPG", "/guyana/guyana005.JPG"],
      floorPlans: [""]
    },

    "casa-alem-mar": {
      equipe: "Paula Louzada, Diego Viana",
      premio: "",
      isUrban: "",
      title: "Casa Alem Mar",
      description: "Uma casa portuguesa que se desdobra em uma multiplicidade de significados que transcende a mera soma de seus espaços, oito quartos, sendo dois no porão, salas de estar e jantar, cozinha, lavanderia, despensa, um banheiro compartilhado, garagem para dois carros e uma piscina futura, que se articulam num jogo de presença e ausência. O terreno, já constituído por um muro de pedra que não apenas delimita, mas também evoca uma divisão dialética, revela duas áreas: uma a oeste, com elevações mais planas e uma plantação de vinhedos que inscreve a estabilidade, e outra a leste, onde o declive, cada vez mais íngreme em direção à via pública, interroga a própria noção de limite. A proximidade, três metros do muro, não é apenas medida, mas um ponto de interseção entre o pré-existente e o projetado, onde a entrada central articula, de forma desconstruída, as áreas de estar, dormitórios e serviços, garantindo autonomia e inter-relação. O concreto aparente, escolhido por sua ressonância com a materialidade da terra, revela simultaneamente o robusto e o efêmero, num contínuo de presença e resignificação dos espaços.",
      localizacao: "Louzada (Portugal)",
      area: "1050m²",
      status: "Em Desenvolvimento",
      video: "Pixl Media",
      fotografia: "Pixl Media",
      ano: "2023",
      images: ["/alem-mar/alemmar001.jpg", "/alem-mar/alemmar002.jpg", "/alem-mar/alemmar003.jpg", "/alem-mar/alemmar004.jpg", "/alem-mar/alemmar005.jpg", "/alem-mar/alemmar006.jpg", "/alem-mar/alemmar007.jpg", "/alem-mar/alemmar008.jpg", "/alem-mar/alemmar009.jpg", "/alem-mar/alemmar010.jpg", "/alem-mar/alemmar011.jpg", "/alem-mar/alemmar012.jpg"],
      floorPlans: [""]
    },

    "modhaus": {
      equipe: "Paula Louzada, Diego Viana",
      premio: "Selecionado para o 1º Guia IAB Agenda 2030",
      isUrban: "",
      title: "Modhaus",
      description: "Uma casa portuguesa que se desdobra em uma multiplicidade de significados que transcende a mera soma de seus espaços, oito quartos, sendo dois no porão, salas de estar e jantar, cozinha, lavanderia, despensa, um banheiro compartilhado, garagem para dois carros e uma piscina futura, que se articulam num jogo de presença e ausência. O terreno, já constituído por um muro de pedra que não apenas delimita, mas também evoca uma divisão dialética, revela duas áreas: uma a oeste, com elevações mais planas e uma plantação de vinhedos que inscreve a estabilidade, e outra a leste, onde o declive, cada vez mais íngreme em direção à via pública, interroga a própria noção de limite. A proximidade, três metros do muro, não é apenas medida, mas um ponto de interseção entre o pré-existente e o projetado, onde a entrada central articula, de forma desconstruída, as áreas de estar, dormitórios e serviços, garantindo autonomia e inter-relação. O concreto aparente, escolhido por sua ressonância com a materialidade da terra, revela simultaneamente o robusto e o efêmero, num contínuo de presença e resignificação dos espaços.",
      localizacao: "Ijaci-MG (Brasil)",
      area: "120m²",
      status: "Em Desenvolvimento",
      video: "",
      fotografia: "Pixl Media",
      ano: "2020",
      images: ["/modhaus/modhaus001.jpg", "/modhaus/modhaus002.jpg", "/modhaus/modhaus003.jpg", "/modhaus/modhaus004.jpg", "/modhaus/modhaus006.jpg", "/modhaus/modhaus007.jpg", "/modhaus/modhaus008.jpg"],
      floorPlans: [""]
    },

    "mimo": {
      equipe: "Paula Louzada, Diego Viana, Fran Selvatti",
      premio: "",
      isUrban: "",
      title: "Mimo",
      description: "",
      localizacao: "Jundiaí-SP (Brasil)",
      area: "35m²",
      status: "Projeto",
      video: "",
      fotografia: "Pixl Media",
      ano: "2021",
      images: ["/mimo/mimo001.jpg", "/mimo/mimo002.jpg", "/mimo/mimo003.jpg", "/mimo/mimo004.jpg"],
      floorPlans: [""]
    },

    "ottawa": {
      equipe: "Paula Louzada, Diego Viana, Fran Selvatti",
      premio: "3º Colocado",
      isUrban: "",
      title: "Casa Ottawa",
      description: "",
      localizacao: "Ottawa (Canadá)",
      area: "210m²",
      status: "Concurso Internacional Fechado",
      video: "",
      fotografia: "Pixl Media",
      ano: "2019",
      images: ["/ottawa/ottawa001.PNG", "/ottawa/ottawa002.PNG", "/ottawa/ottawa003.PNG"],
      floorPlans: ["/ottawa/ottawa005.jpg", "/ottawa/ottawa004.jpg", "/ottawa/ottawa006.jpg"],
    },

    "tiny-house": {
      equipe: "Paula Louzada, Diego Viana, Fran Selvatti",
      premio: "",
      isUrban: "",
      title: "Tiny House",
      description: "",
      localizacao: "Campinas-SP (Brasil)",
      area: "21.6m²",
      status: "",
      video: "",
      fotografia: "Pixl Media",
      ano: "2022",
      images: ["/tiny/tiny001.png", "/tiny/tiny002.png"],
      floorPlans: [],
    },
    "ivan-brand": {
      equipe: "Diego Viana Gomes, Saul Kaminsky, Orlando Barros, Tarcisio Pureza, Rebeca Braga",
      premio: "",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio )",
      title: "Casa-Ateliê Ivan Brandão",
      description: " ",
      localizacao: "Salvador-BA (Brasil)",
      area: "200m²",
      status: "Construida",
      video: "",
      fotografia: "Manuel Sá",
      ano: "2018",
      images: ["/ivan/ivan001.jpg", "/ivan/ivan002.jpg", "/ivan/ivan003.jpg", "/ivan/ivan004.jpg"],
      floorPlans: [],
    },

    "lmd": {
      equipe: "Equipe Salvador-BA:\n Diego Viana Gomes, Saul Kaminsky, Orlando Barros,Luciano Goulard, Eric Cabussú, Barbára Becatinni,\n Equipe Dourados-MS:\n Jordano Valota, Maycon Vieira, Tatiane Robrivic,Tatiana Baldasso, Igor Acosta",
      premio: "",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio e Grupo Valota)",
      title: "Casa LMD",
      description: " Situada no coração do Mato Grosso do Sul, em Dourados, é mais do que uma residência: é uma interseção de tempos, geografias e saberes arquitetônicos. Nascida da fusão entre uma família mineira e dois escritórios de arquitetura, um sul-mato-grossense e outro baiano, o projeto se insere na tessitura da miscigenação cultural, onde o diálogo entre referências locais e um design contemporâneo se manifesta em camadas espaciais e materiais.\n Implantada em um lote de 12x25m, com 220m² de construção, a residência articula interior e exterior por meio de generosas aberturas que dissolvem limites entre arquitetura e paisagem. O espaço construído torna-se poroso, permitindo que a luz, o vento e a vegetação permeiem o cotidiano. Mas essa permeabilidade não se dá sem critério: estratégias sustentáveis são incorporadas como dispositivos performativos, desde a empena cega que protege do sol poente, à ventilação cruzada que captura os ventos predominantes, passando pelos bolsões de ar gerados pelo pé-direito duplo e suas aberturas zenitais. A redução formal e técnica busca eficiência máxima com o mínimo de material, evocando uma economia de meios sem perder a expressividade arquitetônica.\n A materialidade da casa se constrói enquanto narrativa metalinguística—um campo de ressignificações onde materiais industrializados não são meros componentes técnicos, mas operadores poéticos. O mobiliário, parte indissociável do projeto, dissolve a fronteira entre construção e objeto, instaurando um espaço habitável que não é apenas cenário, mas sim extensão da identidade dos moradores. O arquiteto, aqui, transcende o papel de curador de artefatos prêt-à-porter para se reafirmar como criador de gramáticas espaciais.\n A estrutura da casa não se fixa em uma completude rígida; ao contrário, sua estética industrial e materialidade neutra sugerem desdobramentos futuros. Como um organismo em permanente metamorfose, os amplos espaços abertos e as vigas metálicas possibilitam expansões, como a ampliação da biblioteca suspensa sobre um piso de chapa perfurada—um espaço vivo, que cresce e se adapta às aquisições intelectuais do morador, traçando um paralelo entre a arquitetura e a construção contínua do conhecimento.",
      localizacao: "Dourados-MS (Brasil)",
      area: "220m²",
      status: "Projeto",
      video: "",
      fotografia: "Maycon Vieira",
      ano: "2015",
      images: ["/lmd/lmd001.jpg", "/lmd/lmd003.jpg", "/lmd/lmd006.jpg", "/lmd/lmd007.jpg", "/lmd/lmd008.jpg", "/lmd/lmd011.jpg", "/lmd/lmd12.jpg"],
      floorPlans: ["/lmd/plantas/lmd002.jpg", "/lmd/plantas/lmd004.png", "/lmd/plantas/lmd005.png", "/lmd/plantas/lmd009.png", "/lmd/plantas/lmd010.png"],
    },
    "bromelia": {
      equipe: "Diego Viana Gomes, Juliana Meira Araujo Aguiar, Saul Kaminsky Bernfeld Oliveira",
      premio: "",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio )",
      title: "Casa Bromélia",
      description: "A Casa Bromélia emerge como um manifesto da Urban Recycle no cenário da arquitetura residencial, uma experiência inaugural que transcende a mera edificação e se inscreve no tempo e no espaço como um organismo em potencial diálogo com seu entorno. Projetada e materializada entre janeiro de 2010 e dezembro de 2011, a residência se estrutura a partir de uma escuta atenta às demandas do habitante e das condições específicas do lugar, buscando uma simbiose entre objeto arquitetônico e ambiente natural.\n O projeto nasce do desafio de implantar uma residência em um espaço ainda não consolidado urbanisticamente, antecipando-se ao crescimento futuro e respondendo às transformações da paisagem construída. A configuração espacial se manifesta em dois pavimentos deslocados, conectados por uma escada em balanço, alojada dentro de um grande enquadramento translúcido de 4x4 metros. Esse elemento opera não apenas como uma transição vertical, mas como um dispositivo de iluminação e conexão entre interior e exterior.\n A programação espacial articula os fluxos cotidianos sem hierarquizar usos de maneira estanque. No primeiro pavimento, a fluidez dos espaços se manifesta em uma sala ampla, uma cozinha americana, uma escada que assume protagonismo estrutural, um lavabo e uma área de serviço. No segundo pavimento, a intimidade se reconfigura em um conjunto que abarca uma suíte com closet integrado, dois quartos, um sanitário social, um hall e uma varanda que dissolve os límites entre abrigo e paisagem.\n O processo construtivo se ancora na eficiência material e na inteligência tectônica. A escolha por materiais leves e industrializados responde à necessidade de rapidez executiva e redução de custos, sem comprometer a expressividade arquitetônica. Vidro, madeira laminada, concreto e pedriscos conformam uma gramática material que dialoga com as condições locais. Estruturalmente, a casa se articula em um sistema misto de concreto e aço, com destaque para a grande viga metálica de 12m x 0,80m, que viabiliza o vão livre sobre os quartos do pavimento superior, conferindo ao projeto uma leveza paradoxal, onde massa e gravidade se tensionam.\n A Casa Bromélia se insere no contexto como um organismo regulador de seu próprio microclima. A orientação da edificação favorece a ventilção sudeste dominante, permitindo um fluxo contínuo de ar entre as aberturas opostas, em especial pela grande baywindow de 4x4m. A fachada poente, sujeita à maior incidência solar, recebe uma estratégia combinada: um revestimento em madeira laminada e um sistema de espaçamento de 20cm em relação à parede de alvenaria, criando um colchão de ar que atua como barreira térmica passiva. Pequenas aberturas e brises complementam esse dispositivo, mitigando a carga térmica sem comprometer a qualidade da luz e do ar internos.\n A escolha dos materiais se orienta por um compromisso com a redução do impacto ambiental. O telhado metálico substitui opções mais poluentes e introduz maior durabilidade ao sistema construtivo. De maneira prospectiva, a infraestrutura elétrica foi planejada para recepcionar tecnologias emergentes: pontos estratégicos foram instalados na garagem para futura adaptação a carregadores de veículos elétricos, reconhecendo a transição energética como um imperativo projetual.\n A Casa Bromélia não se encerra em si mesma, mas se abre para o tempo e para a cidade, antecipando mudanças, adaptando-se ao imprevisto, sustentando a tensão entre permanência e transformação. ",
      localizacao: "Salvador-BA (Brasil)",
      area: "260m²",
      status: "Construida",
      video: "",
      fotografia: "Diego Viana e Marcio Correia Campos",
      ano: "2010",
      images: ["/bro/bro011.jpg", "/bro/bro002.jpg", "/bro/bro003.jpg", "/bro/bro004.jpg", "/bro/bro006.jpg", "/bro/bro007.jpg", "/bro/bro008.jpg", "/bro/bro009.jpg", "/bro/bro010.jpg", "/bro/bro012.jpg"],
      floorPlans: ["/bro/plantas/bro017.gif", "/bro/plantas/bro013.jpg","/bro/plantas/bro015.jpg", "/bro/plantas/bro014.jpg", "/bro/plantas/bro016.jpg", ],
    },
  },

  institucional: {
    "colabore": {
      equipe: "Diego Viana, Saul Kaminsky, Gabriela Ferreira, Lucas Garboggini, Lucca Beltrão, Maisa Cordeiro, Tarcísio Pureza, Vaguiner Patricio",
      premio: "Selecionado para o 1º Guia IAB Agenda 2030",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio)",
      title: "Centro de Inovação Municipal COLABORE",
      description: "Fomos contactados para pensar um equipamento que transcende a simples função de abrigar um centro de inovação, abrindo espaço para a colaboração interdisciplinar dentro do Parque da Cidade, em Salvador, Bahia. Essa proposta, em sua essência, emerge da ressignificação de 16 contêineres de 40 pés High Cube, objetos originalmente confinados a uma função de carga que, agora, se transmutam em signos de um novo diálogo comunitário. A análise do terreno, com sua orientação solar, as rotas de circulação já presentes, a ventilação predominante e o sombreamento das árvores, não só informa a localização dos blocos, mas interroga as relações entre o natural e o construído. Ao dispor os contêineres, não buscamos apenas empilhá-los, mas criar um movimento pantográfico que subverte a tradicional verticalidade: os elementos estruturais tornam-se eixos de rotação, abrindo espaços de balanço e ambiguidade, onde o convite para entrar e utilizar o espaço se torna, por si só, um ato de desconstrução e ressignificação das normas arquitetônicas pré-estabelecidas.",
      localizacao: "Salvador-BA (Brasil)",
      area: "700m²",
      status: "Construido",
      video: "Secretaria Municipal de Sustentabilidade e Resiliência",
      fotografia: "Diego Viana",
      ano: "2017-2019",
      images: ["/colabore/a3ad2792901061.5e570c745ea26.jpg", "/colabore/07b4d092901061.5e570c745f3bc.jpg"],
      floorPlans: [""]
    },

    "jardim-botanico-salvador": {
      equipe: "Diego Viana Gomes, Saul Kaminsky,  Adalberto Vilela, Andrea Sedona, Federica Monti,  Orlando Barros, Stefano Pisanu, Michael Thoroe, Charles Villemont, Maria Angélica, Laura Kiss, Isaac Humaitá, Patrick Nunes",
      premio: "",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio)",
      title: "Jardim Botânico de Salvador",
      description: "Abrangendo 160.000m² de uma Mata Atlântica que se revela como um campo de incertezas e significados, o projeto de requalificação do Jardim Botânico de Salvador se impõe como uma intervenção que desestabiliza a dicotomia entre o humano e o natural. Localizado no cerne geográfico da cidade, o complexo científico – que se destina ao estudo, à manutenção e à conservação deste bioma – não se limita a uma mera função utilitária, mas se converte num palco onde o sentido se desdobra e se reinventa. A trilha elevada de 795m, que serpenteia pela mata, funciona como um percurso de deslocamento e deslocamento de sentidos, permitindo ao usuário experienciar a tensão entre a preservação e o inevitável desmatamento que marca a paisagem urbana. A requalificação e ampliação do herbário, com seus 61.000 espécimes vegetais, não apenas inaugura um centro de referência na pesquisa, mas também convoca a uma leitura crítica dos contrastes entre cidade, mata preservada e o abuso da intervenção humana, onde cada intervenção – do pavilhão de observação ao mirante – convida a uma reflexão desconstrutiva sobre o que significa preservar e reinventar.",
      localizacao: "Salvador-BA (Brasil)",
      area: "160.000m²",
      status: "Construido",
      video: "",
      fotografia: "Diego Viana",
      ano: "2014",
      images: ["/jardim-botanico/06af0e19218987.5ff7248ac3ce5.jpg", "/jardim-botanico/b9ddd019218987.5ff7248ac42a1.jpg"],
      floorPlans: [""]
    },
    "horto": {
      equipe: "",
      premio: "",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio)",
      title: "Centro de Intepretação da Mata Atlantica",
      description: "",
      localizacao: "",
      area: "",
      status: "Construido",
      video: "",
      fotografia: "Diego Viana",
      ano: "2014",
      images: [""],
      floorPlans: [""]
    },
  },
  incorporacao: {
    "predio": {
      equipe: "",
      premio: "",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio)",
      title: "Centro de Intepretação da Mata Atlantica",
      description: "",
      localizacao: "",
      area: "",
      status: "Construido",
      video: "",
      fotografia: "Diego Viana",
      ano: "2014",
      images: [""],
      floorPlans: [""]
    },

    "predio2": {
      equipe: "",
      premio: "",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio)",
      title: "Centro de Intepretação da Mata Atlantica",
      description: "",
      localizacao: "",
      area: "",
      status: "Construido",
      video: "",
      fotografia: "Diego Viana",
      ano: "2014",
      images: [""],
      floorPlans: [""]
    },

    "predio3": {
      equipe: "",
      premio: "",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio)",
      title: "Centro de Intepretação da Mata Atlantica",
      description: "",
      localizacao: "",
      area: "",
      status: "Construido",
      video: "",
      fotografia: "Diego Viana",
      ano: "2014",
      images: [""],
      floorPlans: [""]
    },
  }
}

export default projectData;