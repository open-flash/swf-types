# DefineDynamicText

```
interface DefineDynamicText variantof Tag(type) {
  id: Uint(16);
  bounds: Rect;
  wordWrap: Boolean;
  multiline: Boolean;
  password: Boolean;
  readonly: Boolean;
  autoSize: Boolean;
  noSelect: Boolean;
  border: Boolean;
  wasStatic: Boolean;
  html: Boolean;
  useGlyphFont: Boolean;
  fontId: Option(Uint(16));
  fontSize: Option(Uint(16));
  fontClass?: String;
  color?: StraightSRgba8;
  maxLength: Uint(16);
  align?: TextAlignment;
  marginLeft: Uint(16);
  marginRight: Uint(16);
  indent: Uint(16);
  leading: Uint(16);
  variableName: String;
  initialText?: String;
}
```
