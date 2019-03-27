import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16 } from "semantic-types";
import { $CapStyle, CapStyle } from "./cap-style";
import { $FillStyle, FillStyle } from "./fill-style";
import { $JoinStyle, JoinStyle } from "./join-style";

export interface LineStyle {
  width: Uint16;
  startCap: CapStyle;
  endCap: CapStyle;
  join: JoinStyle;
  noHScale: boolean;
  noVScale: boolean;
  noClose: boolean;
  pixelHinting: boolean;
  fill: FillStyle;
}

export const $LineStyle: DocumentIoType<LineStyle> = new DocumentType<LineStyle>({
  properties: {
    width: {type: $Uint16},
    startCap: {type: $CapStyle},
    endCap: {type: $CapStyle},
    join: {type: $JoinStyle},
    noHScale: {type: $Boolean},
    noVScale: {type: $Boolean},
    noClose: {type: $Boolean},
    pixelHinting: {type: $Boolean},
    fill: {type: $FillStyle},
  },
  changeCase: CaseStyle.SnakeCase,
});
