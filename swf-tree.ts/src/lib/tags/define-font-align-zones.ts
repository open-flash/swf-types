import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $CsmTableHint, CsmTableHint } from "../text/csm-table-hint";
import { $FontAlignmentZone, FontAlignmentZone } from "../text/font-alignment-zone";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineFontAlignZones extends _Tag {
  type: TagType.DefineFontAlignZones;
  fontId: Uint16;
  csmTableHint: CsmTableHint;
  zones: FontAlignmentZone[];
}

export const $DefineFontAlignZones: DocumentIoType<DefineFontAlignZones> = new DocumentType<DefineFontAlignZones>({
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
