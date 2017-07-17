# StyleChange

```
interface StyleChange variantof ShapeRecord(type) {
  moveTo: Option(Vector2D);
  leftFill: Option(Usize);
  rightFill: Option(Usize);
  lineStyle: Option(Usize);
  fillStyles: Option(FillStyle[]);
  lineStyles: Option(LineStyle[]);
}
```
