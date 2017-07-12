import {BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Float32, Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {GridFitting} from "./grid-fitting";

export interface CsmTextSettings extends SwfTagBase {
  type: SwfTagType.CsmTextSettings;
  fontId: Uint16;
  useAdvancedRenderer: boolean;
  gridFit: GridFitting;
  thickness: Float32;
  sharpness: Float32;
}

export namespace DefineFont4 {
  export interface Json {
    type: "define-csm-text-settings";
    font_id: number;
    use_advanced_renderer: boolean;
    grid_fit: GridFitting.Json;
    thickness: number;
    sharpness: number;
  }

  export const type: DocumentType<CsmTextSettings> = new DocumentType<CsmTextSettings>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.CsmTextSettings})},
      fontId: {type: new Int32Type()},
      useAdvancedRenderer: {type: new BooleanType()},
      gridFit: {type: GridFitting.type},
      thickness: {type: new Float64Type()},
      sharpness: {type: new Float64Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
