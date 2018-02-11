import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint8 } from "semantic-types";
import { $StraightSRgba8, StraightSRgba8 } from "./straight-s-rgba8";

export interface ColorStop {
  ratio: Uint8;
  color: StraightSRgba8;
}

export const $ColorStop: DocumentIoType<ColorStop> = new DocumentType<ColorStop>({
  properties: {
    ratio: {type: $Uint8},
    color: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
