import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint8 } from "semantic-types";

export interface Screen2ImageBlockDiffPosition {
  rowStart: Uint8;
  height: Uint8;
}

// tslint:disable-next-line:max-line-length
export const $Screen2ImageBlockDiffPosition: DocumentIoType<Screen2ImageBlockDiffPosition> = new DocumentType<Screen2ImageBlockDiffPosition>({
  properties: {
    rowStart: {type: $Uint8},
    height: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
