# SoundStreamHead

```
interface SoundStreamHead variantof Tag(type) {
  playbackSoundType: SoundType;
  playbackSoundSize: SoundSize;
  playbackSoundRate: SoundRate;
  streamSoundType: SoundType;
  streamSoundSize: SoundSize;
  streamSoundRate: SoundRate;
  streamFormat: AudioCodingFormat;
  sampleCount: Uint(16);
  latencySeek: Option(Sint(16));
}
```
