import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {ColorTransform} from "../color-transform";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface DefineButtonColorTransform extends _Tag {
  type: TagType.DefineButtonColorTransform;
  buttonId: Uint16;
  transform: ColorTransform;
}

export namespace DefineButtonColorTransform {
  export interface Json {
    type: "define-color-transform";
    button_id: number;
    transform: ColorTransform.Json;
  }

  export const type: DocumentType<DefineButtonColorTransform> = new DocumentType<DefineButtonColorTransform>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineButtonColorTransform})},
      buttonId: {type: new Int32Type()},
      transform: {type: ColorTransform.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
