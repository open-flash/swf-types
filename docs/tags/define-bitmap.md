# DefineBitmap

Defines a lossless image (this is not related to the BMP file format).
This is similar to the `ImageData` interface used by the `getImageData` function of a
canvas 2D rendering context. Note that the `ImageData` inerface uses a Javascript
`Uint8ClampedArray` instead of an `Uint8Array`.

```
interface DefineBitmap variantof Tag(type) {
  id: Uint(16);
  width: Uint(16);
  heigth: Uint(16);
  data: Buffer;
}
```

`data` is composed of straight RGBA tuples with 8-bit color depth in the sRGB color space.
