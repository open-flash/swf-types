import { ArrayType, CaseStyle, DocumentType, LiteralType } from "kryo";
import { NamedId } from "../named-id";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface ExportAssets extends _Tag {
  type: TagType.ExportAssets;
  assets: NamedId[];
}

export namespace ExportAssets {
  export interface Json {
    type: "export-assets";
    assets: NamedId.Json[];
  }

  export const type: DocumentType<ExportAssets> = new DocumentType<ExportAssets>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.ExportAssets})},
      assets: {type: new ArrayType({itemType: NamedId.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
