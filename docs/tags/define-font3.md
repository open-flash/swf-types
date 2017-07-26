# DefineFont3

```
interface DefineFont3 variantof Tag(type) {
  id: Uint(16);
  fontName: String;
  isSmall: Boolean;
  isShiftJis: Boolean;
  isAnsi: Boolean;
  isItalic: Boolean;
  isBold: Boolean;
  language: LanguageCode;
  glyphs: Glyph[];
  codeUnits: Uint(16)[];
  layout: Option(FontLayout);
}
```
