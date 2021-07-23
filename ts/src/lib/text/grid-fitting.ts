import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum GridFitting {
  None,
  Pixel,
  SubPixel,
}

export const $GridFitting: TsEnumType<GridFitting> = new TsEnumType<GridFitting>({
  enum: GridFitting,
  changeCase: CaseStyle.PascalCase,
});
