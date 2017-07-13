import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {Header} from "./header";
import {Tag} from "./tag";

export interface SwfFile {
  header: Header;
  tags: Tag[];
}

export namespace SwfFile {
  export interface Json {
    header: Header.Json;
    tags: Tag.Json[];
  }

  export const type: DocumentType<SwfFile> = new DocumentType<SwfFile>({
    properties: {
      header: {type: Header.type},
      tags: {type: new ArrayType({itemType: Tag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
