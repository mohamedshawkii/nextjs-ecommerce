export interface simplifiedProduct {
  map(arg0: (item: any) => import("react").JSX.Element): unknown;
  _id: string,
  price: number,
  name: string,
  details: string,
  slug: string,
  imageUrl: string,
}

export type ProductInterFace = {
  [x: string]: any;
  map(arg0: (item: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
  _id: string,
  price: number,
  name: string,
  details: string,
  slug: string,
  imageUrl: string,
}