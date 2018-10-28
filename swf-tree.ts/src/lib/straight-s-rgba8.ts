import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { StraightSRgba as StraightSRgba, Uint8 } from "semantic-types";
import { $SRgb8 } from "./s-rgb8";

export interface StraightSRgba8 extends StraightSRgba<Uint8> {
}

export const $StraightSRgba8: DocumentIoType<StraightSRgba8> = new DocumentType<StraightSRgba8>({
  properties: {
    r: $SRgb8.properties.r,
    g: $SRgb8.properties.g,
    b: $SRgb8.properties.b,
    a: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
