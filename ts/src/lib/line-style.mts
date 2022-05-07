import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $CapStyle, CapStyle } from "./cap-style.mjs";
import { $FillStyle, FillStyle } from "./fill-style.mjs";
import { $JoinStyle, JoinStyle } from "./join-style.mjs";

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

export const $LineStyle: RecordIoType<LineStyle> = new RecordType<LineStyle>({
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
