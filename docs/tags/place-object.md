# PlaceObject

```
interface PlaceObject variantof Tag(type) {
  depth: Uint(16);
  characterId: Option(Uint(16));
  className: Option(String);
  matrix: Option(Matrix);
  colorTransform: Option(ColorTransformWithAlpha);
  ratio: Option(Uint(16));
  name: Option(String);
  clipDepth: Option(Uint(16));
  filters: Filter[];
  blendMode: Option(BlendMode);
  bitmapCache: Option(boolean);
  visible: Option(boolean);
  backgroundColor: Option(StraightSRgba);
  clipActions: ClipAction[];
}
```
