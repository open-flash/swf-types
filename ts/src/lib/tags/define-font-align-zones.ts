import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $CsmTableHint, CsmTableHint } from "../text/csm-table-hint.js";
import { $FontAlignmentZone, FontAlignmentZone } from "../text/font-alignment-zone.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineFontAlignZones extends _Tag {
  readonly type: TagType.DefineFontAlignZones;
  readonly fontId: Uint16;
  readonly csmTableHint: CsmTableHint;
  readonly zones: ReadonlyArray<FontAlignmentZone>;
}

export const $DefineFontAlignZones: RecordIoType<DefineFontAlignZones> = new RecordType<DefineFontAlignZones>({
  properties: {
    type: {
      type: new LiteralType({
        type: $TagType,
        value: TagType.DefineFontAlignZones as TagType.DefineFontAlignZones,
      }),
    },
    fontId: {type: $Uint16},
    csmTableHint: {type: $CsmTableHint},
    zones: {type: new ArrayType({itemType: $FontAlignmentZone, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
