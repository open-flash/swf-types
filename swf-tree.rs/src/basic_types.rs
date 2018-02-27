use fixed_point::{Sfixed16P16, Sfixed8P8};

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ColorTransform {
  pub red_mult: Sfixed8P8,
  pub green_mult: Sfixed8P8,
  pub blue_mult: Sfixed8P8,
  pub red_add: i16,
  pub green_add: i16,
  pub blue_add: i16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ColorTransformWithAlpha {
  pub red_mult: Sfixed8P8,
  pub green_mult: Sfixed8P8,
  pub blue_mult: Sfixed8P8,
  pub alpha_mult: Sfixed8P8,
  pub red_add: i16,
  pub green_add: i16,
  pub blue_add: i16,
  pub alpha_add: i16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum LanguageCode {
  Auto,
  Latin,
  Japanese,
  Korean,
  SimplifiedChinese,
  TraditionalChinese,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Matrix {
  pub scale_x: Sfixed16P16,
  pub scale_y: Sfixed16P16,
  pub rotate_skew0: Sfixed16P16,
  pub rotate_skew1: Sfixed16P16,
  pub translate_x: i32,
  pub translate_y: i32,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct NamedId {
  pub id: u16,
  pub name: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Rect {
  pub x_min: i16,
  pub x_max: i16,
  pub y_min: i16,
  pub y_max: i16,
}

// Color point in the sRGB color space with 8-bit color depth
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct SRgb8 {
  pub r: u8,
  pub g: u8,
  pub b: u8,
}

// Color point with straight alpha in the sRGB color space with 8-bit color depth
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct StraightSRgba8 {
  pub r: u8,
  pub g: u8,
  pub b: u8,
  pub a: u8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Vector2D {
  pub x: i32,
  pub y: i32,
}
