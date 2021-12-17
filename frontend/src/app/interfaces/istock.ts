export interface IStock {
  id?: number;
  libelle: string;
  type_qte: string;
  qte: string;
  isAvailable?: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}

export const Types: { id: string; label: string }[] = [
  { id: 'l', label: 'Litre' },
  { id: 'g', label: 'Gramme' },
  { id: 'p', label: 'Pièce' },
  { id: 'f', label: 'Feuille' },
  { id: 'b', label: 'Boite' },
  { id: 'a', label: 'Autre' },
];

export const sortTypes: { id: string; value: string }[] = [
  { id: '1', value: 'éléments dans un stock' },
  { id: '2', value: 'Eléments manquant' },
];
