import {TaggedUnionType} from "kryo";
import * as tags from "../tags/index";

export type Tag =
  tags.DefineBinaryData
  | tags.DefineBitmap
  | tags.DefineJpeg
  | tags.DefinePartialJpeg
  | tags.DefineSceneAndFrameLabelData
  | tags.DefineShape
  | tags.DoAction
  | tags.FileAttributes
  | tags.JpegTables
  | tags.PlaceObject
  | tags.SetBackgroundColor
  | tags.ShowFrame
  | tags.Telemetry
  | tags.Unknown;

export namespace Tag {
  export type Json =
    tags.DefineBinaryData.Json
    | tags.DefineBitmap.Json
    | tags.DefineJpeg.Json
    | tags.DefinePartialJpeg.Json
    | tags.DefineSceneAndFrameLabelData.Json
    | tags.DefineShape.Json
    | tags.DoAction.Json
    | tags.FileAttributes.Json
    | tags.JpegTables.Json
    | tags.PlaceObject.Json
    | tags.SetBackgroundColor.Json
    | tags.ShowFrame.Json
    | tags.Telemetry.Json
    | tags.Unknown.Json;

  export const type: TaggedUnionType<Tag> = new TaggedUnionType<Tag>({
    variants: [
      tags.DefineBinaryData.type,
      tags.DefineBitmap.type,
      tags.DefineJpeg.type,
      tags.DefinePartialJpeg.type,
      tags.DefineSceneAndFrameLabelData.type,
      tags.DefineShape.type,
      tags.DoAction.type,
      tags.FileAttributes.type,
      tags.JpegTables.type,
      tags.PlaceObject.type,
      tags.SetBackgroundColor.type,
      tags.ShowFrame.type,
      tags.Telemetry.type,
      tags.Unknown.type,
    ],
    tag: "type",
  });
}
