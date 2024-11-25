import { Event, Guest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';
export declare class EventPrisma {
    readonly prisma: PrismaProvider;
    constructor(prisma: PrismaProvider);
    save(event: Event): import(".prisma/client").Prisma.Prisma__EventClient<{
        id: string;
        alias: string;
        name: string;
        password: string;
        date: Date;
        place: string;
        description: string;
        image: string;
        imgBackground: string;
        publicExpected: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    saveGuest(event: Event, guest: Guest): import(".prisma/client").Prisma.Prisma__GuestClient<{
        id: string;
        name: string;
        email: string;
        confirmed: boolean;
        hasCompanion: boolean;
        manyCompanions: number;
        eventId: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): Promise<Event[]>;
    findById(id: string, completed?: boolean): Promise<Event | null>;
    findByAlias(alias: string, completed?: boolean): Promise<Event | null>;
}
