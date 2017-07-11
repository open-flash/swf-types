import {CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineBitsJpeg2 extends SwfTagBase {
  type: SwfTagType.DefineBitsJpeg2;
  characterId: Uint16;
  imageData: Buffer;
}

export namespace DefineBitsJpeg2 {
  export interface Json {
    type: "define-bits-jpeg2";
    "character-id": number;
    "image-data": string;
  }

  export const type: DocumentType<DefineBitsJpeg2> = new DocumentType<DefineBitsJpeg2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineBitsJpeg2})},
      characterId: {type: new Int32Type()},
      imageData: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
