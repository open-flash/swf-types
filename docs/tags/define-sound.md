# DefineSound

```
interface DefineSound variantof Tag(type) {
  id: Uint(16);
  soundType: SoundType;
  soundSize: SoundSize;
  soundRate: SoundRate;
  format: AudioCodingFormat;
  sampleCount: Uint(32);
  data: Buffer;
}
```
