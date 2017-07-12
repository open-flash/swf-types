# StyleChange

```
interface StyleChange variantof ShapeRecord(type) {
  deltaX: Sint(32);
  deltaY: Sint(32);
  leftFill: Option(Usize);
  rightFill: Option(Usize);
  lineStyle: Option(Usize);
  fillStyles: Option(FillStyle[]);
  lineStyles: Option(LineStyle[]);
}
```
