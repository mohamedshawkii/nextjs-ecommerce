export interface simplifiedProduct {
    map(arg0: (item: any) => import("react").JSX.Element): unknown;
    _id: string,
    price: number,
    name: string,
    details: string,
    slug: string,
    imageUrl: string,
  }

export interface fullProduct {
    _id: string,
    price: number,
    name: string,
    details: string,
    slug: string,
    imageUrl: string,
  }