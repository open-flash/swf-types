import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum SoundType {
  Mono,
  Stereo,
}

export const $SoundType: TsEnumType<SoundType> = new TsEnumType<SoundType>({
  enum: SoundType,
  changeCase: CaseStyle.KebabCase,
});
