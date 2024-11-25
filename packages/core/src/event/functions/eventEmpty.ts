import { randomUUID } from "crypto";
import Event from "../model/Event";

export default function createEventEmpty(): Partial<Event> {
    return {
        id: randomUUID(),
        name: "",
        description: "",
        date: new Date(),
        place: "",
        publicExpected: 1,
        image: "",
        imgBackground: ""
    }
}