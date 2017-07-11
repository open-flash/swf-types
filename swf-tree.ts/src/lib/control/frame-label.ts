import {BooleanType, CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface FrameLabel extends SwfTagBase {
  type: SwfTagType.FrameLabel;
  name: string;
  anchorFlag?: boolean;
}

export namespace FrameLabel {
  export interface Json {
    type: "frame-label";
    name: string;
    anchorFlag?: boolean;
  }

  export const type: DocumentType<FrameLabel> = new DocumentType<FrameLabel>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.FrameLabel})},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
      anchorFlag: {type: new BooleanType(), optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
