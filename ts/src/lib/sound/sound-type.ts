import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum SoundType {
  Mono,
  Stereo,
}

export const $SoundType: TsEnumType<SoundType> = new TsEnumType<SoundType>({
  enum: SoundType,
  changeCase: CaseStyle.PascalCase,
});
