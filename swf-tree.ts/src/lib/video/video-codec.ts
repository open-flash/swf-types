import {CaseStyle, SimpleEnumType} from "kryo";

export enum VideoCodec {
  SorensonH263,
  Screen,
  Vp6,
  Vp6Alpha,
  Screen2,
}

export namespace VideoCodec {
  export type Json =
    "sorenson-h263"
    | "screen"
    | "vp6"
    | "vp6-alpha"
    | "screen2";

  export const type: SimpleEnumType<VideoCodec> = new SimpleEnumType<VideoCodec>({
    enum: VideoCodec,
    rename: CaseStyle.KebabCase,
  });
}
