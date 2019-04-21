# SwfSignature

This corresponds to the first 8 bytes of the SWF file. While the remaining part of the file
may be compressed, the signature is always written without any transformation.

```
interface SwfSignature {
  compression: CompressionMethod;
  version: Uint(8);
  uncompressedLength: Uint(32);
}
```
