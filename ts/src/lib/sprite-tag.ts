import { TaggedUnionType } from "kryo/tagged-union";

import * as tags from "./tags/index.js";

export type SpriteTag =
  tags.DoAbc
  | tags.DoAction
  | tags.DoInitAction
  | tags.FrameLabel
  | tags.PlaceObject
  | tags.Raw
  | tags.RemoveObject
  | tags.ShowFrame
  | tags.SoundStreamHead
  | tags.SoundStreamBlock
  | tags.StartSound
  | tags.StartSound2;

export const $SpriteTag: TaggedUnionType<SpriteTag> = new TaggedUnionType<SpriteTag>(() => ({
  variants: [
    tags.$DoAction,
    tags.$DoAbc,
    tags.$DoInitAction,
    tags.$FrameLabel,
    tags.$PlaceObject,
    tags.$Raw,
    tags.$RemoveObject,
    tags.$ShowFrame,
    tags.$SoundStreamBlock,
    tags.$SoundStreamHead,
    tags.$StartSound,
    tags.$StartSound2,
  ],
  tag: "type",
}));
