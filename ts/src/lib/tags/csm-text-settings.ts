import { CaseStyle } from "kryo";
import { Float64Type } from "kryo/float64";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Float32, Uint16 } from "semantic-types";

import { $GridFitting, GridFitting } from "../text/grid-fitting.js";
import { $TextRenderer, TextRenderer } from "../text/text-renderer.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface CsmTextSettings extends _Tag {
  readonly type: TagType.CsmTextSettings;
  readonly textId: Uint16;
  readonly renderer: TextRenderer;
  readonly fitting: GridFitting;
  readonly thickness: Float32;
  readonly sharpness: Float32;
}

export const $CsmTextSettings: RecordIoType<CsmTextSettings> = new RecordType<CsmTextSettings>({
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
