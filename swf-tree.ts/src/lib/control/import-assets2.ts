import {ArrayType, CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {NamedTag} from "./named-tag";

export interface ImportAssets2 extends SwfTagBase {
  type: SwfTagType.ImportAssets2;
  url: string;
  assets: NamedTag[];
}

export namespace ImportAssets2 {
  export interface Json {
    type: "import-assets2";
    url: string;
    assets: NamedTag.Json[];
  }

  export const type: DocumentType<ImportAssets2> = new DocumentType<ImportAssets2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.ImportAssets2})},
      url: {type: new Ucs2StringType({maxLength: Infinity})},
      assets: {type: new ArrayType({itemType: NamedTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
