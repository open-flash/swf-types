import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $CsmTableHint, CsmTableHint } from "../text/csm-table-hint.mjs";
import { $FontAlignmentZone, FontAlignmentZone } from "../text/font-alignment-zone.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

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
