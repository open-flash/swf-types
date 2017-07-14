# Blur

```
interface Blur variantof Filter(filter) {
  blurX: Sfixed(16, 16);
  blurY: Sfixed(16, 16);
  passes: Uint(8);
}
```
