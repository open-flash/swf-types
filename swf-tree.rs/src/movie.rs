use basic_types::Rect;
use fixed_point::Ufixed8P8;
use tags;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum CompressionMethod {
  None,
  Deflate,
  Lzma,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Header {
  /// The compression method used for the body of this SWF file
  pub compression_method: CompressionMethod,
  /// SWF version
  pub swf_version: u8,
  // Uncompressed SWF File length (including the header)
  pub uncompressed_file_length: usize,
  // Frame size in twips
  pub frame_size: Rect,
  pub frame_rate: Ufixed8P8,
  pub frame_count: u16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Movie {
  pub header: Header,
  pub tags: Vec<Tag>,
}

/// The signature is the part of the header that is not compressed
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct SwfSignature {
  /// The compression method used for the body of this SWF file
  pub compression_method: CompressionMethod,
  /// SWF version
  pub swf_version: u8,
  // Uncompressed SWF File length (including the header)
  pub uncompressed_file_length: usize,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum Tag {
  CsmTextSettings(tags::CsmTextSettings),
  DefineBinaryData(tags::DefineBinaryData),
  DefineBitmap(tags::DefineBitmap),
  DefineCffFont(tags::DefineCffFont),
  DefineDynamicText(tags::DefineDynamicText),
  DefineFont(tags::DefineFont),
  DefineFontAlignZones(tags::DefineFontAlignZones),
  DefineFontInfo(tags::DefineFontInfo),
  DefineFontName(tags::DefineFontName),
  DefineJpeg(tags::DefineJpeg),
  DefinePartialFont(tags::DefinePartialFont),
  DefinePartialJpeg(tags::DefinePartialJpeg),
  DefineSceneAndFrameLabelData(tags::DefineSceneAndFrameLabelData),
  DefineShape(tags::DefineShape),
  DefineSprite(tags::DefineSprite),
  DefineText(tags::DefineText),
  DoAction(tags::DoAction),
  DoInitAction(tags::DoInitAction),
  EnableDebugger(tags::EnableDebugger),
  ExportAssets(tags::ExportAssets),
  FileAttributes(tags::FileAttributes),
  FrameLabel(tags::FrameLabel),
  ImportAssets(tags::ImportAssets),
  JpegTables(tags::JpegTables),
  Metadata(tags::Metadata),
  PlaceObject(tags::PlaceObject),
  RemoveObject(tags::RemoveObject),
  SetBackgroundColor(tags::SetBackgroundColor),
  ShowFrame,
  Unknown(tags::Unknown),
}
