import Event from "../model/Event";
import validateEvent from "./validateEvent";
import { randomUUID } from "crypto";

export default function complementEvent(eventPartial: Partial<Event>): Event {
    const errors = validateEvent(eventPartial)

    if (errors.length){
        throw new Error(errors.join("\n"))
    }

    const event: Event = {
        ...eventPartial,
        id: eventPartial.id ?? randomUUID(),
        password: eventPartial.password ?? "1234",
        publicExpected: +(eventPartial.publicExpected ?? 1)
    } as Event

    return event
}
