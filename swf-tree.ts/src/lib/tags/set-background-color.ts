import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { SRgb8 } from "../s-rgb8";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface SetBackgroundColor extends _Tag {
  type: TagType.SetBackgroundColor;
  color: SRgb8;
}

export namespace SetBackgroundColor {
  export interface Json {
    type: "set-background-color";
    color: SRgb8.Json;
  }

  export const type: DocumentType<SetBackgroundColor> = new DocumentType<SetBackgroundColor>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SetBackgroundColor})},
      color: {type: SRgb8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
