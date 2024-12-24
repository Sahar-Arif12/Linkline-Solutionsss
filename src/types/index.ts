export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  media?: {
    image?: string;
    video?: string;
  };
  category: string;
  subCategory?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  subCategories?: SubCategory[];
}

export interface SubCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  parentCategory: string;
}