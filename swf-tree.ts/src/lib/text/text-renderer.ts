import {CaseStyle, SimpleEnumType} from "kryo";

export enum TextRenderer {
  Normal,
  Advanced,
}

export namespace TextRenderer {
  export type Json =
    "normal"
    | "advanced";

  export const type: SimpleEnumType<TextRenderer> = new SimpleEnumType<TextRenderer>({
    enum: TextRenderer,
    rename: CaseStyle.KebabCase,
  });
}
