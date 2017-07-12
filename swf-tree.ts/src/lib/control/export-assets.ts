import {ArrayType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {NamedTag} from "./named-tag";

export interface ExportAssets extends SwfTagBase {
  type: SwfTagType.ExportAssets;
  assets: NamedTag[];
}

export namespace ExportAssets {
  export interface Json {
    type: "export-assets";
    assets: NamedTag.Json[];
  }

  export const type: DocumentType<ExportAssets> = new DocumentType<ExportAssets>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.ExportAssets})},
      assets: {type: new ArrayType({itemType: NamedTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
