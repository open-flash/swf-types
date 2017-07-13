import {ArrayType, CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {NamedTag} from "./named-tag";

export interface ImportAssets extends _Tag {
  type: TagType.ImportAssets;
  url: string;
  assets: NamedTag[];
}

export namespace ImportAssets {
  export interface Json {
    type: "import-assets";
    url: string;
    assets: NamedTag.Json[];
  }

  export const type: DocumentType<ImportAssets> = new DocumentType<ImportAssets>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.ImportAssets})},
      url: {type: new Ucs2StringType({maxLength: Infinity})},
      assets: {type: new ArrayType({itemType: NamedTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
