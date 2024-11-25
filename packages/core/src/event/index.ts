import Event from "./model/Event";
import Guest from "./model/Guest";

import createEventEmpty from "./functions/eventEmpty";
import createGuestEmpty from "./functions/guestEmpty";
import complementEvent from "./functions/complementEvent";
import complementGuest from "./functions/complementGuest";


export  type {Event , Guest}

export { complementEvent, createEventEmpty, complementGuest, createGuestEmpty}