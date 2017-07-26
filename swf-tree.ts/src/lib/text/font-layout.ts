import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Sint16, Uint16, Uint32} from "semantic-types";
import {LanguageCode} from "../language-code";
import {Rect} from "../rect";
import {SimpleShape} from "../shapes/simple-shape";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
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
      ascent: {type: new Int32Type()},
      descent: {type: new Int32Type()},
      leading: {type: new Int32Type()},
      advances: {type: new ArrayType({itemType: new Int32Type(), maxLength: Infinity})},
      bounds: {type: new ArrayType({itemType: Rect.type, maxLength: Infinity})},
      kerning: {type: new ArrayType({itemType: KerningRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}