import {CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineBits extends SwfTagBase {
  type: SwfTagType.DefineBits;
  characterId: Uint16;
  jpegData: Buffer;
}

export namespace DefineBits {
  export interface Json {
    type: "define-bits";
    "character-id": number;
    "jpeg-data": string;
  }

  export const type: DocumentType<DefineBits> = new DocumentType<DefineBits>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineBits})},
      characterId: {type: new Int32Type()},
      jpegData: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
