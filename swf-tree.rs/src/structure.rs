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
pub struct SwfFile {
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
  Unknown(tags::Unknown),
  DefineSceneAndFrameLabelData(tags::DefineSceneAndFrameLabelData),
  DefineFont3(tags::DefineFont3),
  DefineShape(tags::DefineShape),
  DefineSprite(tags::DefineSprite),
  DoAction(tags::DoAction),
  ExportAssets(tags::ExportAssets),
  FileAttributes(tags::FileAttributes),
  Metadata(tags::Metadata),
  PlaceObject(tags::PlaceObject),
  SetBackgroundColor(tags::SetBackgroundColor),
  ShowFrame,
}
