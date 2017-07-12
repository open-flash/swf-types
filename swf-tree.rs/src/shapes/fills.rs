use basic_types::StraightSRgba;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct Solid {
  pub color: StraightSRgba,
}
