# GradientBevel

```
interface GradientBevel variantof Filter(filter) {
  gradient: ColorStop[];
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
