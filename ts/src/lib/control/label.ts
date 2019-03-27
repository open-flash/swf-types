import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { Ucs2StringType } from "kryo/types/ucs2-string";

export interface Label {
  frame: number;
  name: string;
}

export const $Label: DocumentIoType<Label> = new DocumentType<Label>({
  properties: {
    frame: {type: new IntegerType()},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
