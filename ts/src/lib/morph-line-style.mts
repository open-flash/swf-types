import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $LineStyle, LineStyle } from "./line-style.mjs";
import { $MorphFillStyle, MorphFillStyle } from "./morph-fill-style.mjs";

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
