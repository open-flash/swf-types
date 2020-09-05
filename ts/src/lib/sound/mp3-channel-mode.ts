import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum Mp3ChannelMode {
  Stereo,
  JointStereo,
  DualChannel,
  SingleChannel,
}

export const $Mp3ChannelMode: TsEnumType<Mp3ChannelMode> = new TsEnumType<Mp3ChannelMode>({
  enum: Mp3ChannelMode,
  changeCase: CaseStyle.KebabCase,
});
