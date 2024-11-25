interface Event {
    id: string;
    alias: string;
    password: string;
    name: string;
    date: Date;
    place: string;
    description: string;
    image: string;
    imgBackground: string;
    publicExpected: number;
}

interface Guest {
    id: string;
    name: string;
    email: string;
    confirmed: boolean;
    hasCompanion: boolean;
    manyCompanions: number;
}

declare function createEventEmpty(): Partial<Event>;

declare function createGuestEmpty(): Partial<Guest>;

declare function complementEvent(eventPartial: Partial<Event>): Event;

declare function complementGuest(guestPartial: Partial<Guest>): Guest;

declare class Alias {
    static formatar(valor: string): string;
}

declare class Data {
    static formatar(date: Date): string;
    static desformatar(date: string): Date;
}

declare const eventos: {
    id: `${string}-${string}-${string}-${string}-${string}`;
    alias: string;
    senha: string;
    nome: string;
    data: Date;
    local: string;
    descricao: string;
    imagem: string;
    imagemBackground: string;
    publicoEsperado: number;
    convidados: {
        id: `${string}-${string}-${string}-${string}-${string}`;
        nome: string;
        email: string;
        confirmado: boolean;
        possuiAcompanhantes: boolean;
        qtdeAcompanhantes: number;
    }[];
}[];

export { Alias, Data, type Event, type Guest, complementEvent, complementGuest, createEventEmpty, createGuestEmpty, eventos };
