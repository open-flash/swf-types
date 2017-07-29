# DefineFontInfo

```
interface DefineFontInfo variantof Tag(type) {
  fontId: Uint(16);
  fontName: String;
  isSmall: Boolean;
  isShiftJis: Boolean;
  isAnsi: Boolean;
  isItalic: Boolean;
  isBold: Boolean;
  language?: LanguageCode;
  codeUnits: Uint(16)[];
}
```
