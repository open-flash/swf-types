import {ArrayType, CaseStyle, DocumentType, IntegerType} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {Rect} from "../rect";
import {KerningRecord} from "./kerning-record";

export interface FontLayout {
  ascent: Uint16;
  descent: Uint16;
  leading: Sint16;
  advances: Sint16[];
  bounds: Rect[];
  kerning: KerningRecord[];
}

export namespace FontLayout {
  export interface Json {
    ascent: number;
    descent: number;
    leading: number;
    advances: number[];
    bounds: Rect.Json[];
    kerning_table: KerningRecord.Json[];
  }

  export const type: DocumentType<FontLayout> = new DocumentType<FontLayout>({
    properties: {
      ascent: {type: new IntegerType()},
      descent: {type: new IntegerType()},
      leading: {type: new IntegerType()},
      advances: {type: new ArrayType({itemType: new IntegerType(), maxLength: Infinity})},
      bounds: {type: new ArrayType({itemType: Rect.type, maxLength: Infinity})},
      kerning: {type: new ArrayType({itemType: KerningRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
