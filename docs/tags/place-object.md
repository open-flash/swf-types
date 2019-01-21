# PlaceObject

```
interface PlaceObject variantof Tag(type) {
  isMove: Boolean;
  depth: Uint(16);
  characterId: Option(Uint(16));
  className: Option(String);
  matrix: Matrix;
  colorTransform: Option(ColorTransformWithAlpha);
  ratio: Option(Uint(16));
  name: Option(String);
  clipDepth: Option(Uint(16));
  filters: Filter[];
  blendMode: BlendMode;
  bitmapCache: Option(boolean);
  visible: boolean;
  backgroundColor: Option(StraightSRgba);
  clipActions: ClipAction[];
}
```
