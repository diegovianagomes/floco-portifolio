import Image from "next/image"
import { notFound } from "next/navigation"
import PageLayout from "@/components/page-layout"

// Definindo tipos para os dados do projeto
interface ProjectItem {
  equipe: string
  title: string
  localizacao: string
  area: string
  status: string
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
      title: "Guyana Lodges",
      description: "",
      localizacao: "Georgetown (Guiana)",
      area: "90m²",
      status: "Em Desenvolvimento",
      fotografia: "",
      ano: "2023",
      images: ["/guyana/431996187195903.65ce01a18f300.jpg", "/guyana/6ba64f187195903.65ce01a1901fa.jpg", "/guyana/839f6b187195903.65ce01a19119b.jpg" ],
    },
    "casa-alem-mar": {
      equipe: "Paula Louzada, Diego Viana",
      title: "Casa Alem Mar",
      description: "",
      localizacao: "Louzada (Portugal)",
      area: "90m²",
      status: "Em Desenvolvimento",
      fotografia: "",
      ano: "2023",
      images: ["/alem-mar/placeholder.svg", "/guyana/placeholder.svg", "/placeholder.svg"],
    },
  },
  institucional: {
    "colabore": {

      equipe: "Diego Viana, Saul Kaminsky, Gabriela Ferreira, Lucas Garboggini, Lucca Beltrão, Maisa Cordeiro, Tarcísio Pureza, Vaguiner Patricio, (Projeto desenvolvido na Urban Recycle Arch. Studio)",
      title: "Centro de Inovação Municipal COLABORE",
      description: "Fomos contactos para projetar um equipamento capaz de ﻿fomentar a colaboração interdisciplinar e abrigar centro de inovação integrado ao Parque da Cidade , na cidade do Salvador, Bahia. O projeto surge da ressignificação de 16 contêineres de 40 pés High Cqube usados para formar a peça nova unica e vibrante para a comunidade de empreendedora da cidade de Salvador, bem como ser um polo gerador para novos empreendores.",
      localizacao: "Salvador-BA (Brasil)",
      area: "700m²",
      status: "Construido",
      fotografia: "Diego Viana",
      ano: "2017-2019",
      images: ["/colabore/a3ad2792901061.5e570c745ea26.jpg", "/colabore/07b4d092901061.5e570c745f3bc.jpg", "/placeholder.svg"],
    },
    "jardim-botanico-salvador": {
      equipe: "Diego Viana Gomes, Saul Kaminsky,  Adalberto Vilela, Andrea Sedona, Federica Monti,  Orlando Barros, Stefano Pisanu, Michael Thoroe, Charles Villemont, Maria Angélica, Laura Kiss, Isaac Humaitá, Patrick Nunes, (Projeto desenvolvido na Urban Recycle Arch. Studio)",
      title: "Jardim Botânico de Salvador",
      description: "",
      localizacao: "Salvador-BA (Brasil)",
      area: "160.000m²",
      status: "Construido",
      fotografia: "Diego Viana",
      ano: "2014",
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
  },

}

interface PageProps {
  params: {
    category: string
    slug: string
  }
}

export default function ProjectPage({ params }: PageProps) {
  const { category, slug } = params

  // Check if the category and slug exist in our data
  if (!projectData[category] || !projectData[category][slug]) {
    notFound()
  }

  const project = projectData[category][slug]

  return (
    <PageLayout>
      <div className="grid grid-cols-3 gap-8 w-full mb-8">
        <div className="w-full">
          <p className="font-normal text-sm font-sans antialiased">Equipe: </p>
          <div className="font-light text-sm font-sans antialiased pb-2">
            {project.equipe}
          </div>
          {project.fotografia && (
            <>
              <p className="font-normal text-sm font-sans antialiased">Fotografia: </p>
              <p className="font-light text-sm font-sans antialiased">{project.fotografia}</p>
            </>
          )}
        </div>

        <div className="w-full">
          <p className="font-normal text-sm font-sans antialiased">Localização: </p>
          <p className="font-light text-sm font-sans antialiased pb-2">{project.localizacao}</p>
          <p className="font-normal text-sm font-sans antialiased">Área: </p>
          <p className="font-light text-sm font-sans antialiased">{project.area}</p>
        </div>

        <div className="w-full">
          <p className="font-normals text-sm font-sans antialiased">Status: </p>
          <p className="font-light text-sm font-sans antialiased">{project.status}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
          {project.images.map((image: string, index: number) => (
            <div key={index} className="w-full bg-white">
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

