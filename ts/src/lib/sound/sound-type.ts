import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum SoundType {
  Mono,
  Stereo,
}

export const $SoundType: TsEnumType<SoundType> = new TsEnumType<SoundType>({
  enum: SoundType,
  changeCase: CaseStyle.PascalCase,
});
