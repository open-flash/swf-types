import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16, Uint16} from "semantic-types";

export interface KerningRecord {
  fontKerningCode1: Uint16;
  fontKerningCode2: Uint16;
  fontKerningAdjustment: Sint16;
}

export namespace KerningRecord {
  export interface Json {
    font_kerning_code1: number;
    font_kerning_code2: number;
    font_kerning_adjustment: number;
  }

  export const type: DocumentType<KerningRecord> = new DocumentType<KerningRecord>({
    properties: {
      fontKerningCode1: {type: new Int32Type()},
      fontKerningCode2: {type: new Int32Type()},
      fontKerningAdjustment: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
