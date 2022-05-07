import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum JoinStyleType {
  Bevel,
  Miter,
  Round,
}

export const $JoinStyleType: TsEnumType<JoinStyleType> = new TsEnumType<JoinStyleType>({
  enum: JoinStyleType,
  changeCase: CaseStyle.PascalCase,
});
