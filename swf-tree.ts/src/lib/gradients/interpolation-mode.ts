import {CaseStyle, SimpleEnumType} from "kryo";

export enum InterpolationMode {
  Normal,
  Linear,
}

export namespace InterpolationMode {
  export type Json =
    "normal"
    | "linear";

  export const type: SimpleEnumType<InterpolationMode> = new SimpleEnumType<InterpolationMode>({
    enum: InterpolationMode,
    rename: CaseStyle.KebabCase,
  });
}
