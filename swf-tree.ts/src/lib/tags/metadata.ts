import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface Metadata extends _Tag {
  type: TagType.Metadata;
  metadata: string;
}

export namespace Metadata {
  export interface Json {
    type: "metadata";
    metadata: string;
  }

  export const type: DocumentType<Metadata> = new DocumentType<Metadata>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.Metadata})},
      metadata: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
