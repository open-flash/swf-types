use fixed_point::Sfixed8P8;
use gradient::Gradient;
use basic_types::{Matrix, StraightSRgba8};

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Bitmap {
  pub bitmap_id: u16,
  pub matrix: Matrix,
  pub repeating: bool,
  pub smoothed: bool,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct FocalGradient {
  pub matrix: Matrix,
  pub gradient: Gradient,
  pub focal_point: Sfixed8P8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct LinearGradient {
  pub matrix: Matrix,
  pub gradient: Gradient,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct RadialGradient {
  pub matrix: Matrix,
  pub gradient: Gradient,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Solid {
  pub color: StraightSRgba8,
}
