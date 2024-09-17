import { Category } from "./category";

export interface Photo {
  id: number;
  src: string;
  category: Category;
}

export const photos: Photo[] = [
  { id: 1, src: "./assets/flowers/colorfull_flowers.jpg", category: "Flowers" },
  { id: 2, src: "./assets/flowers/blue.jpg", category: "Flowers" },
  { id: 3, src: "./assets/flowers/flowers.jpg", category: "Flowers" },
  { id: 4, src: "./assets/flowers/lily_flower.jpg", category: "Flowers" },
  { id: 5, src: "./assets/flowers/spring.jpg", category: "Flowers" },
  { id: 6, src: "./assets/landscapes/autumn.jpg", category: "Landscapes" },
  { id: 7, src: "./assets/landscapes/path.jpg", category: "Landscapes" },
  { id: 8, src: "./assets/landscapes/sunset.jpg", category: "Landscapes" },
  { id: 9, src: "./assets/landscapes/yellow.jpg", category: "Landscapes" },
  {
    id: 10,
    src: "./assets/landscapes/flowers_on_hills.jpg",
    category: "Landscapes",
  },
  { id: 11, src: "./assets/landscapes/loneliness.jpg", category: "Landscapes" },

  { id: 12, src: "./assets/geometry/bubble.jpg", category: "Geometry" },
  { id: 13, src: "./assets/geometry/leaves.jpg", category: "Geometry" },
  { id: 14, src: "./assets/geometry/shapes.jpg", category: "Geometry" },
  { id: 15, src: "./assets/macros/rose.jpg", category: "Macros" },
  { id: 16, src: "./assets/macros/small_flower.jpg", category: "Macros" },
  { id: 17, src: "./assets/macros/small.jpg", category: "Macros" },
  { id: 18, src: "./assets/macros/spiderweb.jpg", category: "Macros" },
  { id: 19, src: "./assets/macros/velvet.jpg", category: "Macros" },
];
