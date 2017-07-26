import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {Tag} from "../tag";
import {Header} from "./header";

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
