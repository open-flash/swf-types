use header::Header;
use tags;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct Rect {
  pub x_min: i16,
  pub x_max: i16,
  pub y_min: i16,
  pub y_max: i16,
}

// Color point in the sRGB color space with 8-bit color depth
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct SRgb {
  pub r: u8,
  pub g: u8,
  pub b: u8,
}

// Color point with straight alpha in the sRGB color space with 8-bit color depth
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct StraightSRgba {
  pub r: u8,
  pub g: u8,
  pub b: u8,
  pub a: u8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum Tag {
  Unknown(tags::Unknown),
  End,
  ShowFrame,
  PlaceObject(tags::PlaceObject),
  SetBackgroundColor(tags::SetBackgroundColor),
  DoAction(tags::DoAction),
  FileAttributes(tags::FileAttributes),
  DefineSceneAndFrameLabelData(tags::DefineSceneAndFrameLabelData),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct SwfFile {
  pub header: Header,
  pub tags: Vec<Tag>,
}
