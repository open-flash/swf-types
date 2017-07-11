import {CaseStyle, SimpleEnumType} from "kryo";

export enum BlendMode {
  Normal,
  Layer,
  Multiply,
  Screen,
  Lighten,
  Darken,
  Difference,
  Add,
  Subtract,
  Invert,
  Alpha,
  Erase,
  Overlay,
  Hardlight,
}

export namespace BlendMode {
  export type Json =
    "normal"
    | "layer"
    | "multiply"
    | "screen"
    | "lighten"
    | "darken"
    | "difference"
    | "add"
    | "subtract"
    | "invert"
    | "alpha"
    | "erase"
    | "overlay"
    | "hardlight";

  export const type: SimpleEnumType<BlendMode> = new SimpleEnumType<BlendMode>({
    enum: BlendMode,
    rename: CaseStyle.KebabCase,
  });
}
