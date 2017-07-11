import {CaseStyle, SimpleEnumType} from "kryo";

export enum Screen2ColorDepth {
  Rgb24,
  Hybrid15_7,
}

export namespace Screen2ColorDepth {
  export type Json =
    "rgb24"
    | "hybrid15-7";

  export const type: SimpleEnumType<Screen2ColorDepth> = new SimpleEnumType<Screen2ColorDepth>({
    enum: Screen2ColorDepth,
    rename: CaseStyle.KebabCase,
  });
}
