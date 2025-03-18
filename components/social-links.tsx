import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

export default function SocialLinks() {
  return (
    <div className="flex space-x-4 items-center">
      <Link href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram className="w-5 h-5" />
      </Link>
      <Link href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <Linkedin className="w-5 h-5" />
      </Link>
      <Link href="mailto:contato@cecireichstul.com" aria-label="Email">
        <Mail className="w-5 h-5" />
      </Link>
    </div>
  )
}

