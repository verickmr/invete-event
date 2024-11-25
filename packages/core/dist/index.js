"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  complementEvent: () => complementEvent,
  complementGuest: () => complementGuest,
  createEventEmpty: () => createEventEmpty,
  createGuestEmpty: () => createGuestEmpty,
  eventos: () => eventos_default
});
module.exports = __toCommonJS(src_exports);

// src/event/functions/eventEmpty.ts
var import_crypto = require("crypto");
function createEventEmpty() {
  return {
    id: (0, import_crypto.randomUUID)(),
    name: "",
    description: "",
    date: /* @__PURE__ */ new Date(),
    place: "",
    publicExpected: 1,
    image: "",
    imgBackground: ""
  };
}

// src/event/functions/guestEmpty.ts
var import_crypto2 = require("crypto");
function createGuestEmpty() {
  return {
    id: (0, import_crypto2.randomUUID)(),
    name: "",
    confirmed: true,
    email: "",
    hasCompanion: false,
    manyCompanions: 0
  };
}

// src/event/functions/validateEvent.ts
function validateEvent(event) {
  const erros = [];
  if (!event.alias) {
    erros.push("Alias \xE9 obrigat\xF3rio");
  }
  if (!event.name) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!event.description) {
    erros.push("Descri\xE7\xE3o \xE9 obrigat\xF3ria");
  }
  if (!event.date) {
    erros.push("Data \xE9 obrigat\xF3ria");
  }
  if (!event.place) {
    erros.push("Local \xE9 obrigat\xF3rio");
  }
  if (!event.publicExpected || event.publicExpected < 1) {
    erros.push("P\xFAblico esperado \xE9 obrigat\xF3rio");
  }
  if (!event.image) {
    erros.push("Imagem \xE9 obrigat\xF3ria");
  }
  if (!event.imgBackground) {
    erros.push("Imagem de fundo \xE9 obrigat\xF3ria");
  }
  return erros;
}

// src/event/functions/complementEvent.ts
var import_crypto3 = require("crypto");
function complementEvent(eventPartial) {
  const errors = validateEvent(eventPartial);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
  const event = {
    ...eventPartial,
    id: eventPartial.id ?? (0, import_crypto3.randomUUID)(),
    password: eventPartial.password ?? "1234",
    publicExpected: +(eventPartial.publicExpected ?? 1)
  };
  return event;
}

// src/event/functions/validateGuest.ts
function validateGuest(guest) {
  const erros = [];
  if (!guest.name) {
    erros.push("Nome \xE9 obrigat\xF3rio");
  }
  if (!guest.email) {
    erros.push("E-mail \xE9 obrigat\xF3rio");
  }
  return erros;
}

// src/event/functions/complementGuest.ts
function complementGuest(guestPartial) {
  const errors = validateGuest(guestPartial);
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
  const manyCompanions = guestPartial.manyCompanions ?? 0;
  const hasCompanion = guestPartial.hasCompanion && guestPartial.confirmed && manyCompanions > 0;
  const guest = {
    ...guestPartial,
    manyCompanions: hasCompanion ? manyCompanions : 0,
    hasCompanion
  };
  return guest;
}

// src/constants/eventos.ts
var import_crypto4 = require("crypto");
var eventos = [
  {
    id: (0, import_crypto4.randomUUID)(),
    alias: "evento-fullstack",
    senha: "senha123",
    nome: "Evento de Desenvolvimento Fullstack",
    data: /* @__PURE__ */ new Date("2024-12-01T10:00:00Z"),
    local: "S\xE3o Paulo, SP",
    descricao: "Um evento completo para aprender desenvolvimento fullstack do zero.",
    imagem: "https://play-lh.googleusercontent.com/mpBm6uxkAwCTaDL7us2iG0L-Lpxb6_vUYxJ5dBMSrKFGZoION2lUY5RkJYModzngyIk",
    imagemBackground: "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
    publicoEsperado: 200,
    convidados: [
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Alice Silva",
        email: "alice@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Carlos Pereira",
        email: "carlos@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Beatriz Lima",
        email: "beatriz@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      }
    ]
  },
  {
    id: (0, import_crypto4.randomUUID)(),
    alias: "evento-js-avancado",
    senha: "js2024",
    nome: "Workshop Avan\xE7ado de JavaScript",
    data: /* @__PURE__ */ new Date("2024-11-20T15:00:00Z"),
    local: "Rio de Janeiro, RJ",
    descricao: "Um workshop avan\xE7ado para programadores JavaScript.",
    imagem: "https://www.datocms-assets.com/48401/1628644950-javascript.png?auto=format&fit=max&w=1200",
    imagemBackground: "https://blog.cronapp.io/wp-content/uploads/2020/09/javascript-1.jpg",
    publicoEsperado: 100,
    convidados: [
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Eduardo Santos",
        email: "eduardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Fernanda Costa",
        email: "fernanda@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      }
    ]
  },
  {
    id: (0, import_crypto4.randomUUID)(),
    alias: "evento-dev-frontend",
    senha: "front123",
    nome: "Bootcamp de Desenvolvimento Frontend",
    data: /* @__PURE__ */ new Date("2024-11-15T09:00:00Z"),
    local: "Belo Horizonte, MG",
    descricao: "Aprenda a criar interfaces incr\xEDveis e responsivas.",
    imagem: "https://www.simplilearn.com/ice9/free_resources_article_thumb/recact_angular_vue.jpg",
    imagemBackground: "https://www.frontendmag.com/wp-content/uploads/2023/01/easiest-front-end-framework.jpeg",
    publicoEsperado: 150,
    convidados: [
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Gabriela Rocha",
        email: "gabriela@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Hugo Nogueira",
        email: "hugo@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      },
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Isabela Martins",
        email: "isabela@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: (0, import_crypto4.randomUUID)(),
    alias: "casamento-alberto-marina",
    senha: "casamento2024",
    nome: "Casamento do Alberto e Marina",
    data: /* @__PURE__ */ new Date("2024-11-25T16:00:00Z"),
    local: "Florian\xF3polis, SC",
    descricao: "Celebra\xE7\xE3o do casamento de Alberto e Marina com amigos e familiares.",
    imagem: "https://i.em.com.br/IQ1l_dkc9VYK5P8PW-EaTphOuF4=/790x/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/05/21/1496049/uma-cor-que-esta-totalmente-proibida-para-as-convidadas-de-acordo-com-a-etiqueta-de-casamento-e-o-branco-que-esta-reservado-para-as-noivas-a-nao-ser-que-o-casamento-seja-na-praia_1_55583.jpg",
    imagemBackground: "https://www.psicologo.com.br/wp-content/uploads/casamento-feliz-um-guia-para-casamentos-felizes.jpg",
    publicoEsperado: 150,
    convidados: [
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Bruno Cardoso",
        email: "bruno@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 1
      },
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Carla Mendes",
        email: "carla@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: (0, import_crypto4.randomUUID)(),
    alias: "aniversario-joao",
    senha: "joao2024",
    nome: "Anivers\xE1rio do Jo\xE3o - 30 Anos",
    data: /* @__PURE__ */ new Date("2024-12-05T18:00:00Z"),
    local: "Curitiba, PR",
    descricao: "Comemora\xE7\xE3o dos 30 anos de Jo\xE3o com amigos pr\xF3ximos e familiares.",
    imagem: "https://img.elo7.com.br/product/600x380/4C55C74/capa-painel-redondo-tema-feliz-aniversario-em-tecido-1-50m-festa.jpg",
    imagemBackground: "https://img.freepik.com/vetores-gratis/fundo-da-celebracao-dos-baloes-e-confetti_1048-2223.jpg",
    publicoEsperado: 80,
    convidados: [
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Maria Souza",
        email: "maria@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 2
      },
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Jos\xE9 Almeida",
        email: "jose@example.com",
        confirmado: false,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: (0, import_crypto4.randomUUID)(),
    alias: "inauguracao-loja-estrela",
    senha: "estrela2024",
    nome: "Inaugura\xE7\xE3o da Loja Estrela",
    data: /* @__PURE__ */ new Date("2024-12-10T09:00:00Z"),
    local: "Porto Alegre, RS",
    descricao: "Evento de inaugura\xE7\xE3o da nova loja Estrela com brindes e promo\xE7\xF5es.",
    imagem: "https://cosmeticinnovation.com.br/wp-content/uploads/2018/01/estrela_cosmeticos.png",
    imagemBackground: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ-0_VdF_lcXATRHDUaaI0AQCt8R6Y_ShR3A&s",
    publicoEsperado: 300,
    convidados: [
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Cl\xE1udia Lima",
        email: "claudia@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 3
      },
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Ricardo Barbosa",
        email: "ricardo@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  },
  {
    id: (0, import_crypto4.randomUUID)(),
    alias: "reuniao-familia-oliveira",
    senha: "familia2024",
    nome: "Reuni\xE3o da Fam\xEDlia Oliveira",
    data: /* @__PURE__ */ new Date("2024-12-15T12:00:00Z"),
    local: "Salvador, BA",
    descricao: "Reuni\xE3o de fim de ano da fam\xEDlia Oliveira.",
    imagem: "https://www.themonastery.org/assets/themonastery/blog/scaled/duggars.jpg",
    imagemBackground: "https://img.freepik.com/fotos-premium/ondas-abstratas-brilhantes-de-celebracao-do-arco-iris-fluem-suavemente-geradas-por-ia_188544-9530.jpg?semt=ais_hybrid",
    publicoEsperado: 50,
    convidados: [
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Thiago Oliveira",
        email: "thiago@example.com",
        confirmado: true,
        possuiAcompanhantes: true,
        qtdeAcompanhantes: 4
      },
      {
        id: (0, import_crypto4.randomUUID)(),
        nome: "Let\xEDcia Oliveira",
        email: "leticia@example.com",
        confirmado: true,
        possuiAcompanhantes: false,
        qtdeAcompanhantes: 0
      }
    ]
  }
];
var eventos_default = eventos;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  complementEvent,
  complementGuest,
  createEventEmpty,
  createGuestEmpty,
  eventos
});
