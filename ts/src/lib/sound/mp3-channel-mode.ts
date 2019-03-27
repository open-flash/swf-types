import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

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
