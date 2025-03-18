"use client"
import Link from "next/link"
import Logo from "@/components/logo"
import { useState, useEffect } from "react"

type CategoryName = 'residencial' | 'institucional' | 'interiores';

type CategoryState = {
  [key in CategoryName]: boolean;
};

export default function Navigation() {
  const [openCategories, setOpenCategories] = useState<CategoryState>({
    residencial: false,
    institucional: false,
    interiores: false
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
      <div className="md:hidden fixed top-4 right-4 z-50">
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

      {/* Logo always visible */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Link href="/">
          <Logo />
        </Link>
      </div>

      {/* Navigation - hidden on mobile unless menu is open */}
      <nav className={`flex flex-col h-full ${isMobile && !isMobileMenuOpen ? 'hidden' : 'flex'} md:flex`}>
        <div className="mb-8 hidden md:block">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className={`space-y-6 flex-1 ${isMobile ? 'pt-16 px-4 bg-white fixed inset-0 z-40' : ''}`}>
          <div>
            <h2
              className="nav-category cursor-pointer flex items-center"
              onClick={() => toggleCategory('residencial')}
            >
              residencial
              <span className="ml-1">{openCategories.residencial ? '−' : '+'}</span>
            </h2>
            {openCategories.residencial && (
              <ul>
                <li>
                  <Link href="/residencial/guyana-lodges" className="nav-link">
                    Guyana Lodges
                  </Link>
                </li>
                <li>
                  <Link href="/residencial/casa-alem-mar" className="nav-link">
                    Casa Além Mar
                  </Link>
                </li>
                <li>
                  <Link href="/residencial/casa-alem-mar" className="nav-link">
                    Casa Além Mar
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div>
            <h2
              className="nav-category cursor-pointer flex items-center"
              onClick={() => toggleCategory('institucional')}
            >
              institucional
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
              </ul>
            )}
          </div>

          <div>
            <h2
              className="nav-category cursor-pointer flex items-center"
              onClick={() => toggleCategory('interiores')}
            >
              interiores
              <span className="ml-1">{openCategories.interiores ? '−' : '+'}</span>
            </h2>
            {openCategories.interiores && (
              <ul>
                <li>
                  <Link href="/interiores/apto-joaquim-antunes" className="nav-link">
                    apto. joaquim antunes
                  </Link>
                </li>
                <li>
                  <Link href="/interiores/apto-vila-madalena" className="nav-link">
                    apto. vila madalena
                  </Link>
                </li>
                <li>
                  <Link href="/interiores/apto-bahia" className="nav-link">
                    apto. bahia
                  </Link>
                </li>
                <li>
                  <Link href="/interiores/apto-campo-belo" className="nav-link">
                    apto. campo belo
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div>
            <h2 className="nav-category">
              <Link href="/quem-sou" className="hover:underline">
                quem sou
              </Link>
            </h2>
          </div>
        </div>
      </nav>
    </>
  )
}