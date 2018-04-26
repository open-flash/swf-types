use basic_types::StraightSRgba8;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum GradientSpread {
  Pad,
  Reflect,
  Repeat,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum ColorSpace {
  SRgb,
  LinearRgb,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct ColorStop {
  pub ratio: u8,
  pub color: StraightSRgba8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct MorphColorStop {
  pub ratio: u8,
  pub morph_ratio: u8,
  pub color: StraightSRgba8,
  pub morph_color: StraightSRgba8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct Gradient {
  pub spread: GradientSpread,
  pub color_space: ColorSpace,
  pub colors: Vec<ColorStop>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
pub struct MorphGradient {
  pub spread: GradientSpread,
  pub color_space: ColorSpace,
  pub colors: Vec<MorphColorStop>,
}
