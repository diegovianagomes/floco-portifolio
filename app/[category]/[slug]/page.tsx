import Image from "next/image"
import { notFound } from "next/navigation"
import PageLayout from "@/components/page-layout"

// Definindo tipos para os dados do projeto
interface ProjectItem {
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
}

interface ProjectCategory {
  [slug: string]: ProjectItem
}

interface ProjectData {
  [category: string]: ProjectCategory
}

// This would typically come from a CMS or API
const projectData: ProjectData = {
  residencial: {
    "guyana-lodges": {
      equipe: "Paula Louzada, Diego Viana",
      premio: "",
      isUrban: "",
      title: "Guyana Lodges",
      description: "",
      localizacao: "Georgetown (Guiana)",
      area: "90m²",
      status: "Em Desenvolvimento",
      video: "Pixl Media",
      fotografia: "Pixl Media",
      ano: "2023",
      images: ["/guyana/431996187195903.65ce01a18f300.jpg", "/guyana/6ba64f187195903.65ce01a1901fa.jpg", "/guyana/839f6b187195903.65ce01a19119b.jpg" ],
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
      images: ["" ],
    },
  },
  institucional: {
    "colabore": {

      equipe: "Diego Viana, Saul Kaminsky, Gabriela Ferreira, Lucas Garboggini, Lucca Beltrão, Maisa Cordeiro, Tarcísio Pureza, Vaguiner Patricio",
      premio: "Selecionado para o 1º Guia IAB Agenda 2030",
      isUrban: "(Projeto desenvolvido na Urban Recycle Arch. Studio)",
      title: "Centro de Inovação Municipal COLABORE",
      description: "Fomos contactados para pensar um equipamento que transcende a simples função de abrigar um centro de inovação, abrindo espaço para a colaboração interdisciplinar dentro do Parque da Cidade, em Salvador, Bahia. Essa proposta, em sua essência, emerge da ressignificação de 16 contêineres de 40 pés High Cube – objetos originalmente confinados a uma função de carga – que, agora, se transmutam em signos de um novo diálogo comunitário. A análise do terreno, com sua orientação solar, as rotas de circulação já presentes, a ventilação predominante e o sombreamento das árvores, não só informa a localização dos blocos, mas interroga as relações entre o natural e o construído. Ao dispor os contêineres, não buscamos apenas empilhá-los, mas criar um movimento pantográfico que subverte a tradicional verticalidade: os elementos estruturais tornam-se eixos de rotação, abrindo espaços de balanço e ambiguidade, onde o convite para entrar e utilizar o espaço se torna, por si só, um ato de desconstrução e ressignificação das normas arquitetônicas pré-estabelecidas.",
      localizacao: "Salvador-BA (Brasil)",
      area: "700m²",
      status: "Construido",
      video: "Secretaria Municipal de Sustentabilidade e Resiliência",
      fotografia: "Diego Viana",
      ano: "2017-2019",
      images: ["/colabore/a3ad2792901061.5e570c745ea26.jpg", "/colabore/07b4d092901061.5e570c745f3bc.jpg", ],
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
      },
  },

}

interface PageProps {
  params: {
    category: string
    slug: string
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { category, slug } = await Promise.resolve(params)

  // Check if the category and slug exist in our data
  if (!projectData[category] || !projectData[category][slug]) {
    notFound()
  }

  const project = projectData[category][slug]

  return (
    <PageLayout>
      <div className="px-8 mt-8">
        <div className="flex w-full justify-between mt-4 border-b-4 border-[#B7CCE9] ">
          <h1 className="mb-4  font-bold text-xl text-[#B7CCE9] font-sans antialiased">{project.title}</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-8 p-8">
        <div className="w-full hidden md:block ">
        </div>
        <div className="w-full pr-8">
          <p className="text-[#91A8E0]">{project.description}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
          {project.images.map((image: string, index: number) => (
            <div key={index} className="w-full bg-white pl-8 pr-8 pt-4 pb-4">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${project.title} - Imagem ${index + 1}`}
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          ))}
      </div>

      <div className="grid grid-cols-2 gap-8 w-full mb-8 mt-8 pl-8 delay-1000">
        <div className="w-full border-d-2">
          <p className="font-normal text-sm font-sans antialiased">Equipe: </p>
          <div className="font-light text-sm font-sans antialiased">
            {project.equipe}
          </div>
          <div className="font-normal text-xs text-gray-500 font-sans antialiased pb-2">{project.isUrban}</div>
          {project.fotografia && (
            <>
              <p className="font-normal text-sm font-sans antialiased">Fotografia: </p>
              <p className="font-light text-sm font-sans antialiased pb-2">{project.fotografia}</p>
            </>
          )}
          {project.video && (
            <>
              <p className="font-normal text-sm font-sans antialiased">Video: </p>
              <p className="font-light text-sm font-sans antialiased ">{project.video}</p>
            </>
          )}
        </div>

        <div className="w-full">
          <p className="font-normals text-sm font-sans antialiased">Status: </p>
          <p className="font-light text-sm font-sans antialiased pb-2">{project.status}</p>
          <p className="font-normal text-sm font-sans antialiased">Localização: </p>
          <p className="font-light text-sm font-sans antialiased pb-2">{project.localizacao}</p>
          <p className="font-normal text-sm font-sans antialiased">Área: </p>
          <p className="font-light text-sm font-sans antialiased pb-2">{project.area}</p>
          {project.premio && (
            <>
              <p className="font-normal text-sm font-sans antialiased">Premiações: </p>
              <p className="font-light text-sm font-sans antialiased ">{project.premio}</p>
            </>
          )}
        </div>


      </div>
    </PageLayout>
  )
}

// Generate static paths for all projects
export function generateStaticParams() {
  const paths: { category: string; slug: string }[] = []

  Object.entries(projectData).forEach(([category, projects]) => {
    Object.keys(projects).forEach((slug) => {
      paths.push({ category, slug })
    })
  })

  return paths
}

