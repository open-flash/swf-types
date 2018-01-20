import { CaseStyle, SimpleEnumType } from "kryo";

export enum Mp3ChannelMode {
  Stereo,
  JointStereo,
  DualChannel,
  SingleChannel,
}

export namespace Mp3ChannelMode {
  export type Json =
    "stereo"
    | "joint-stereo"
    | "dual-channel"
    | "singlie-channel";

  export const type: SimpleEnumType<Mp3ChannelMode> = new SimpleEnumType<Mp3ChannelMode>({
    enum: Mp3ChannelMode,
    rename: CaseStyle.KebabCase,
  });
}
