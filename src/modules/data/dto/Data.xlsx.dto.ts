export class AcceptData {
  adsoyad: string;
  telefon: string;

  eposta?: string;
  login?: string;
  adress?: string;
  bilgi1: string;
  bilgi2: string;
  bilgi3: string;
  detay: string;

  constructor(partial?: Partial<AcceptData>) {
    Object.assign(this, partial);
  }
}
