import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {SRgb} from "../basic-types/s-rgb";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface SetBackgroundColor extends _Tag {
  type: TagType.SetBackgroundColor;
  color: SRgb;
}

export namespace SetBackgroundColor {
  export interface Json {
    type: "set-background-color";
    color: SRgb.Json;
  }

  export const type: DocumentType<SetBackgroundColor> = new DocumentType<SetBackgroundColor>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SetBackgroundColor})},
      color: {type: SRgb.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
