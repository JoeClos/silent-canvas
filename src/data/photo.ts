import { Category } from "./category";

export interface Photo {
  id: number;
  src: string;
  category: Category;
}

export const photos: Photo[] = [
  { id: 1, src: './assets/colorfull_flowers.jpg', category: 'Landscapes' },
  { id: 2, src: './assets/blue.jpg', category: 'Macros' },
  { id: 3, src: './assets/rose.jpg', category: 'Macros' },
  { id: 4, src: './assets/flowers.jpg', category: 'Landscapes' },
  { id: 5, src: './assets/ice.jpg', category: 'Macros' },
  { id: 6, src: './assets/bee.jpg', category: 'Macros' },
  { id: 7, src: './assets/lily_flower.jpg', category: 'Macros' },
  { id: 8, src: './assets/path.jpg', category: 'Landscapes' },
];
