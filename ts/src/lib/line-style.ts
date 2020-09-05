import { $Boolean } from "kryo/lib/boolean.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";
import { $CapStyle, CapStyle } from "./cap-style.js";
import { $FillStyle, FillStyle } from "./fill-style.js";
import { $JoinStyle, JoinStyle } from "./join-style.js";

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
