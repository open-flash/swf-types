import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";

export interface Screen2ImageBlockDiffPosition {
  rowStart: Uint8;
  height: Uint8;
}

export namespace Screen2ImageBlockDiffPosition {
  export interface Json {
    "row-start": number;
    height: number;
  }

  export const type: DocumentType<Screen2ImageBlockDiffPosition> = new DocumentType<Screen2ImageBlockDiffPosition>({
    properties: {
      rowStart: {type: new Int32Type()},
      height: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
