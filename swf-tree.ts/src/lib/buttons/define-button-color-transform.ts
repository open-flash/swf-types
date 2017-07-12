import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {ColorTransform} from "../basic-types/color-transform";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineButtonColorTransform extends SwfTagBase {
  type: SwfTagType.DefineButtonColorTransform;
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
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineButtonColorTransform})},
      buttonId: {type: new Int32Type()},
      transform: {type: ColorTransform.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
