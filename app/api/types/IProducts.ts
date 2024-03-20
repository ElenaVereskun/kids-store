/** интерфейс товары */
export default interface IProducts {
  /** идентификатор */
  id?: number;

  /** название */
  title: string;

  /**описание */
  description: string;

  /**размер */
  size: number;

  /**цвет */
  color: string;

  /** главное фото */
  mainImage?: null | ImageNameItem;

  /**все фото */
  imageNameList?: ImageNameItem[];
}

export interface ImageNameItem {
  imageId: number;
  imageName: string;
}

export interface ImageUrlList {
  id: number;
  tourId: null | number;
  newsId: null | number;
  imageUrl: string;
}

export interface IForm {
  image: string;
  images: string[];
  video: string;
  title: string;
  text: string;
}

export type ImagesToAdd = File;

export type ImagesToDelete = number;
