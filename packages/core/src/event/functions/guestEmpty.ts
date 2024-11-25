import { randomUUID } from "crypto";
import Guest from "../model/Guest";

export default function createGuestEmpty(): Partial<Guest> {
    return {
        id: randomUUID(),
        name: "",
        confirmed: true,
        email: '',
        hasCompanion: false,
        manyCompanions: 0
    }
}