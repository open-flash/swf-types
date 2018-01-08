import { CaseStyle, DocumentType, Float64Type, IntegerType, LiteralType } from "kryo";
import { Float32, Uint16 } from "semantic-types";
import { GridFitting } from "../text/grid-fitting";
import { TextRenderer } from "../text/text-renderer";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface CsmTextSettings extends _Tag {
  type: TagType.CsmTextSettings;
  textId: Uint16;
  renderer: TextRenderer;
  fitting: GridFitting;
  thickness: Float32;
  sharpness: Float32;
}

export namespace CsmTextSettings {
  export interface Json {
    type: "csm-text-settings";
    text_id: number;
    renderer: TextRenderer.Json;
    fitting: GridFitting.Json;
    thickness: number;
    sharpness: number;
  }

  export const type: DocumentType<CsmTextSettings> = new DocumentType<CsmTextSettings>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.CsmTextSettings})},
      textId: {type: new IntegerType()},
      renderer: {type: TextRenderer.type},
      fitting: {type: GridFitting.type},
      thickness: {type: new Float64Type()},
      sharpness: {type: new Float64Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
