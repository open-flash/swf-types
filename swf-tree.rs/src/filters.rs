use basic_types::StraightSRgba8;
use fixed_point::{Sfixed16P16, Sfixed8P8};
use gradient::ColorStop;
use ordered_float::OrderedFloat;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Blur {
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub passes: u8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Bevel {
  pub shadow_color: StraightSRgba8,
  pub highlight_color: StraightSRgba8,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub angle: Sfixed16P16,
  pub distance: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub on_top: bool,
  pub passes: u8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ColorMatrix {
  pub matrix: Vec<OrderedFloat<f32>>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Convolution {
  pub matrix_width: usize,
  pub matrix_height: usize,
  pub divisor: OrderedFloat<f32>,
  pub bias: OrderedFloat<f32>,
  pub matrix: Vec<OrderedFloat<f32>>,
  pub default_color: StraightSRgba8,
  pub clamp: bool,
  pub preserve_alpha: bool,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DropShadow {
  pub color: StraightSRgba8,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub angle: Sfixed16P16,
  pub distance: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub passes: u8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Glow {
  pub color: StraightSRgba8,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub passes: u8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GradientBevel {
  pub gradient: Vec<ColorStop>,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub angle: Sfixed16P16,
  pub distance: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub on_top: bool,
  pub passes: u8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct GradientGlow {
  pub gradient: Vec<ColorStop>,
  pub blur_x: Sfixed16P16,
  pub blur_y: Sfixed16P16,
  pub angle: Sfixed16P16,
  pub distance: Sfixed16P16,
  pub strength: Sfixed8P8,
  pub inner: bool,
  pub knockout: bool,
  pub composite_source: bool,
  pub on_top: bool,
  pub passes: u8,
}
