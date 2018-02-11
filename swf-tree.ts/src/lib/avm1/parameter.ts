import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint8 } from "semantic-types";

// TODO(demurgos): rename to RegisterParameter or make register optional (undefined if 0)
export interface Parameter {
  register: Uint8;
  name: string;
}

export const $Parameter: DocumentIoType<Parameter> = new DocumentType<Parameter>({
  properties: {
    register: {type: $Uint8},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
