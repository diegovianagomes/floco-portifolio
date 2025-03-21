import Image from "next/image"
import SocialLinks from "@/components/social-links"
import PageLayout from "@/components/page-layout"

export default function AboutPage() {
  return (
    <PageLayout>
      <div className="px-8 mt-8">
        <div className="flex w-full justify-between mt-4 border-b-4 border-[#B7CCE9] ">
          <h1 className="mb-4  font-bold text-xl text-[#B7CCE9] font-sans antialiased">Quem somos</h1>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-8 mb-8">
        <div className="w-full hidden md:block "></div>
        <div className="w-full pr-8">
          <p className="pb-4 text-[#91A8E0]">
            Somos um estúdio que transcende a mera execução de projetos, onde a arquitetura e o design de interiores se convergem em uma prática que questiona, desconstrói e reconfigura as noções de espaço, função e sustentabilidade. Nosso compromisso não se restringe ao fortalecimento do sistema construtivo, mas se estende à construção de uma cultura própria, uma cultura construtiva que promove a descentralização das unidades produtivas e a criação de redes colaborativas, onde cada parceria emerge como um ato de resistência e reinvenção frente ao status quo.
          </p>
          <p className="pb-4 text-[#91A8E0]">
            Ao conceber nossas soluções modulares e pré-fabricadas, concebidas a seco e elaboradas com materiais sustentáveis e renováveis, procuramos diminuir o impacto ambiental historicamente associado ao sistema tradicional de construção. Essa abordagem, ao mesmo tempo técnica e poética, interroga a própria lógica do desenvolvimento urbano, propondo uma estética que se alia à ética e à eficiência.
          </p>
          <p className="pb-4 text-[#91A8E0]">
            Para nós, a demanda final do cliente não se resume à aquisição de uma solução estética ou meramente funcional, mas sim a uma experiência completa, um espaço que reflete a complexidade das relações humanas e ambientais. Nossos projetos são concebidos como textos abertos, onde cada módulo e cada conexão contam uma narrativa de transformação, instigando uma reflexão contínua sobre o que significa construir, em todos os sentidos. Em última análise, nosso trabalho é uma interrogação permanente sobre as possibilidades de um futuro em que o construído dialoga harmoniosamente com o natural e com a própria essência da experiência humana.
          </p>

          <div className="mb-4">
            <div className="flex w-full justify-between mt-2 border-b-2 border-[#B7CCE9] ">
              <h1 className="mb-2  font-normal text-lg text-[#91A8E0] font-sans antialiased">Equipe</h1>
            </div>

            <h2 className="pt-4 text-[#91A8E0]">
              Diego Viana
            </h2>
            <p className=" font-normal text-sm font-sans antialised text-[#91A8E0]">CAU  A612030</p>
            <p className="pt-4 font-normal text-lg font-sans antialised text-[#91A8E0]">
              Arquiteto e Urbanista(Universidade Salvador, 2009), Analista de Sistemas(Unilavras, 2024), Especialista e em Analise e Ciência de Dados(UNESC, 2024), Mestrando em Ciência da Computação(UFLA, 2025)
            </p>

            <div className="flex w-full justify-between mt-2 border-b-2 border-[#B7CCE9] "></div>
            <h2 className="pt-4 text-[#91A8E0]">
              Paula Louzada
            </h2>

            <p className="pt-2 pb-8 font-normal text-lg font-sans antialised text-[#91A8E0]">
              Designer de Interiores(Universidade Salvador, 2016).
            </p>
          </div>

          <div className="">
            <div className="flex w-full justify-between mt-2 border-b-2 border-[#B7CCE9] ">
              <h1 className="mb-2 font-normal text-lg text-[#91A8E0] font-sans antialiased">Premiações</h1>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-[80%_20%] gap-8 w-full  mb-6 pr-8 text-[#91A8E0]">
              <div className="w-full pt-6">
                <p>3º Lugar em competição fechada Ottawa Housing Competition </p>
              </div>
              <div className="w-full text-right pt-6">
                <p>2019</p>
              </div>

              <div className="w-full">
                <p>Seleção do 1º Guia IAB Agenda 2030 - Colabore </p>
              </div>
              <div className="w-full text-right">
                <p>2020</p>
              </div>
              <div className="w-full">
                <p>Seleção do 1º Guia IAB Agenda 2030 - ModHaus </p>
              </div>
              <div className="w-full text-right">
                <p>2020</p>
              </div>
            </div>


          </div>
        </div>
      </div>


    </PageLayout>
  )
}

