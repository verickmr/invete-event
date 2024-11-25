-- CreateTable
CREATE TABLE "eventos" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alias" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "place" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "imgBackground" TEXT NOT NULL,
    "publicExpected" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "convidados" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "confirmed" BOOLEAN NOT NULL,
    "hasCompanion" BOOLEAN NOT NULL,
    "manyCompanions" INTEGER NOT NULL,
    "eventId" TEXT,
    CONSTRAINT "convidados_eventId_fkey" FOREIGN KEY ("eventId") REFERENCES "eventos" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
