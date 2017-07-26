# SwfSignature

This corresponds to the first 8 bytes of the SWF file. While the remaining part of the file
can be compressed, the signature can always be read.

```
interface SwfSignature {
  compression: CompressionMethod;
  version: Uint(8);
  uncompressedLength: Uint(32);
}
```
