#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ColorTransform {
  pub red_mult: i16,
  pub green_mult: i16,
  pub blue_mult: i16,
  pub red_add: i16,
  pub green_add: i16,
  pub blue_add: i16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ColorTransformWithAlpha {
  pub red_mult: i16,
  pub green_mult: i16,
  pub blue_mult: i16,
  pub alpha_mult: i16,
  pub red_add: i16,
  pub green_add: i16,
  pub blue_add: i16,
  pub alpha_add: i16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Matrix {
  pub scale_x: i32,
  pub scale_y: i32,
  pub rotate_skew_0: i32,
  pub rotate_skew_1: i32,
  pub translate_x: i32,
  pub translate_y: i32,
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
pub struct SRgb {
  pub r: u8,
  pub g: u8,
  pub b: u8,
}

// Color point with straight alpha in the sRGB color space with 8-bit color depth
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct StraightSRgba {
  pub r: u8,
  pub g: u8,
  pub b: u8,
  pub a: u8,
}
