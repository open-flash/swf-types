import { CaseStyle, SimpleEnumType } from "kryo";

export enum GridFitting {
  None,
  Pixel,
  SubPixel,
}

export namespace GridFitting {
  export type Json =
    "none"
    | "pixel"
    | "sub-pixel";

  export const type: SimpleEnumType<GridFitting> = new SimpleEnumType<GridFitting>({
    enum: GridFitting,
    rename: CaseStyle.KebabCase,
  });
}
