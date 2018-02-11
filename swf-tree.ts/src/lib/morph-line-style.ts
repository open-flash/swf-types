import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16 } from "semantic-types";
import { $CapStyle, CapStyle } from "./cap-style";
import { $JoinStyle, JoinStyle } from "./join-style";
import { $MorphFillStyle, MorphFillStyle } from "./morph-fill-style";

export interface MorphLineStyle {
  startWidth: Uint16;
  endWidth: Uint16;
  startCap: CapStyle;
  endCap: CapStyle;
  join: JoinStyle;
  noHScale: boolean;
  noVScale: boolean;
  noClose: boolean;
  pixelHinting: boolean;
  fill: MorphFillStyle;
}

export const $MorphLineStyle: DocumentIoType<MorphLineStyle> = new DocumentType<MorphLineStyle>({
  properties: {
    startWidth: {type: $Uint16},
    endWidth: {type: $Uint16},
    startCap: {type: $CapStyle},
    endCap: {type: $CapStyle},
    join: {type: $JoinStyle},
    noHScale: {type: $Boolean},
    noVScale: {type: $Boolean},
    noClose: {type: $Boolean},
    pixelHinting: {type: $Boolean},
    fill: {type: $MorphFillStyle},
  },
  changeCase: CaseStyle.SnakeCase,
});
