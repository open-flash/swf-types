import {BufferType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {Uint16} from "semantic-types";

export interface DefineBinaryData extends SwfTagBase {
  type: SwfTagType.DefineBinaryData;
  id: Uint16;
  data: Uint8Array;
}

export namespace DefineBinaryData {
  export interface Json {
    type: "define-binary-data";
    id: number;
    "data": string;
  }

  export const type: DocumentType<DefineBinaryData> = new DocumentType<DefineBinaryData>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineBinaryData})},
      id: {type: new Int32Type()},
      data: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
