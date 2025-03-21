import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex flex-col">
      <div className=" leading-none tracking-tighter">
        <Image
          src="/logo_light.svg"
          alt="Floc.o Arquitetura"
          width={200}
          height={80}
          priority
        />
      </div>

    </div>
  )
}

