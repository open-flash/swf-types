import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

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
