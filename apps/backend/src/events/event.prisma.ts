import { Injectable } from '@nestjs/common';
import { Event, Guest } from 'core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class EventPrisma {
  constructor(readonly prisma: PrismaProvider) {}
  save(event: Event) {
    return this.prisma.event.create({
        data: event as any,
    })
  }

  saveGuest(event: Event, guest: Guest){
    return this.prisma.guest.create({
        data: {...guest, manyCompanions: +(guest.manyCompanions ?? 0), event: {
            connect: {
                id: event.id
            }
        }}
    })
  }

  async findAll(): Promise<Event[]> {
    return this.prisma.event.findMany() as any
  }
  
    async findById(id: string completed: boolean = false): Promise<Event | null> {
        return this.prisma.event.findUnique({
            where: {id},
            include:{guests:true}
        }) as any
    }
   
    async findByAlias(alias: string ,completed: boolean = false): Promise<Event | null> {
        return this.prisma.event.findUnique({
            select:{
                id: true,
                name: true,
                description: true,
                place: true,
                image: true,
                imgBackground: true,
                alias: true,
                password: completed,
                publicExpected: completed,
                guests: completed
            },
            where: {alias},
            include:{guests:true}
        }) as any
    }
}
