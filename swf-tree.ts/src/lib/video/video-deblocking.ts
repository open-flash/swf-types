import {CaseStyle, SimpleEnumType} from "kryo";

export enum VideoDeblocking {
  UseVideoPacketValue,
  Off,
  Level1,
  Level2,
  Level3,
  Level4,
}

export namespace VideoDeblocking {
  export type Json =
    "use-video-packet-value"
    | "off"
    | "level1"
    | "level2"
    | "level3"
    | "level4";

  export const type: SimpleEnumType<VideoDeblocking> = new SimpleEnumType<VideoDeblocking>({
    enum: VideoDeblocking,
    rename: CaseStyle.KebabCase,
  });
}
