# DefineMorphShape

```
interface DefineMorphShape variantof Tag(type) {
  id: Uint(16);
  startBounds: Rect;
  endBounds: Rect;
  // TODO: Combine edgeBounds with something like MorphRect
  startEdgeBounds: Option(Rect);
  endEdgeBounds: Option(Rect);
  hasFillWinding: Boolean;
  hasNonScalingStrokes: Boolean;
  hasScalingStrokes: Boolean;
  shape: MorphShape;
}
```
