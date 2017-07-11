import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {AlignmentZoneRecord} from "./alignment-zone-record";
import {CsmTableHint} from "./csm-table-hint";
import {Uint16} from "semantic-types";

export interface DefineFontAlignZone extends SwfTagBase {
  type: SwfTagType.DefineFontAlignZones;
  fontId: Uint16;
  csmTableHint: CsmTableHint;
  zoneTable: AlignmentZoneRecord[];
}

export namespace DefineFont3 {
  export interface Json {
    type: "define-font-align-zones";
    "font-id": number;
    "csm-table-hint": CsmTableHint.Json;
    "zone-table": AlignmentZoneRecord.Json[];
  }

  export const type: DocumentType<DefineFontAlignZone> = new DocumentType<DefineFontAlignZone>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineFontAlignZones})},
      fontId: {type: new Int32Type()},
      csmTableHint: {type: CsmTableHint.type},
      zoneTable: {type: new ArrayType({itemType: AlignmentZoneRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
