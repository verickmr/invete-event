import Guest from "../model/Guest";
import validateGuest from "./validateGuest";

export default function complementGuest
(guestPartial: Partial<Guest>): Guest {
  const errors = validateGuest(guestPartial);

  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
  const manyCompanions = guestPartial.manyCompanions ?? 0
  const hasCompanion = guestPartial.hasCompanion && guestPartial.confirmed && manyCompanions > 0



  const guest: Guest = {
    ...guestPartial,
    manyCompanions: hasCompanion ? manyCompanions : 0,
    hasCompanion: hasCompanion
  } as Guest;

  return guest;
}
