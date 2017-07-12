# PlaceObject

```
interface PlaceObject variantof Tag(type) {
  id: Option(Uint(16));
  depth: Uint(16);
  className: Option(String);
  matrix: Option(Matrix);
  colorTransform: Option(ColorTransformWithAlpha);
  ratio: Option(Uint(16));
  name: Option(String);
  clipDepth: Option(Uint(16));
  surfaceFilterList: Filter[];
  blendMode: Option(BlendMode);
  bitmapCache: Option(boolean);
  visible: Option(boolean);
  backgroundColor: Option(StraightSRgba);
  clipActions: ClipAction[];
}
```
