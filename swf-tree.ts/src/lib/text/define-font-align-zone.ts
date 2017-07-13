import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {AlignmentZoneRecord} from "./alignment-zone-record";
import {CsmTableHint} from "./csm-table-hint";

export interface DefineFontAlignZone extends _Tag {
  type: TagType.DefineFontAlignZones;
  fontId: Uint16;
  csmTableHint: CsmTableHint;
  zoneTable: AlignmentZoneRecord[];
}

export namespace DefineFont3 {
  export interface Json {
    type: "define-font-align-zones";
    font_id: number;
    csm_table_hint: CsmTableHint.Json;
    zone_table: AlignmentZoneRecord.Json[];
  }

  export const type: DocumentType<DefineFontAlignZone> = new DocumentType<DefineFontAlignZone>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineFontAlignZones})},
      fontId: {type: new Int32Type()},
      csmTableHint: {type: CsmTableHint.type},
      zoneTable: {type: new ArrayType({itemType: AlignmentZoneRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
