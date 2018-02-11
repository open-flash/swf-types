import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint8 } from "semantic-types";
import { $StraightSRgba8, StraightSRgba8 } from "./straight-s-rgba8";

export interface MorphColorStop {
  startRatio: Uint8;
  startColor: StraightSRgba8;
  endRatio: Uint8;
  endColor: StraightSRgba8;
}

export const $MorphColorStop: DocumentIoType<MorphColorStop> = new DocumentType<MorphColorStop>({
  properties: {
    startRatio: {type: $Uint8},
    startColor: {type: $StraightSRgba8},
    endRatio: {type: $Uint8},
    endColor: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
