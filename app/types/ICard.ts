import { StaticImageData } from "next/image";

export default interface ICard {
  photo: StaticImageData;
  title: string;
  price: number;
}
