import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Event, Guest } from '@prisma/client';
import { complementEvent, complementGuest, Data, eventos } from 'core';
import { validate } from 'uuid';
import { EventPrisma } from './event.prisma';

@Controller('events')
export class EventsController {
  constructor(readonly repo: EventPrisma){}

  @Post()
  async saveEvent(@Body() event: Event) {
    const eventEnrolled = await this.repo.findByAlias(event.alias)

    if (eventEnrolled && eventEnrolled.id !== event.id) {
      throw new Error('Já existe um evento com esse alias.');
    }
    const eventCompleted = complementEvent(this.deserialize(event));
    await this.repo.save(eventCompleted)
  }
  @Post(':alias/convidado')
  async saveGuest(@Param('alias') alias: string, @Body() guest: Guest) {
    const event = await this.repo.findByAlias(alias)
    if (!event) {
      throw new Error('Evento não encontrado')
    }

    const guestCompletd = complementGuest(guest)
  const  convidado = await this.repo.saveGuest(event, guestCompletd)
    return this.serialize(convidado);
  }

  @Post('acessar')
  async acessEvent(@Body() dados: { id: string; senha: string }) {
    const event = await this.repo.findById(dados.id)

    if (!event) {
      throw new Error('Evento não encontrado')
    }
    if (event.password !== dados.senha) {
      throw new Error('Senha inválida')
    }

    return this.serialize(event);
  }

  @Get()
  async findEvents() {
    const events = await this.repo.findAll()
    return events.map(this.serialize);
  }

  @Get(':idOuAlias')
  async findEvent(@Param('idOuAlias') idOuAlias: string) {
    let event: Event
    if (validate(event.id)) {
      event = await this.repo.findById(idOuAlias, true)
    } else {
      event = await this.repo.findByAlias(idOuAlias, true)
      
    }
    return this.deserialize(event)
  }

  @Get('validate/:alias/:id')
  async validateAlias(@Param('alias') alias: string, @Param('id') id: string) {
    const event = await this.repo.findByAlias(alias)
    return { valido: !event || event.id === id };
  }

  private serialize(event: Event) {
    if (!event) return null;
    return { ...event, date: Data.formatar(event.date) };
  }
  private deserialize(event: any) {
    if (!event) return null;
    return { ...event, date: Data.desformatar(event.date) };
  }
}
