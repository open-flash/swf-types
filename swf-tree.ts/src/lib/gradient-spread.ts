import {CaseStyle, SimpleEnumType} from "kryo";

export enum GradientSpread {
  Pad,
  Reflect,
  Repeat,
}

export namespace GradientSpread {
  export type Json =
    "pad"
    | "reflect"
    | "repeat";

  export const type: SimpleEnumType<GradientSpread> = new SimpleEnumType<GradientSpread>({
    enum: GradientSpread,
    rename: CaseStyle.KebabCase,
  });
}
