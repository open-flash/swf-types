# DefineMorphShape

```
interface DefineMorphShape variantof Tag(type) {
  id: Uint(16);
  startBounds: Rect;
  endBounds: Rect;
  edgeBounds: Option(Rect);
  hasFillWinding: Boolean;
  hasNonScalingStrokes: Boolean;
  hasScalingStrokes: Boolean;
  startEdges;
  endEdges;
}
```
