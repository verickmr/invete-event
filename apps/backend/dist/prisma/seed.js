"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const core_1 = require("core");
async function seed() {
    const prisma = new client_1.PrismaClient();
    const trasacoes = core_1.eventos.map(async (evento) => {
        await prisma.event.create({
            data: {
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
                    create: evento.convidados.map((convidado) => ({
                        id: convidado.id,
                        name: convidado.nome,
                        email: convidado.email,
                        confirmed: convidado.confirmado,
                        hasCompanion: convidado.possuiAcompanhantes,
                        manyCompanions: convidado.qtdeAcompanhantes,
                    }))
                }
            }
        });
    });
    await Promise.all(trasacoes);
}
seed();
//# sourceMappingURL=seed.js.map