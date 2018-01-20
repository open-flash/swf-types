import { CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { TagType } from "../tags/_type";
import { SoundInfo } from "./sound-info";

export interface StartSound extends _Tag {
  type: TagType.StartSound;
  soundId: Uint16;
  soundInfo: SoundInfo;
}

export namespace StartSound {
  export interface Json {
    type: "start-sound";
    sound_id: number;
    sound_info: SoundInfo.Json;
  }

  export const type: DocumentType<StartSound> = new DocumentType<StartSound>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.StartSound})},
      soundId: {type: new IntegerType()},
      soundInfo: {type: SoundInfo.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
