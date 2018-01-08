import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { _Tag } from "../tags/_tag";
import { TagType } from "../tags/_type";

export interface Protect extends _Tag {
  type: TagType.Protect;
}

export namespace Protect {
  export interface Json {
    type: "protect";
  }

  export const type: DocumentType<Protect> = new DocumentType<Protect>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.Protect})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
