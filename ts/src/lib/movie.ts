import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Header, Header } from "./header";
import { $Tag, Tag } from "./tag";

export interface Movie {
  header: Header;
  tags: Tag[];
}

export const $Movie: DocumentIoType<Movie> = new DocumentType<Movie>({
  properties: {
    header: {type: $Header},
    tags: {type: new ArrayType({itemType: $Tag, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
