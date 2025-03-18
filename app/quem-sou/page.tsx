import Image from "next/image"
import SocialLinks from "@/components/social-links"
import PageLayout from "@/components/page-layout"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="max-w-3xl bg-white">
        <h1 className="text-2xl font-bold mb-8">quem sou</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-white">
          <div className="bg-white">
            <Image
              src="/placeholder.svg?height=600&width=450"
              alt="Ceci Reichstul"
              width={450}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-center bg-white">
            <p className="mb-4 text-lg">
              Arquiteta e urbanista formada pela Faculdade de Arquitetura e Urbanismo da Universidade de São Paulo
              (FAU-USP).
            </p>
            <p className="mb-4">
              Trabalho com projetos de arquitetura e interiores, buscando soluções que atendam às necessidades
              específicas de cada cliente e contexto.
            </p>
            <p className="mb-4">
              Minha abordagem valoriza a funcionalidade, a estética e a sustentabilidade, criando espaços que
              proporcionam bem-estar e qualidade de vida.
            </p>

            <div className="mt-4">
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="space-y-6 bg-white">
          <h2 className="text-xl font-bold">formação</h2>
          <ul className="space-y-2">
            <li>Graduação em Arquitetura e Urbanismo - FAU-USP (2010-2015)</li>
            <li>Especialização em Design de Interiores - Escola da Cidade (2016-2017)</li>
            <li>Mestrado em Arquitetura Contemporânea - FAU-USP (2018-2020)</li>
          </ul>

          <h2 className="text-xl font-bold pt-4">experiência</h2>
          <ul className="space-y-2">
            <li>2015-2017: Colaboradora em escritório de arquitetura</li>
            <li>2017-2019: Arquiteta associada em projetos institucionais</li>
            <li>2019-presente: Escritório próprio com foco em projetos residenciais e interiores</li>
          </ul>

          <h2 className="text-xl font-bold pt-4">contato</h2>
          <p>
            <a href="mailto:contato@cecireichstul.com" className="underline hover:no-underline">
              contato@cecireichstul.com
            </a>
          </p>
          <p>São Paulo, SP - Brasil</p>

          <div className="pt-8">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Floc.o Arquitetura. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

