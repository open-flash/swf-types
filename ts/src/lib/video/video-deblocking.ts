import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum VideoDeblocking {
  PacketValue,
  Off,
  Level1,
  Level2,
  Level3,
  Level4,
}

export const $VideoDeblocking: TsEnumType<VideoDeblocking> = new TsEnumType<VideoDeblocking>({
  enum: VideoDeblocking,
  changeCase: CaseStyle.KebabCase,
});
