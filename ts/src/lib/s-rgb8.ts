import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { SRgb, Uint8 } from "semantic-types";

export interface SRgb8 extends SRgb<Uint8> {
}

export const $SRgb8: DocumentIoType<SRgb8> = new DocumentType<SRgb8>({
  properties: {
    r: {type: $Uint8},
    g: {type: $Uint8},
    b: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
