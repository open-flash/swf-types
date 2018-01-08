import { BooleanType, CaseStyle, DocumentType, IntegerType } from "kryo";
import { Uint16 } from "semantic-types";
import { CapStyle } from "./cap-style";
import { JoinStyle } from "./join-style";
import { MorphFillStyle } from "./morph-fill-style";

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

export namespace MorphLineStyle {
  export interface Json {
    start_width: number;
    end_width: number;
    start_cap: CapStyle.Json;
    end_cap: CapStyle.Json;
    join: JoinStyle.Json;
    no_h_scale: boolean;
    no_v_scale: boolean;
    no_close: boolean;
    pixel_hinting: boolean;
    fill: MorphFillStyle.Json;
  }

  export const type: DocumentType<MorphLineStyle> = new DocumentType<MorphLineStyle>({
    properties: {
      startWidth: {type: new IntegerType()},
      endWidth: {type: new IntegerType()},
      startCap: {type: CapStyle.type},
      endCap: {type: CapStyle.type},
      join: {type: JoinStyle.type},
      noHScale: {type: new BooleanType()},
      noVScale: {type: new BooleanType()},
      noClose: {type: new BooleanType()},
      pixelHinting: {type: new BooleanType()},
      fill: {type: MorphFillStyle.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
