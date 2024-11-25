import Guest from "../model/Guest";

export default function validateGuest(
  guest: Partial<Guest>
): string[] {
  const erros: string[] = [];

  if (!guest.name) {
    erros.push("Nome é obrigatório");
  }

  if (!guest.email) {
    erros.push("E-mail é obrigatório");
  }

  return erros;
}
