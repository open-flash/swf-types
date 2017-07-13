import {ArrayType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {NamedTag} from "./named-tag";

export interface ExportAssets extends _Tag {
  type: TagType.ExportAssets;
  assets: NamedTag[];
}

export namespace ExportAssets {
  export interface Json {
    type: "export-assets";
    assets: NamedTag.Json[];
  }

  export const type: DocumentType<ExportAssets> = new DocumentType<ExportAssets>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.ExportAssets})},
      assets: {type: new ArrayType({itemType: NamedTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
