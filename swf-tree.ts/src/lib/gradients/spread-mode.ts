import {CaseStyle, SimpleEnumType} from "kryo";

export enum SpreadMode {
  Pad,
  Reflect,
  Repeat,
}

export namespace SpreadMode {
  export type Json =
    "pad"
    | "reflect"
    | "repeat";

  export const type: SimpleEnumType<SpreadMode> = new SimpleEnumType<SpreadMode>({
    enum: SpreadMode,
    rename: CaseStyle.KebabCase,
  });
}
