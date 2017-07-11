import {BooleanType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {Rgba} from "../basic-types/rgba";
import {CapStyle} from "../shapes/cap-style";
import {FillStyle} from "../shapes/fill-style";
import {JoinStyle} from "../shapes/join-style";

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
  startColor?: Rgba;
  endColor?: Rgba;
  fillType?: FillStyle;
}

export namespace MorphLineStyle2 {
  export interface Json {
    "start-width": number;
    "end-width": number;
    "start-cap-style": CapStyle.Json;
    "join-style": JoinStyle.Json;
    "no-h-scale": boolean;
    "no-v-scale": boolean;
    "pixel-hinting": boolean;
    "no-close": boolean;
    "end-cap-style": CapStyle.Json;
    "miter-limit-factor"?: number;
    "start-color"?: Rgba.Json;
    "end-color"?: Rgba.Json;
    "fill-type"?: FillStyle.Json;
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
      startColor: {type: Rgba.type, optional: true},
      endColor: {type: Rgba.type, optional: true},
      fillType: {type: FillStyle.type, optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
