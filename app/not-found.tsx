import Link from "next/link"
import PageLayout from "@/components/page-layout"

export default function NotFound() {
  return (
    <PageLayout>
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Página não encontrada</h1>
          <p className="mb-6">A página que você está procurando não existe.</p>
          <Link href="/" className="underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </PageLayout>
  )
}

