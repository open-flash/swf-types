import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Rgb} from "../basic-types/rgb";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface SetBackgroundColor extends _Tag {
  type: TagType.SetBackgroundColor;
  color: Rgb;
}

export namespace SetBackgroundColor {
  export interface Json {
    type: "set-background-color";
    color: Rgb.Json;
  }

  export const type: DocumentType<SetBackgroundColor> = new DocumentType<SetBackgroundColor>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SetBackgroundColor})},
      color: {type: Rgb.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
