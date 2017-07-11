import {CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineBitsJpeg4 extends SwfTagBase {
  type: SwfTagType.DefineBitsJpeg4;
  characterId: Uint16;
  imageData: Buffer;
  bitmapAlphaData?: Buffer;
  // TODO: Deblocking
}

export namespace DefineBitsJpeg4 {
  export interface Json {
    type: "define-bits-jpeg4";
    "character-id": number;
    "image-data": string;
    "bitmap-alpha-data"?: string;
  }

  export const type: DocumentType<DefineBitsJpeg4> = new DocumentType<DefineBitsJpeg4>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineBitsJpeg4})},
      characterId: {type: new Int32Type()},
      imageData: {type: new Ucs2StringType({maxLength: Infinity})},
      bitmapAlphaData: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
