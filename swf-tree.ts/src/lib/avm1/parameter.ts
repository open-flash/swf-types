import {CaseStyle, DocumentType, IntegerType, Ucs2StringType} from "kryo";
import {Uint8} from "semantic-types";

// TODO(demurgos): rename to RegisterParameter or make register optional (undefined if 0)
export interface Parameter {
  register: Uint8;
  name: string;
}

export namespace Parameter {
  export interface Json {
    register: number;
    name: number;
  }

  export const type: DocumentType<Parameter> = new DocumentType<Parameter>({
    properties: {
      register: {type: new IntegerType()},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
