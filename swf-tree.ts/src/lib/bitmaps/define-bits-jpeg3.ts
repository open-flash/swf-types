import {CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineBitsJpeg3 extends SwfTagBase {
  type: SwfTagType.DefineBitsJpeg3;
  characterId: Uint16;
  imageData: Buffer;
  bitmapAlphaData?: Buffer;
}

export namespace DefineBitsJpeg3 {
  export interface Json {
    type: "define-bits-jpeg3";
    "character-id": number;
    "image-data": string;
    "bitmap-alpha-data"?: string;
  }

  export const type: DocumentType<DefineBitsJpeg3> = new DocumentType<DefineBitsJpeg3>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineBitsJpeg3})},
      characterId: {type: new Int32Type()},
      imageData: {type: new Ucs2StringType({maxLength: Infinity})},
      bitmapAlphaData: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
