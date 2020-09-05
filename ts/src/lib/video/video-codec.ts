import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum VideoCodec {
  None,
  Jpeg,
  Sorenson,
  Screen,
  Vp6,
  Vp6Alpha,
  Screen2,
  Avc,
}

export const $VideoCodec: TsEnumType<VideoCodec> = new TsEnumType<VideoCodec>({
  enum: VideoCodec,
  changeCase: CaseStyle.KebabCase,
});
