import BigLogo from "@/components/templete/BigLogo";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center bg-[url('/background-elementos.svg')] bg-cover gap-10">
      <div className="flex flex-col items-center gap-4"> 
        <BigLogo/>
        <p className="text-zinc-500 font-light w-96 l6[ text-center">Crie e gerencie o convite do seu evento de forma rápida e sem complicações</p>
      </div>
      <Link href="/event" className=" button blue text-lg uppercase">Crie seu evento</Link>
    </div>
  );
}
