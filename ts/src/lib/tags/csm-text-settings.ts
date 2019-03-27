import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Float64Type } from "kryo/types/float64";
import { LiteralType } from "kryo/types/literal";
import { Float32, Uint16 } from "semantic-types";
import { $GridFitting, GridFitting } from "../text/grid-fitting";
import { $TextRenderer, TextRenderer } from "../text/text-renderer";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface CsmTextSettings extends _Tag {
  readonly type: TagType.CsmTextSettings;
  readonly textId: Uint16;
  readonly renderer: TextRenderer;
  readonly fitting: GridFitting;
  readonly thickness: Float32;
  readonly sharpness: Float32;
}

export const $CsmTextSettings: DocumentIoType<CsmTextSettings> = new DocumentType<CsmTextSettings>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.CsmTextSettings as TagType.CsmTextSettings})},
    textId: {type: $Uint16},
    renderer: {type: $TextRenderer},
    fitting: {type: $GridFitting},
    thickness: {type: new Float64Type()},
    sharpness: {type: new Float64Type()},
  },
  changeCase: CaseStyle.SnakeCase,
});
