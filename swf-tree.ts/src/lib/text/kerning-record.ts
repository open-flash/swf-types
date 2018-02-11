import { $Sint16 } from "kryo/builtins/sint16";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16, Uint16 } from "semantic-types";

export interface KerningRecord {
  left: Uint16;
  right: Uint16;
  adjustment: Sint16;
}

export const $KerningRecord: DocumentIoType<KerningRecord> = new DocumentType<KerningRecord>({
  properties: {
    left: {type: $Uint16},
    right: {type: $Uint16},
    adjustment: {type: $Sint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
