# Convolution

```
interface Convolution variantof Filter(filter) {
  matrixWidth: UintSize;
  matrixHeight: UintSize;
  divisor: Float(32);
  bias: Float(32);
  matrix: Float(32)[matrixWidth × matrixHeight];
  defaultColor: StraightSRgba8;
  clamp: Boolean;
  preserveAlpha: Boolean;
}
```
