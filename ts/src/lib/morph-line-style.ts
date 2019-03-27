import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16 } from "semantic-types";
import { $LineStyle, LineStyle } from "./line-style";
import { $MorphFillStyle, MorphFillStyle } from "./morph-fill-style";

export interface MorphLineStyle extends LineStyle {
  morphWidth: Uint16;
  fill: MorphFillStyle;
}

export const $MorphLineStyle: DocumentIoType<MorphLineStyle> = new DocumentType<MorphLineStyle>({
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
