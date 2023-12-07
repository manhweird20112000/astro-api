import Jimp from 'jimp';

type ICropOptions = {
  crop?: {
    width: number;
    height: number;
  };
  storage: string;
};

type IResizeOptions = Pick<ICropOptions, 'storage'>;

export class JimpHelper {
  static async cropImage(path: string, options: ICropOptions) {
    console.log(path);
    const image = await Jimp.read(path);
    const widthImage: number = image.getWidth();
    const heightImage: number = image.getHeight();

    image
      .crop(
        (widthImage - options.crop.width) / 2,
        (heightImage - options.crop.height) / 2,
        options.crop.width || widthImage / 2,
        options.crop.height || widthImage / 2,
      )
      .write(options?.storage || 'crop.jpeg');
  }

  static async resizeImage(path: string, options: IResizeOptions) {
    const image = await Jimp.read(path);
    const widthImage: number = image.getWidth();
    const heightImage: number = image.getHeight();

    image
      .resize(widthImage / 3, heightImage / 3)
      .quality(80)
      .write(options?.storage || 'resize.jpeg');
  }
}
