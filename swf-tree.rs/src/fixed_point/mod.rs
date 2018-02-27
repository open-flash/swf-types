use serde::{Serialize, Serializer, Deserialize, Deserializer};

macro_rules! fixed_point_impl {
  ($name:ident, $int_bits:expr, $frac_bits:expr, $epsilons_type:ty, $value_type:ty) => {
    #[derive(PartialEq, Eq, Debug)]
    pub struct $name {
      epsilons: $epsilons_type,
    }

    impl $name {
      pub fn from_epsilons(epsilons: $epsilons_type) -> $name {
        $name {epsilons: epsilons}
      }

      pub fn from_value(value: $value_type) -> $name {
        // TODO: Checked cast
        let epsilons: $epsilons_type = (value * ((1 << $frac_bits) as $value_type)) as $epsilons_type;
        $name {epsilons: epsilons}
      }
    }

    impl Serialize for $name {
      fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error> where S: Serializer {
        self.epsilons.serialize(serializer)
      }
    }

    impl<'a> Deserialize<'a> for $name {
      fn deserialize<D>(deserializer: D) -> Result<Self, D::Error> where D: Deserializer<'a> {
        Ok($name::from_epsilons(<$epsilons_type>::deserialize(deserializer)?))
      }
    }
  }
}

fixed_point_impl!(Sfixed8P8, 8, 8, i16, f32);
fixed_point_impl!(Sfixed16P16, 16, 16, i32, f64);
fixed_point_impl!(Ufixed8P8, 8, 8, u16, f32);
fixed_point_impl!(Ufixed16P16, 16, 16, u32, f64);

#[cfg(test)]
mod tests {
  use super::Sfixed16P16;
  use super::Ufixed8P8;
  use serde_json;

  #[test]
  fn test_eq() {
    assert_eq!(Sfixed16P16::from_epsilons(3), Sfixed16P16::from_epsilons(3));
  }

  #[test]
  fn test_json_serde_serialization() {
    assert_eq!(serde_json::to_string(&Sfixed16P16::from_epsilons(3)).unwrap(), "3");
  }

  #[test]
  fn test_json_serde_deserialization() {
    assert_eq!(serde_json::from_str::<Sfixed16P16>("0").unwrap(), Sfixed16P16::from_epsilons(0));
    assert_eq!(serde_json::from_str::<Sfixed16P16>("3").unwrap(), Sfixed16P16::from_epsilons(3));
    assert_eq!(serde_json::from_str::<Sfixed16P16>("65536").unwrap(), Sfixed16P16::from_epsilons(65536));
    assert_eq!(serde_json::from_str::<Sfixed16P16>("2147483647").unwrap(), Sfixed16P16::from_epsilons(2147483647));
    assert_eq!(serde_json::from_str::<Sfixed16P16>("-2147483648").unwrap(), Sfixed16P16::from_epsilons(-2147483648));
  }

  #[test]
  fn test_ufixed8p8() {
    assert_eq!(serde_json::from_str::<Ufixed8P8>("6144").unwrap(), Ufixed8P8::from_value(24f32));
  }
}
