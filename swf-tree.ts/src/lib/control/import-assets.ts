import {ArrayType, CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {NamedTag} from "./named-tag";

export interface ImportAssets extends SwfTagBase {
  type: SwfTagType.ImportAssets;
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
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.ImportAssets})},
      url: {type: new Ucs2StringType({maxLength: Infinity})},
      assets: {type: new ArrayType({itemType: NamedTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
