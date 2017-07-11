import {CaseStyle, SimpleEnumType} from "kryo";

export enum TextAlignment {
  Left,
  Right,
  Center,
  Justify,
}

export namespace TextAlignment {
  export type Json =
    "left"
    | "right"
    | "center"
    | "justify";

  export const type: SimpleEnumType<TextAlignment> = new SimpleEnumType<TextAlignment>({
    enum: TextAlignment,
    rename: CaseStyle.KebabCase,
  });
}
