# Header

```
interface Header {
  compression: CompressionMethod;
  version: Uint(8);
  uncompressedLength: Uint(32);
  size: Rect;
  frameRate: Ufixed(8, 8);
  frameCount: Uint(16);
}
```
