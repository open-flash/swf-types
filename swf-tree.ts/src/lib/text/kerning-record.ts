import {CaseStyle, DocumentType, IntegerType} from "kryo";
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
      left: {type: new IntegerType()},
      right: {type: new IntegerType()},
      adjustment: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
