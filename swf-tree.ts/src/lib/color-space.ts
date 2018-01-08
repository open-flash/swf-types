import { CaseStyle, SimpleEnumType } from "kryo";

export enum ColorSpace {
  SRgb,
  LinearRgb,
}

export namespace ColorSpace {
  export type Json =
    "s-rgb"
    | "linear-rgb";

  export const type: SimpleEnumType<ColorSpace> = new SimpleEnumType<ColorSpace>({
    enum: ColorSpace,
    rename: CaseStyle.KebabCase,
  });
}
