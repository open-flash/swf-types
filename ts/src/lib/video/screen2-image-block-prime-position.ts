import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint8 } from "semantic-types";

export interface Screen2ImageBlockPrimePosition {
  column: Uint8;
  row: Uint8;
}

// tslint:disable-next-line:max-line-length
export const $Screen2ImageBlockPrimePosition: DocumentIoType<Screen2ImageBlockPrimePosition> = new DocumentType<Screen2ImageBlockPrimePosition>({
  properties: {
    column: {type: $Uint8},
    row: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
