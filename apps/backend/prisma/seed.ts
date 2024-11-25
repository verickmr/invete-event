import { PrismaClient } from "@prisma/client";
import { eventos } from "core";

async function seed() {
    const prisma = new PrismaClient()

    const trasacoes = eventos.map(async (evento) => {
        await prisma.event.create({
            data:{
                id: evento.id,
                alias: evento.alias,
                password: evento.senha,
                name: evento.nome,
                date: evento.data,
                place: evento.local,
                description: evento.descricao,
                image: evento.imagem,
                imgBackground: evento.imagemBackground,
                publicExpected: evento.publicoEsperado,
                guests: {
                    create: evento.convidados.map((convidado) =>({
                        id: convidado.id,
                        name: convidado.nome,
                        email: convidado.email,
                        confirmed: convidado.confirmado,
                        hasCompanion: convidado.possuiAcompanhantes,
                        manyCompanions: convidado.qtdeAcompanhantes, 
                    })
                )
                }
            }
        })
    })
    await Promise.all(trasacoes)
}

seed()