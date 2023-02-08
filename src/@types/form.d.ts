declare namespace Forms {
  interface Contact {
    name: string;
    email: string;
    phone: string;
    username: string;
    promo: string;
  }
  type ContactKey = keyof Contact;
}
