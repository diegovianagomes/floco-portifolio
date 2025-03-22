"use client"
import { useState, useEffect, useCallback, memo } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"
import type { CategoryName, NavigationItem } from "@/types/navigation"

const Logo = dynamic(() => import("@/components/Logo"), {
  ssr: false,
  loading: () => <div className="w-16 h-16 bg-gray-200 animate-pulse" />
})

const navigationItems: NavigationItem[] = [
  {
    category: "residencial",
    title: "Residencial",
    items: [
      { slug: "guyana-lodges-01", label: "Guyana Lodges 01" },
      { slug: "guyana-lodges-02", label: "Guyana Lodges 02" },
      { slug: "casa-alem-mar", label: "Casa Além Mar" },
      { slug: "modhaus", label: "Modhaus" },
      { slug: "mimo", label: "Chalé Mimo" },
      { slug: "ottawa", label: "Casa Ottawa" },
      { slug: "tiny-house", label: "Tiny House" },
      { slug: "ivan-brand", label: "Casa-Ateliê Ivan Brandão" },
      { slug: "lmd", label: "Casa LMD" },
      { slug: "bromelia", label: "Casa Bromélia" }
    ]
  },
  {
    category: "institucional",
    title: "Institucional",
    items: [
      { slug: "colabore", label: "Colabore" },
      { slug: "jardim-botanico-salvador", label: "Jardim Botânico de Salvador" },
      { slug: "horto", label: "Centro de Interpretação da Mata Atlântica" }
    ]
  },
  {
    category: "interiores",
    title: "Interiores",
    items: [
      { slug: "apto-joaquim-antunes", label: "apto. floresta" },
      { slug: "apto-iz-floresta", label: "apto. IZ Floresta" },
      { slug: "apto-bela-vista", label: "apto. Bela Vista" },
      { slug: "apto-vitoria-01", label: "apto. vitoria 01" },
      { slug: "apto-vitoria-02", label: "apto. vitoria 02" }
    ]
  },
  {
    category: "incorporacao",
    title: "Incorporação",
    items: [
      { slug: "apto-joaquim-antunes", label: "apto. floresta" },
      { slug: "apto-iz-floresta", label: "apto. IZ Floresta" },
      { slug: "apto-bela-vista", label: "apto. Bela Vista" },
      { slug: "apto-vitoria-01", label: "apto. vitoria 01" },
      { slug: "apto-vitoria-02", label: "apto. vitoria 02" }
    ]
  }
]

const MenuIcon = memo(() => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
))

const CloseIcon = memo(() => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
))

const MobileMenuButton = ({ isOpen, onClick }: { 
  isOpen: boolean
  onClick: () => void 
}) => (
  <button
    onClick={onClick}
    className="md:hidden fixed top-4 right-4 z-50 bg-[#B7CCE9] p-2 rounded"
    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
    aria-controls="mobile-menu"
    aria-expanded={isOpen}
  >
    {isOpen ? <CloseIcon /> : <MenuIcon />}
  </button>
)

export default function Navigation() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openCategory, setOpenCategory] = useState<CategoryName | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)")
    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
      if (!e.matches) setIsMobileMenuOpen(false)
    }

    mediaQuery.addEventListener("change", handleMediaChange)
    setIsMobile(mediaQuery.matches)

    return () => mediaQuery.removeEventListener("change", handleMediaChange)
  }, [])

  const toggleCategory = useCallback((category: CategoryName) => {
    setOpenCategory(prev => prev === category ? null : category)
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false)
    setOpenCategory(null)
  }, [])

  return (
      <>
        <MobileMenuButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />

        {isHomePage && !isMobileMenuOpen && (
          <div className="md:hidden fixed top-4 left-4 z-50">
            <Link href="/" onClick={closeMobileMenu}>
              <Logo />
            </Link>
          </div>
        )}

        <nav
          className={`fixed md:relative h-full bg-white md:bg-transparent z-40
            transform transition-transform duration-300 ease-out
            ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            md:translate-x-0 w-64 md:w-auto`}
          aria-label="Navegação principal"
        >
        <div className="md:hidden pt-20" /> {/* Spacer for mobile logo */}

        <div className="hidden md:block mb-8">
          <Link href="/" onClick={closeMobileMenu}>
            <Logo />
          </Link>
        </div>

        <div className="space-y-6 px-4 md:px-0 overflow-y-auto h-[calc(100vh-6rem)] md:h-auto">
          {navigationItems.map(({ category, title, items }) => (
            <div key={category} className="group">
              <h2
                role="button"
                tabIndex={0}
                onClick={() => toggleCategory(category)}
                onKeyDown={(e) => e.key === "Enter" && toggleCategory(category)}
                className="flex items-center justify-between p-2 hover:bg-gray-50 rounded
                  cursor-pointer transition-colors duration-200"
                aria-expanded={openCategory === category}
              >
                <span className="font-medium text-gray-800">{title}</span>
                <span className="text-gray-500">
                  {openCategory === category ? "−" : "+"}
                </span>
              </h2>
              
              {openCategory === category && (
                <ul className="ml-4 mt-2 space-y-2 border-l-2 border-gray-200 pl-4">
                  {items.map(({ slug, label }) => (
                    <li key={slug}>
                      <Link
                        href={`/${category}/${slug}`}
                        onClick={closeMobileMenu}
                        className={`block p-2 text-gray-600 rounded hover:bg-gray-50 
                          transition-colors duration-200 ${
                            pathname === `/${category}/${slug}`
                              ? "font-semibold text-[#B7CCE9]"
                              : ""
                          }`}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="border-t border-gray-200 pt-4">
            <Link
              href="/quem-sou"
              onClick={closeMobileMenu}
              className="block p-2 text-gray-800 hover:bg-gray-50 rounded
                transition-colors duration-200"
            >
              Quem Somos
            </Link>
            <Link
              href="/contato"
              onClick={closeMobileMenu}
              className="block p-2 text-gray-800 hover:bg-gray-50 rounded
                transition-colors duration-200"
            >
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}