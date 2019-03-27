import { CaseStyle } from "kryo/case-style";
import { TsEnumType } from "kryo/types/ts-enum";

export enum GridFitting {
  None,
  Pixel,
  SubPixel,
}

export const $GridFitting: TsEnumType<GridFitting> = new TsEnumType<GridFitting>({
  enum: GridFitting,
  changeCase: CaseStyle.KebabCase,
});
