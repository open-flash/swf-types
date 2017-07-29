# DefineCffFont

```
interface DefineCffFont variantof Tag(type) {
  id: Uint(16);
  fontName: String;
  isItalic: Boolean;
  isBold: Boolean;
  data: Buffer;
}
```
