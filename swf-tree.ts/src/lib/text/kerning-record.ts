import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16, Uint16} from "semantic-types";

export interface KerningRecord {
  left: Uint16;
  right: Uint16;
  adjustment: Sint16;
}

export namespace KerningRecord {
  export interface Json {
    left: number;
    right: number;
    font_kerning_adjustment: number;
  }

  export const type: DocumentType<KerningRecord> = new DocumentType<KerningRecord>({
    properties: {
      left: {type: new Int32Type()},
      right: {type: new Int32Type()},
      adjustment: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
