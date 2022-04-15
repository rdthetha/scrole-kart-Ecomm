import { v4 as uuid } from "uuid";
import {run1,run2,cricket1,cricket2,indoor1,indoor2} from '../../image/images'
/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    id: uuid(),
    img: run1,
    category:"RunningShoes",
    Brand: "V1 Running Shoes",
    Detail: "Cricket shoes with excellent grip!",
    originalPrice: 5000,
    price: 4000,
    discount: 20,
    ratings: 4.7,
    inStock: true,
    fastDelivery: false
  },
  {
    id: uuid(),
    img: run2,
    category:"RunningShoes",
    Brand: "S2 Running Shoes",
    Detail: "Shoes with high stabilty!",
    originalPrice: 6000,
    price: 5400,
    discount: 10,
    ratings: 4.1,
    inStock: false,
    fastDelivery: true
  },
  {
    id: uuid(),
    img: cricket1,
    category:"CricketShoes",
    Brand: "A1 Cricket shoes",
    Detail: "Performance in the game!",
    originalPrice: 4000,
    price: 3600,
    discount: 10,
    ratings: 4.9,
    inStock: true,
    fastDelivery: true
  }
  ,
  {
    id: uuid(),
    img: cricket2,
    category:"CricketShoes",
    Brand: "A7 Cricket Shoes",
    Detail: "Stabilty and Versatile!",
    originalPrice: 6900,
    price: 5000,
    discount: 20,
    ratings: 2.4,
    inStock: false,
    fastDelivery: true
  }
  ,
  {
    id: uuid(),
    img: indoor1,
    category:"IndoorShoes",
    Brand: "E4 Indoor Shoes",
    Detail: "Great indoor performance!",
    originalPrice: 6000,
    price: 4800,
    discount: 20,
    ratings: 3.9,
    inStock: true,
    fastDelivery: true
  }
  ,
  {
    id: uuid(),
    img: indoor2,
    category:"IndoorShoes",
    Brand: "M10 Indoor Shoes",
    Detail: "Great for indoor activities!",
    originalPrice: 3000,
    price: 2700,
    discount: 10,
    ratings: 3.1,
    inStock: true,
    fastDelivery: false
  }
];
