export interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }
  
  export interface product {
_id: any;
    id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    quantity: number;
    sold: number;
    ratingsAverage: number;
    ratingsQuantity: number;
    imageCover: string;
    images: string[];
    category: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };
    subcategory: Subcategory[];
    brand: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };
    createdAt: string;
    updatedAt: string;
  }
  