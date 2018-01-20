import { TaggedUnionType } from "kryo";
import * as tags from "./tags/index";

export type SpriteTag =
  tags.DoAction
  | tags.DoInitAction
  | tags.FrameLabel
  | tags.PlaceObject
  | tags.RemoveObject
  | tags.ShowFrame
  | tags.SoundStreamHead
  | tags.SoundStreamBlock
  | tags.Unknown;

export namespace SpriteTag {
  export type Json =
    tags.DoAction.Json
    | tags.DoInitAction.Json
    | tags.FrameLabel.Json
    | tags.PlaceObject.Json
    | tags.RemoveObject.Json
    | tags.ShowFrame.Json
    | tags.SoundStreamBlock.Json
    | tags.SoundStreamHead.Json
    | tags.Unknown.Json;

  export const type: TaggedUnionType<SpriteTag> = new TaggedUnionType<SpriteTag>(() => ({
    variants: [
      tags.DoAction.type,
      tags.DoInitAction.type,
      tags.FrameLabel.type,
      tags.PlaceObject.type,
      tags.RemoveObject.type,
      tags.ShowFrame.type,
      tags.SoundStreamBlock.type,
      tags.SoundStreamHead.type,
      tags.Unknown.type,
    ],
    tag: "type",
  }));
}
