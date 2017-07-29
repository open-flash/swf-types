import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {CsmTableHint} from "../text/csm-table-hint";
import {FontAlignmentZone} from "../text/font-alignment-zone";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface DefineFontAlignZones extends _Tag {
  type: TagType.DefineFontAlignZones;
  fontId: Uint16;
  csmTableHint: CsmTableHint;
  zones: FontAlignmentZone[];
}

export namespace DefineFontAlignZones {
  export interface Json {
    type: "define-font-align-zones";
    font_id: number;
    csm_table_hint: CsmTableHint.Json;
    zones: FontAlignmentZone.Json[];
  }

  export const type: DocumentType<DefineFontAlignZones> = new DocumentType<DefineFontAlignZones>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFontAlignZones})},
      fontId: {type: new Int32Type()},
      csmTableHint: {type: CsmTableHint.type},
      zones: {type: new ArrayType({itemType: FontAlignmentZone.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
