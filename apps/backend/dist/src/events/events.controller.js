"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventsController = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("core");
const uuid_1 = require("uuid");
const event_prisma_1 = require("./event.prisma");
let EventsController = class EventsController {
    constructor(repo) {
        this.repo = repo;
    }
    async saveEvent(event) {
        const eventEnrolled = await this.repo.findByAlias(event.alias);
        if (eventEnrolled && eventEnrolled.id !== event.id) {
            throw new Error('Já existe um evento com esse alias.');
        }
        const eventCompleted = (0, core_1.complementEvent)(this.deserialize(event));
        await this.repo.save(eventCompleted);
    }
    async saveGuest(alias, guest) {
        const event = await this.repo.findByAlias(alias);
        if (!event) {
            throw new Error('Evento não encontrado');
        }
        const guestCompletd = (0, core_1.complementGuest)(guest);
        const convidado = await this.repo.saveGuest(event, guestCompletd);
        return this.serialize(convidado);
    }
    async acessEvent(dados) {
        const event = await this.repo.findById(dados.id);
        if (!event) {
            throw new Error('Evento não encontrado');
        }
        if (event.password !== dados.senha) {
            throw new Error('Senha inválida');
        }
        return this.serialize(event);
    }
    async findEvents() {
        const events = await this.repo.findAll();
        return events.map(this.serialize);
    }
    async findEvent(idOuAlias) {
        let event;
        if ((0, uuid_1.validate)(event.id)) {
            event = await this.repo.findById(idOuAlias, true);
        }
        else {
            event = await this.repo.findByAlias(idOuAlias, true);
        }
        return this.deserialize(event);
    }
    async validateAlias(alias, id) {
        const event = await this.repo.findByAlias(alias);
        return { valido: !event || event.id === id };
    }
    serialize(event) {
        if (!event)
            return null;
        return { ...event, date: core_1.Data.formatar(event.date) };
    }
    deserialize(event) {
        if (!event)
            return null;
        return { ...event, date: core_1.Data.desformatar(event.date) };
    }
};
exports.EventsController = EventsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "saveEvent", null);
__decorate([
    (0, common_1.Post)(':alias/convidado'),
    __param(0, (0, common_1.Param)('alias')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "saveGuest", null);
__decorate([
    (0, common_1.Post)('acessar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "acessEvent", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "findEvents", null);
__decorate([
    (0, common_1.Get)(':idOuAlias'),
    __param(0, (0, common_1.Param)('idOuAlias')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "findEvent", null);
__decorate([
    (0, common_1.Get)('validate/:alias/:id'),
    __param(0, (0, common_1.Param)('alias')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], EventsController.prototype, "validateAlias", null);
exports.EventsController = EventsController = __decorate([
    (0, common_1.Controller)('events'),
    __metadata("design:paramtypes", [event_prisma_1.EventPrisma])
], EventsController);
//# sourceMappingURL=events.controller.js.map