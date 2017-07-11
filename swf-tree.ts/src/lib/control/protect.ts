import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface Protect extends SwfTagBase {
  type: SwfTagType.Protect;
}

export namespace Protect {
  export interface Json {
    type: "protect";
  }

  export const type: DocumentType<Protect> = new DocumentType<Protect>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.Protect})},
    },
    rename: CaseStyle.KebabCase,
  });
}
