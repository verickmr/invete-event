import { Event, Guest } from '@prisma/client';
import { EventPrisma } from './event.prisma';
export declare class EventsController {
    readonly repo: EventPrisma;
    constructor(repo: EventPrisma);
    saveEvent(event: Event): Promise<void>;
    saveGuest(alias: string, guest: Guest): Promise<{
        date: string;
        name: string;
        id: string;
        alias: string;
        password: string;
        place: string;
        description: string;
        image: string;
        imgBackground: string;
        publicExpected: number;
    }>;
    acessEvent(dados: {
        id: string;
        senha: string;
    }): Promise<{
        date: string;
        name: string;
        id: string;
        alias: string;
        password: string;
        place: string;
        description: string;
        image: string;
        imgBackground: string;
        publicExpected: number;
    }>;
    findEvents(): Promise<{
        date: string;
        name: string;
        id: string;
        alias: string;
        password: string;
        place: string;
        description: string;
        image: string;
        imgBackground: string;
        publicExpected: number;
    }[]>;
    findEvent(idOuAlias: string): Promise<any>;
    validateAlias(alias: string, id: string): Promise<{
        valido: boolean;
    }>;
    private serialize;
    private deserialize;
}
