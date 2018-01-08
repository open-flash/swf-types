import { CaseStyle, DocumentType, LiteralType, Ucs2StringType } from "kryo";
import { _Tag } from "../tags/_tag";
import { TagType } from "../tags/_type";
import { SoundInfo } from "./sound-info";

export interface StartSound2 extends _Tag {
  type: TagType.StartSound2;
  soundClassName: string;
  soundInfo: SoundInfo;
}

export namespace StartSound2 {
  export interface Json {
    type: "start-sound";
    sound_class_name: string;
    sound_info: SoundInfo.Json;
  }

  export const type: DocumentType<StartSound2> = new DocumentType<StartSound2>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.StartSound})},
      soundClassName: {type: new Ucs2StringType({maxLength: Infinity})},
      soundInfo: {type: SoundInfo.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
