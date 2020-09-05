import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum JoinStyleType {
  Bevel,
  Miter,
  Round,
}

export const $JoinStyleType: TsEnumType<JoinStyleType> = new TsEnumType<JoinStyleType>({
  enum: JoinStyleType,
  changeCase: CaseStyle.KebabCase,
});
