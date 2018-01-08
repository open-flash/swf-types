import { CaseStyle, DocumentType, IntegerType } from "kryo";
import { Uint8 } from "semantic-types";

export interface Screen2ImageBlockDiffPosition {
  rowStart: Uint8;
  height: Uint8;
}

export namespace Screen2ImageBlockDiffPosition {
  export interface Json {
    row_start: number;
    height: number;
  }

  export const type: DocumentType<Screen2ImageBlockDiffPosition> = new DocumentType<Screen2ImageBlockDiffPosition>({
    properties: {
      rowStart: {type: new IntegerType()},
      height: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
