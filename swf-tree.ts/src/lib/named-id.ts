import {CaseStyle, DocumentType, Int32Type, Ucs2StringType} from "kryo";
import {Uint16} from "semantic-types";

export interface NamedId {
  id: Uint16;
  name: string;
}

export namespace NamedId {
  export interface Json {
    id: number;
    name: string;
  }

  export const type: DocumentType<NamedId> = new DocumentType<NamedId>({
    properties: {
      id: {type: new Int32Type()},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
