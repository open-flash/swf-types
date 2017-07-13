import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface ShowFrame extends _Tag {
  type: TagType.ShowFrame;
}

export namespace ShowFrame {
  export interface Json {
    type: "show-frame";
  }

  export const type: DocumentType<ShowFrame> = new DocumentType<ShowFrame>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.ShowFrame})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
