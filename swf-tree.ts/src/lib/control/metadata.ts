import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface Metadata extends SwfTagBase {
  type: SwfTagType.Metadata;
  metadata: string;
}

export namespace Metadata {
  export interface Json {
    type: "metadata";
    metadata: string;
  }

  export const type: DocumentType<Metadata> = new DocumentType<Metadata>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.Metadata})},
      metadata: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
