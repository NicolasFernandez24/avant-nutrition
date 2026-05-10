export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;

  price: number; 
  oldPrice: number; 
  discount: string; 

  description: string;

  benefits: string[];
  usage: string;
  brand: string;
  stock: string;
}