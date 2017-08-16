import {TaggedUnionType} from "kryo";
import * as tags from "./tags/index";

export type Tag =
  tags.CsmTextSettings
  | tags.DefineBinaryData
  | tags.DefineBitmap
  | tags.DefineCffFont
  | tags.DefineDynamicText
  | tags.DefineFont
  | tags.DefineFontAlignZones
  | tags.DefineFontInfo
  | tags.DefineFontName
  | tags.DefineJpeg
  | tags.DefinePartialFont
  | tags.DefinePartialJpeg
  | tags.DefineSceneAndFrameLabelData
  | tags.DefineShape
  | tags.DefineSprite
  | tags.DefineText
  | tags.DoAction
  | tags.DoInitAction
  | tags.EnableDebugger
  | tags.ExportAssets
  | tags.FileAttributes
  | tags.ImportAssets
  | tags.JpegTables
  | tags.Metadata
  | tags.PlaceObject
  | tags.RemoveObject
  | tags.SetBackgroundColor
  | tags.ShowFrame
  | tags.Telemetry
  | tags.Unknown;

export namespace Tag {
  export type Json =
    tags.CsmTextSettings.Json
    | tags.DefineBinaryData.Json
    | tags.DefineBitmap.Json
    | tags.DefineCffFont.Json
    | tags.DefineDynamicText.Json
    | tags.DefineFont.Json
    | tags.DefineFontAlignZones.Json
    | tags.DefineFontInfo.Json
    | tags.DefineFontName.Json
    | tags.DefineJpeg.Json
    | tags.DefinePartialFont.Json
    | tags.DefinePartialJpeg.Json
    | tags.DefineSceneAndFrameLabelData.Json
    | tags.DefineShape.Json
    | tags.DefineSprite.Json
    | tags.DefineText.Json
    | tags.DoAction.Json
    | tags.DoInitAction.Json
    | tags.EnableDebugger.Json
    | tags.ExportAssets.Json
    | tags.FileAttributes.Json
    | tags.ImportAssets.Json
    | tags.JpegTables.Json
    | tags.Metadata.Json
    | tags.PlaceObject.Json
    | tags.RemoveObject.Json
    | tags.SetBackgroundColor.Json
    | tags.ShowFrame.Json
    | tags.Telemetry.Json
    | tags.Unknown.Json;

  export const type: TaggedUnionType<Tag> = new TaggedUnionType<Tag>(() => ({
    variants: [
      tags.CsmTextSettings.type,
      tags.DefineBinaryData.type,
      tags.DefineBitmap.type,
      tags.DefineCffFont.type,
      tags.DefineDynamicText.type,
      tags.DefineFont.type,
      tags.DefineFontAlignZones.type,
      tags.DefineFontInfo.type,
      tags.DefineFontName.type,
      tags.DefineJpeg.type,
      tags.DefinePartialFont.type,
      tags.DefinePartialJpeg.type,
      tags.DefineSceneAndFrameLabelData.type,
      tags.DefineShape.type,
      tags.DefineSprite.type,
      tags.DefineText.type,
      tags.DoAction.type,
      tags.DoInitAction.type,
      tags.EnableDebugger.type,
      tags.ExportAssets.type,
      tags.FileAttributes.type,
      tags.ImportAssets.type,
      tags.JpegTables.type,
      tags.Metadata.type,
      tags.PlaceObject.type,
      tags.RemoveObject.type,
      tags.SetBackgroundColor.type,
      tags.ShowFrame.type,
      tags.Telemetry.type,
      tags.Unknown.type,
    ],
    tag: "type",
  }));
}
