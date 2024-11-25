import { eventos } from "core";
import Image from "next/image";
import Link from "next/link";
import QRCode from "react-qr-code";

export default function PageEvent() {
  return (
    <div className=" grid grid-cols-3 gap-5">
      {eventos.map((evento) => (
        <div
          key={evento.id}
          className="flex flex-col w-96 bg-zinc-800 rounded-lg overflow-hidden"
        >
          <div className=" relative w-full h-52">
            <Image
              src={evento.imagem}
              fill
              alt={evento.nome}
              className=" object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col items-center gap-5 p-7 text-center">
            <span className=" flex-1text-lg font-black">{evento.nome}</span>
            <p className="flex-1  text-sm to-zinc-400 ">{evento.descricao}</p>
            <QRCode className="w-44 h-44" value={JSON.stringify({id: evento.id,
              password: evento.senha
            })} />

            <div className="flex gap-5">
              <Link
                href={`/event/admim/${evento.id}`}
                className="button red flex-1 "
              >
                Admin
              </Link>
              <Link
                href={`/invate/${evento.alias}`}
                className="button green flex-1 "
              >
                Convite
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
