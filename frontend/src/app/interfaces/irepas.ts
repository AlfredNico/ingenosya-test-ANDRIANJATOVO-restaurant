export interface IRepas {
  id?: number;
  libelle: string;
  file?: string;
  prix_unitaire: number;
  imgURL?: string;
  isElement?: boolean;
  isValid?: boolean;
  isVente?: boolean;
}
