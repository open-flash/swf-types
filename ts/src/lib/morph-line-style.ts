import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { $LineStyle, LineStyle } from "./line-style.js";
import { $MorphFillStyle, MorphFillStyle } from "./morph-fill-style.js";

export interface MorphLineStyle extends LineStyle {
  morphWidth: Uint16;
  fill: MorphFillStyle;
}

export const $MorphLineStyle: RecordIoType<MorphLineStyle> = new RecordType<MorphLineStyle>({
  properties: {
    width: $LineStyle.properties.width,
    morphWidth: {type: $Uint16},
    startCap: $LineStyle.properties.startCap,
    endCap: $LineStyle.properties.endCap,
    join: $LineStyle.properties.join,
    noHScale: $LineStyle.properties.noHScale,
    noVScale: $LineStyle.properties.noVScale,
    noClose: $LineStyle.properties.noClose,
    pixelHinting: $LineStyle.properties.pixelHinting,
    fill: {type: $MorphFillStyle},
  },
  changeCase: CaseStyle.SnakeCase,
});
