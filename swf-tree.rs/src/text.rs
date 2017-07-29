use ordered_float::OrderedFloat;
use basic_types::{Rect, StraightSRgba8};

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum CsmTableHint {
  Thin,
  Medium,
  Thick,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct FontAlignmentZone {
  pub u8: Vec<FontAlignmentZoneData>,
  pub has_x: bool,
  pub has_y: bool,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct FontAlignmentZoneData {
  pub origin: OrderedFloat<f32>,
  pub size: OrderedFloat<f32>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct FontLayout {
  pub ascent: u16,
  pub descent: u16,
  pub leading: u16,
  pub advances: Vec<u16>,
  pub bounds: Vec<Rect>,
  pub kerning: Vec<KerningRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GlyphEntry {
  pub index: usize,
  pub advance: i32,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum GridFitting {
  None,
  Pixel,
  SubPixel,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct KerningRecord {
  pub left: u16,
  pub right: u16,
  pub adjustment: i16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum TextAlignment {
  Left,
  Right,
  Center,
  Justify,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct TextRecord {
  pub font_id: Option<u16>,
  pub color: Option<StraightSRgba8>,
  pub offset_x: i16,
  pub offset_y: i16,
  pub font_size: Option<u16>,
  pub entries: Vec<GlyphEntry>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum TextRenderer {
  Normal,
  Advanced,
}
