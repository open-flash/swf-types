import {BooleanType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {Rgba} from "../basic-types/rgba";
import {CapStyle} from "./cap-style";
import {FillStyle} from "./fill-style";
import {JoinStyle} from "./join-style";

export interface LineStyle2 {
  width: Uint16;
  startCapStyle: CapStyle;
  joinStyle: JoinStyle;
  noHScale: boolean;
  noVScale: boolean;
  pixelHinting: boolean;
  noClose: boolean;
  endCapStyle: CapStyle;
  miterLimitFactor?: Uint16;
  color?: Rgba;
  fillType?: FillStyle;
}

export namespace LineStyle2 {
  export interface Json {
    width: number;
    "start-cap-style": CapStyle.Json;
    "join-style": JoinStyle.Json;
    "no-h-scale": boolean;
    "no-v-scale": boolean;
    "pixel-hinting": boolean;
    "no-close": boolean;
    "end-cap-style": CapStyle.Json;
    "miter-limit-factor"?: number;
    color?: Rgba.Json;
    "fill-type"?: FillStyle.Json;
  }

  export const type: DocumentType<LineStyle2> = new DocumentType<LineStyle2>({
    properties: {
      width: {type: new Int32Type()},
      startCapStyle: {type: CapStyle.type},
      joinStyle: {type: JoinStyle.type},
      noHScale: {type: new BooleanType()},
      noVScale: {type: new BooleanType()},
      pixelHinting: {type: new BooleanType()},
      noClose: {type: new BooleanType()},
      endCapStyle: {type: CapStyle.type},
      miterLimitFactor: {type: new Int32Type(), optional: true},
      color: {type: Rgba.type, optional: true},
      fillType: {type: FillStyle.type, optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
