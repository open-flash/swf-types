import {ArrayType, CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {NamedId} from "../named-id";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface ImportAssets extends _Tag {
  type: TagType.ImportAssets;
  url: string;
  assets: NamedId[];
}

export namespace ImportAssets {
  export interface Json {
    type: "import-assets";
    url: string;
    assets: NamedId.Json[];
  }

  export const type: DocumentType<ImportAssets> = new DocumentType<ImportAssets>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.ImportAssets})},
      url: {type: new Ucs2StringType({maxLength: Infinity})},
      assets: {type: new ArrayType({itemType: NamedId.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
