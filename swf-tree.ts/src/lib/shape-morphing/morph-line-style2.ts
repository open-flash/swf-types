import {BooleanType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {CapStyle} from "../shapes/cap-style";
import {FillStyle} from "../shapes/fill-style";
import {JoinStyle} from "../shapes/join-style";
import {StraightSRgba8} from "../straight-s-rgba8";

export interface MorphLineStyle2 {
  startWidth: Uint16;
  endWidth: Uint16;
  startCapStyle: CapStyle;
  joinStyle: JoinStyle;
  noHScale: boolean;
  noVScale: boolean;
  pixelHinting: boolean;
  noClose: boolean;
  endCapStyle: CapStyle;
  miterLimitFactor?: Uint16;
  startColor?: StraightSRgba8;
  endColor?: StraightSRgba8;
  fillType?: FillStyle;
}

export namespace MorphLineStyle2 {
  export interface Json {
    start_width: number;
    end_width: number;
    start_cap_style: CapStyle.Json;
    join_style: JoinStyle.Json;
    no_h_scale: boolean;
    no_v_scale: boolean;
    pixel_hinting: boolean;
    no_close: boolean;
    end_cap_style: CapStyle.Json;
    miter_limit_factor?: number;
    start_color?: StraightSRgba8.Json;
    end_color?: StraightSRgba8.Json;
    fill_type?: FillStyle.Json;
  }

  export const type: DocumentType<MorphLineStyle2> = new DocumentType<MorphLineStyle2>({
    properties: {
      startWidth: {type: new Int32Type()},
      endWidth: {type: new Int32Type()},
      startCapStyle: {type: CapStyle.type},
      joinStyle: {type: JoinStyle.type},
      noHScale: {type: new BooleanType()},
      noVScale: {type: new BooleanType()},
      pixelHinting: {type: new BooleanType()},
      noClose: {type: new BooleanType()},
      endCapStyle: {type: CapStyle.type},
      miterLimitFactor: {type: new Int32Type(), optional: true},
      startColor: {type: StraightSRgba8.type, optional: true},
      endColor: {type: StraightSRgba8.type, optional: true},
      fillType: {type: FillStyle.type, optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
