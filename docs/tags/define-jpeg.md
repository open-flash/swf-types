# DefineJpeg

```
interface DefineJpeg variantof Tag(type) {
  id: Uint(16);
  image: Buffer;
  alpha: Option(Buffer);
  deblocking: Option(Uint(16));
}
```
