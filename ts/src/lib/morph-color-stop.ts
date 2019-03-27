import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint8 } from "semantic-types";
import { $ColorStop, ColorStop } from "./color-stop";
import { $StraightSRgba8, StraightSRgba8 } from "./straight-s-rgba8";

export interface MorphColorStop extends ColorStop {
  morphRatio: Uint8;
  morphColor: StraightSRgba8;
}

export const $MorphColorStop: DocumentIoType<MorphColorStop> = new DocumentType<MorphColorStop>({
  properties: {
    ratio: $ColorStop.properties.ratio,
    morphRatio: {type: $Uint8},
    color: $ColorStop.properties.color,
    morphColor: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
