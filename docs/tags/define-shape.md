# DefineShape

```
interface DefineShape variantof Tag(type) {
  id: Uint(16);
  bounds: Rect;
  edgeBounds: Option(Rect);
  hasFillWinding: Boolean;
  hasNonScalingStrokes: Boolean;
  hasScalingStrokes: Boolean;
  shape: Shape;
}
```
