import { CaseStyle, DocumentType, IntegerType, Ucs2StringType } from "kryo";
import { Uint16 } from "semantic-types";

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
      id: {type: new IntegerType()},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
