import {CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineBitsLossless extends SwfTagBase {
  type: SwfTagType.DefineBitsLossless;
  characterId: Uint16;
  jpegData: Buffer;
  // TODO
}

export namespace DefineBitsLossless {
  export interface Json {
    type: "define-bits";
    "character-id": number;
    "jpeg-data": string;
  }

  export const type: DocumentType<DefineBitsLossless> = new DocumentType<DefineBitsLossless>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineBitsLossless})},
      characterId: {type: new Int32Type()},
      jpegData: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
