import { CaseStyle, SimpleEnumType } from "kryo";

export enum StreamSoundCompression {
  Adpcm,
  Mp3,
}

export namespace StreamSoundCompression {
  export type Json =
    "adcpm"
    | "mp3";

  export const type: SimpleEnumType<StreamSoundCompression> = new SimpleEnumType<StreamSoundCompression>({
    enum: StreamSoundCompression,
    rename: CaseStyle.KebabCase,
  });
}
