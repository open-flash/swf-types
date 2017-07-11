import {CaseStyle, DocumentType, Int32Type, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";

export interface NamedTag {
  tag: Uint16;
  name: string;
}

export namespace NamedTag {
  export interface Json {
    tag: number;
    name: string;
  }

  export const type: DocumentType<NamedTag> = new DocumentType<NamedTag>({
    properties: {
      tag: {type: new Int32Type()},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
