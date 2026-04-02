export interface Product {
  id: number;
  name: string;
  category: string;
  image: string;
  company: string;
  details?: { [key: string]: string }; 
}