use avm1;
use basic_types::SRgb;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct Scene {
  pub offset: u32,
  pub name: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct Label {
  pub frame: u32,
  pub name: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct DefineSceneAndFrameLabelData {
  pub scenes: Vec<Scene>,
  pub labels: Vec<Label>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct DoAction {
  pub actions: Vec<avm1::Action>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct FileAttributes {
  pub use_direct_blit: bool,
  pub use_gpu: bool,
  pub has_metadata: bool,
  pub use_as3: bool,
  pub no_cross_domain_caching: bool,
  pub use_relative_urls: bool,
  pub use_network: bool,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct PlaceObject {
  id: u16,
  depth: u16,
  //  matrix: Matrix,
  //  color_transform: Some(ColoTransform),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct SetBackgroundColor {
  /// Color of the display background
  pub color: SRgb,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub struct Unknown {
  pub code: u16,
  pub data: Vec<u8>,
}
