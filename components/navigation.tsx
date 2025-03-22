"use client"
import Link from "next/link"
import Logo from "@/components/logo"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

type CategoryName = 'residencial' | 'institucional' | 'interiores' | 'incorporacao';

type CategoryState = {
  [key in CategoryName]: boolean;
};

export default function Navigation() {
  const pathname = usePathname(); // Hook para obter a rota atual
  const isHomePage = pathname === '/'; // Verifica se estamos na página inicial
  
  const [openCategories, setOpenCategories] = useState<CategoryState>({
    residencial: false,
    institucional: false,
    interiores: false,
    incorporacao: false
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleCategory = (category: CategoryName) => {
    setOpenCategories({
      ...openCategories,
      [category]: !openCategories[category]
    });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile menu button - only visible on small screens */}
      <div className="md:hidden fixed top-4 right-4 z-50 bg-[#B7CCE9]">
        <button
          onClick={toggleMobileMenu}
          className="p-2 bg-transparent"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            // X icon for close
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            // Hamburger icon
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Logo only visible on homepage for mobile */}
      {isHomePage && (
        <div className="md:hidden fixed top-4 left-4 z-50 ">
          <Link href="/">
            <Logo />
          </Link>
        </div>
      )}

      {/* Navigation - hidden on mobile unless menu is open */}
      <nav className={`flex flex-col h-full  ${isMobile && !isMobileMenuOpen ? 'hidden' : 'flex'} md:flex`}>
        <div className="mb-8 hidden md:block">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className={`space-y-6 flex-1 ${isMobile ? 'pt-16 px-4 bg-white fixed inset-0 z-40' : ''}`}>
          {/* Seção Residencial */}
          <div className="mt-48">
            <h2
              className="nav-category cursor-pointer flex items-center"
              onClick={() => toggleCategory('residencial')}
            >
              Residencial
              <span className="ml-1">{openCategories.residencial ? '−' : '+'}</span>
            </h2>
            {openCategories.residencial && (
              <ul>
                <li>
                  <Link href="/residencial/guyana-lodges-01" className="nav-link">
                    Guyana Lodges 01
                  </Link>
                </li>
                <li>
                  <Link href="/residencial/guyana-lodges-02" className="nav-link">
                    Guyana Lodges 02
                  </Link>
                </li>
                <li>
                  <Link href="/residencial/casa-alem-mar" className="nav-link">
                    Casa Além Mar
                  </Link>
                </li>
                <li>
                  <Link href="/residencial/modhaus" className="nav-link">
                    Modhaus
                  </Link>
                </li>
                <li>
                  <Link href="/residencial/mimo" className="nav-link">
                    Chalé Mimo
                  </Link>
                </li>

                <li>
                  <Link href="/residencial/ottawa" className="nav-link">
                    Casa Ottawa
                  </Link>
                </li>

                <li>
                  <Link href="/residencial/tiny-house" className="nav-link">
                    Tiny House
                  </Link>
                </li>
                <li>
                  <Link href="/residencial/ivan-brand" className="nav-link">
                    Casa-Ateliê Ivan Brandão
                  </Link>
                </li>
                <li>
                  <Link href="/residencial/lmd" className="nav-link">
                    Casa LMD
                  </Link>
                </li>
                <li>
                  <Link href="/residencial/bromelia" className="nav-link">
                    Casa Bromélia
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Seção Institucional */} 
          <div>
            <h2
              className="nav-category cursor-pointer flex items-center"
              onClick={() => toggleCategory('institucional')}
            >
              Institucional
              <span className="ml-1">{openCategories.institucional ? '−' : '+'}</span>
            </h2>
            {openCategories.institucional && (
              <ul>
                <li>
                  <Link href="/institucional/colabore" className="nav-link">
                    Colabore
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/jardim-botanico-salvador" className="nav-link">
                    Jardim Botânico de Salvador
                  </Link>
                </li>
                <li>
                  <Link href="/institucional/horto" className="nav-link">
                    Centro de Interpretação da Mata Atlântica
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Seção Interiores */}
          <div>
            <h2
              className="nav-category cursor-pointer flex items-center"
              onClick={() => toggleCategory('interiores')}
            >
              Interiores
              <span className="ml-1">{openCategories.interiores ? '−' : '+'}</span>
            </h2>
            {openCategories.interiores && (
              <ul>
                <li>
                  <Link href="/interiores/apto-joaquim-antunes" className="nav-link">
                    apto. floresta
                  </Link>
                </li>
                <li>
                  <Link href="/interiores/apto-iz-floresta" className="nav-link">
                    apto. IZ Floresta
                  </Link>
                </li>
                <li>
                  <Link href="/interiores/apto-bela-vista" className="nav-link">
                    apto. Bela Vista
                  </Link>
                </li>
                <li>
                  <Link href="/interiores/apto-vitoria-01" className="nav-link">
                    apto. vitoria 01
                  </Link>
                </li>

                <li>
                  <Link href="/interiores/apto-vitoria-02" className="nav-link">
                    apto. vitoria 02
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div>
            <h2
              className="nav-category cursor-pointer flex items-center"
              onClick={() => toggleCategory('incorporacao')}
            >
              Incorporação
              <span className="ml-1">{openCategories.incorporacao ? '−' : '+'}</span>
            </h2>
            {openCategories.incorporacao && (
              <ul>
                <li>
                  <Link href="/incorporacao/apto-joaquim-antunes" className="nav-link">
                    apto. floresta
                  </Link>
                </li>
                <li>
                  <Link href="/incorporacao/apto-iz-floresta" className="nav-link">
                    apto. IZ Floresta
                  </Link>
                </li>
                <li>
                  <Link href="/incorporacao/apto-bela-vista" className="nav-link">
                    apto. Bela Vista
                  </Link>
                </li>
                <li>
                  <Link href="/incorporacao/apto-vitoria-01" className="nav-link">
                    apto. vitoria 01
                  </Link>
                </li>

                <li>
                  <Link href="/incorporacao/apto-vitoria-02" className="nav-link">
                    apto. vitoria 02
                  </Link>
                </li>
              </ul>
            )}
          </div>
          {/* Quem-sou */}
          <div>
            <h2 className="nav-category">
              <Link href="/quem-sou" className="hover:underline">
                Quem Somos
              </Link>
            </h2>
          </div>
          {/* Contato */}
          <div>
            <h2 className="nav-category">
              <Link href="/contato" className="hover:underline">
                Contato
              </Link>
            </h2>
          </div>
        </div>
      </nav>
    </>
  )
}