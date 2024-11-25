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
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPrisma = void 0;
const common_1 = require("@nestjs/common");
const prisma_provider_1 = require("../db/prisma.provider");
let EventPrisma = class EventPrisma {
    constructor(prisma) {
        this.prisma = prisma;
    }
    save(event) {
        return this.prisma.event.create({
            data: event,
        });
    }
    saveGuest(event, guest) {
        return this.prisma.guest.create({
            data: { ...guest, manyCompanions: +(guest.manyCompanions ?? 0), event: {
                    connect: {
                        id: event.id
                    }
                } }
        });
    }
    async findAll() {
        return this.prisma.event.findMany();
    }
    async findById(id, completed = false) {
        return this.prisma.event.findUnique({
            where: { id },
            include: { guests: true }
        });
    }
    async findByAlias(alias, completed = false) {
        return this.prisma.event.findUnique({
            select: {
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
            where: { alias },
            include: { guests: true }
        });
    }
};
exports.EventPrisma = EventPrisma;
exports.EventPrisma = EventPrisma = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_provider_1.PrismaProvider])
], EventPrisma);
//# sourceMappingURL=event.prisma.js.map