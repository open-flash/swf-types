# Bevel

```
interface Bevel variantof Filter(filter) {
  shadowColor: StraightSRgba8;
  highlightColor: StraightSRgba8;
  blurX: Sfixed(16, 16);
  blurY: Sfixed(16, 16);
  angle: Sfixed(16, 16);
  distance: Sfixed(16, 16);
  strength: Sfixed(8, 8);
  inner: Boolean;
  knockout: Boolean;
  compositeSource: Boolean;
  onTop: Boolean;
  passes: Uint(4);
}
```
