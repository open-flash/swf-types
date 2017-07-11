import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface JpegTables extends SwfTagBase {
  type: SwfTagType.JpegTables;
  jpegData: Buffer;
}

export namespace JpegTables {
  export interface Json {
    type: "jpeg-tables";
    "jpeg-data": string;
  }

  export const type: DocumentType<JpegTables> = new DocumentType<JpegTables>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.JpegTables})},
      jpegData: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
