// page.tsx
import Navigation from "@/components/navigation"
import ImageGallery from "@/components/image-gallery"

// Function to shuffle an array (Fisher-Yates algorithm)
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Original image array
const originalImages = [
  "/colabore/07b4d092901061.5e570c745f3bc.jpg?height=800&width=1200",
  "/jardim-botanico/06af0e19218987.5ff7248ac3ce5.jpg?height=800&width=1200",
  "/alem-mar/alemmar002.jpg?height=800&width=1200",
  "/ivan/ivan001.jpg?height=800&width=1200",
  "/guyana/guyana002.JPG?height=800&width=1200",
  "/lmd/lmd001.jpg?height=800&width=1200",
  "/mimo/mimo001.JPG?height=800&width=1200",
];

export default function Home() {
  const galleryImages = shuffleArray(originalImages);

  return (
    <main className="flex min-h-screen flex-col md:flex-row bg-white">
      {/* Navigation container - hidden on mobile, visible on desktop */}
      <div className="hidden md:block md:w-[240px] md:p-8 md:fixed md:h-screen md:overflow-auto md:bg-white md:z-10">
        <Navigation />
      </div>

      {/* Mobile navigation - only visible on mobile */}
      <div className="block md:hidden fixed z-50 w-full">
        <Navigation />
      </div>

      {/* Gallery - full screen on mobile */}
      <div className="flex-1 md:ml-[240px] bg-white h-screen w-full absolute inset-0 md:relative">
        <ImageGallery images={galleryImages} interval={5000} fadeTime={2000} />
      </div>
    </main>
  )
}