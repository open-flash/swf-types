import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum JoinStyleType {
  Bevel,
  Miter,
  Round,
}

export const $JoinStyleType: TsEnumType<JoinStyleType> = new TsEnumType<JoinStyleType>({
  enum: JoinStyleType,
  changeCase: CaseStyle.KebabCase,
});
