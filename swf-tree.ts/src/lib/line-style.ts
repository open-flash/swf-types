import {BooleanType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {CapStyle} from "./cap-style";
import {FillStyle} from "./fill-style";
import {JoinStyle} from "./join-style";

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

export namespace LineStyle {
  export interface Json {
    width: number;
    start_cap: CapStyle.Json;
    end_cap: CapStyle.Json;
    join: JoinStyle.Json;
    no_h_scale: boolean;
    no_v_scale: boolean;
    no_close: boolean;
    pixel_hinting: boolean;
    fill: FillStyle.Json;
  }

  export const type: DocumentType<LineStyle> = new DocumentType<LineStyle>({
    properties: {
      width: {type: new Int32Type()},
      startCap: {type: CapStyle.type},
      endCap: {type: CapStyle.type},
      join: {type: JoinStyle.type},
      noHScale: {type: new BooleanType()},
      noVScale: {type: new BooleanType()},
      noClose: {type: new BooleanType()},
      pixelHinting: {type: new BooleanType()},
      fill: {type: FillStyle.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
