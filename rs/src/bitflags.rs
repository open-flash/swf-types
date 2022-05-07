
macro_rules! serde_bitflags {
  (
    $(#[$outer:meta])*
    $vis:vis struct $BitFlags:ident: $T:ty {
        $(
            #[serde(name = $serde:literal)]
            $(#[$inner:ident $($args:tt)*])*
            const $Flag:ident = $value:expr;
        )*
    }
  ) => {
    ::bitflags::bitflags! {
      $(#[$outer])*
      $vis struct $BitFlags: $T {
        $(
          $(#[$inner $($args)*])*
          const $Flag = $value;
        )*
      }
    }

    #[cfg(feature = "serde")]
    impl ::serde::Serialize for $BitFlags {
      fn serialize<S: ::serde::Serializer>(&self, ser: S) -> Result<S::Ok, S::Error> {
        use ::serde::ser::SerializeStruct;

        const NB_FLAGS: usize = [$($serde),*].len();
        let mut map = ser.serialize_struct(stringify!($BitFlags), NB_FLAGS)?;
        $(
          map.serialize_field($serde, &self.contains($BitFlags::$Flag))?;
        )*
        map.end()
      }
    }

    #[cfg(feature = "serde")]
    impl<'de> ::serde::Deserialize<'de> for $BitFlags {
      fn deserialize<D: ::serde::Deserializer<'de>>(de: D) -> Result<Self, D::Error> {
        #[derive(::serde::Deserialize)]
        #[allow(non_snake_case)]
        struct $BitFlags {
          $(
            #[serde(rename = $serde)]
            $Flag: bool,
          )*
        }

        let flags = <$BitFlags as ::serde::Deserialize>::deserialize(de)?;

        let mut out = Self::empty();
        $(
          if flags.$Flag {
            out.insert(Self::$Flag);
          }
        )*
        Ok(out)
      }
    }
  }
}
