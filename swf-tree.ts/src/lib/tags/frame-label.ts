import { BooleanType, CaseStyle, DocumentType, LiteralType, Ucs2StringType } from "kryo";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface FrameLabel extends _Tag {
  type: TagType.FrameLabel;
  name: string;
  anchorFlag?: boolean;
}

export namespace FrameLabel {
  export interface Json {
    type: "frame-label";
    name: string;
    anchor_flag?: boolean;
  }

  export const type: DocumentType<FrameLabel> = new DocumentType<FrameLabel>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.FrameLabel})},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
      anchorFlag: {type: new BooleanType(), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
