import { $Sint16 } from "kryo/builtins/sint16";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16, Uint16 } from "semantic-types";
import { $Rect, Rect } from "../rect";
import { $KerningRecord, KerningRecord } from "./kerning-record";

export interface FontLayout {
  ascent: Uint16;
  descent: Uint16;
  leading: Sint16;
  advances: Sint16[];
  bounds: Rect[];
  kerning: KerningRecord[];
}

export const $FontLayout: DocumentIoType<FontLayout> = new DocumentType<FontLayout>({
  properties: {
    ascent: {type: $Uint16},
    descent: {type: $Uint16},
    leading: {type: $Sint16},
    advances: {type: new ArrayType({itemType: $Sint16, maxLength: Infinity})},
    bounds: {type: new ArrayType({itemType: $Rect, maxLength: Infinity})},
    kerning: {type: new ArrayType({itemType: $KerningRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
