import Image from "next/image"
import { notFound } from "next/navigation"
import PageLayout from "@/components/page-layout"
import FloorPlansCarousel from "@/components/FloorPlansCarousel"
import projectData, { ProjectItem, ProjectCategory, ProjectData } from "@/data/projectData"

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

  // Check if floor plans exist and are valid
  const hasValidFloorPlans = project.floorPlans &&
                          project.floorPlans.length > 0 &&
                          project.floorPlans[0] !== ""

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
          {project.description.split('\n').map((paragraph, index) => (
            <p key={index} className="text-[#91A8E0] mb-4">
              {paragraph}
            </p>
          ))}
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

      {/* Floor plans carousel component */}
      {hasValidFloorPlans && (
        <FloorPlansCarousel
          floorPlans={project.floorPlans!}
          projectTitle={project.title}
        />
      )}

      <div className="flex w-full justify-between mt-4 border-b-4 border-[#B7CCE9] "></div>

      <div className="grid grid-cols-2 gap-8 w-full mb-8 mt-8 pl-8 delay-1000">
        <div className="w-full border-d-2">
          <p className="font-normal text-sm font-sans antialiased">Equipe: </p>
          <div className="font-light text-sm font-sans antialiased">
            {project.equipe.split('\n').map((member, index) => (
              <div key={index} className="mb-1">{member}</div>
            ))}
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