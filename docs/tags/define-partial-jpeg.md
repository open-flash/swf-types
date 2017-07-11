# DefinePartialJpeg

```
interface DefinePartialJpeg variantof Tag(type) {
  id: Uint(16);
  data: Buffer;
}
```

## Original documentation

### DefineBits

This tag defines a bitmap character with JPEG compression. It contains only the JPEG compressed image data
(from the Frame Header onward). A separate JPEGTables tag contains the JPEG encoding data used to encode
this image (the Tables/Misc segment).

**Note**: Only one JPEGTables tag is allowed in a SWF file, and thus all bitmaps defined with DefineBits must share
common encoding tables.

The data in this tag begins with the JPEG SOI marker 0xFF, 0xD8 and ends with the EOI marker 0xFF, 0xD9.
Before version 8 of the SWF file format, SWF files could contain an erroneous header of 0xFF, 0xD9, 0xFF, 0xD8
before the JPEG SOI marker.

The minimum file format version for this tag is SWF 1.

| Field             | Type                 | Comment                        |
|-------------------|----------------------|--------------------------------|
| Header            | RECORDHEADER (long)  | Tag type = 6                   |
| CharacterID       | UI16                 | ID for this character          |
| JPEGData          | UI8[image data size] | JPEG compressed image          |
