export interface simplifiedProduct {
  [x: string]: any;
  filter(arg0: (item: { name: string; indexOf: () => void; toLowerCase: () => void; }) => boolean): import("react").SetStateAction<simplifiedProduct | null | undefined>;
  map(arg0: (item: any) => import("react").JSX.Element): unknown;
  _id: string,
  price: number,
  name: string,
  details: string,
  slug: string,
  imageUrl: string,
  price_id: string,
}

export type ProductInterFace = {
  [x: string]: any;
  map(arg0: (item: any, index: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
  _id: string,
  price: number,
  name: string,
  details: string,
  slug: string,
  imageUrl: string,
  category: string,
  price_id: string,
}
