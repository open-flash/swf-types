import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";

export interface Screen2ImageBlockPrimePosition {
  column: Uint8;
  row: Uint8;
}

export namespace Screen2ImageBlockPrimePosition {
  export interface Json {
    column: number;
    row: number;
  }

  export const type: DocumentType<Screen2ImageBlockPrimePosition> = new DocumentType<Screen2ImageBlockPrimePosition>({
    properties: {
      column: {type: new Int32Type()},
      row: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
