import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {Header} from "./header";
import {Tag} from "./tag";

export interface Movie {
  header: Header;
  tags: Tag[];
}

export namespace Movie {
  export interface Json {
    header: Header.Json;
    tags: Tag.Json[];
  }

  export const type: DocumentType<Movie> = new DocumentType<Movie>({
    properties: {
      header: {type: Header.type},
      tags: {type: new ArrayType({itemType: Tag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
