# SWF Tree

This project specifies an Abstract Syntax Tree (AST) representation of SWF files (SWF movies). It
also includes Rust and Typescript implementations providing type declarations and serialization to
JSON.

Current status: Still a prototype. As a first draft, all the nodes defined in the Flash 10 spec
were implemented in Typescript. We're now revisiting the nodes and progressively adding them
to the documentation while updating the Rust code. The goal of this phase is to align the AST
more with the usage made by Shumway and Flex instead of the grammar. For example the multiple
versions of the "DefineShapeX" grammar rule can be unified in a single `DefineShape` AST node.
What's done in this phase? The general structure (movie, tags), shapes (records, styles), AMV1
actions, partially text support. The main remaining parts are media (audio/video) and AVM2.

The purpose of the AST is to provide a model for the content of SWF file that is a suitable
middle point between the disk representation and the needs of higher-level processing functions.
Beyond processing, the AST is also serializable in unambiguous way to JSON. This allows the
various component manipulating the AST to have a common language.

References:
- [Official SWF 10 spec](http://wwwimages.adobe.com/content/dam/Adobe/en/devnet/swf/pdf/swf-file-format-spec.pdf)
- [Shumway SWF file](https://github.com/mozilla/shumway/blob/16451d8836fa85f4b16eeda8b4bda2fa9e2b22b0/src/swf/SWFFile.ts)
- [Flex Movie](https://github.com/apache/flex-sdk/blob/bb7447f5ebe32ce58f85a9e9b2d2ffc48994cf42/modules/swfutils/src/java/flash/swf/Movie.java)
- [SwfMill reference](http://www.swfmill.org/doc/reference.html)

## Documentation

Check the `docs` directory, the root node is called `Movie`.

The structure of the `docs` directory corresponds to the public API of the implementations:
each file represents a type, each directory a namespace.

Example:
```
docs/
├── movie.md
└─┬ tags/
  └── define-shape.md
```
- Typescript:
  ```typescript
  import * as swfTree from "swf-tree";
  const movie: swfTree.Movie = ...;
  const defineShapeTag: swfTree.tags.DefineShape = ...;
  ```
- Rust:
  ```rust
  use swf_tree;
  fn main() {
    let movie: swf_tree::Movie = ...;
    let defineShapeTag: swf_tree::tags::DefineShape = ...;
  }
  ```

## Types

A type is a set of values. For example, the type `Boolean` is the set `{true, false}`.
The goal of this library is to describe the type `Movie` which defines the set of valid ASTs.

The documentation uses 4 kinds of types (or "types of types" :P) to build the description of the
AST.

- Primitives are the basic types used to build the other ones (integers, strings, booleans, ...)
- Interfaces are compound types mapping a few keys with their type.
- Enums wrap a few possible sub-types to represent alternatives.
- Collections define containers for same-type values

## Primitive values

The documentation assumes some primitive values such strings, booleans and integers.
The primitives are mostly implementation-dependents. The documentation tries to provide some
parameters to chose the most suitable type available in the language.

## Interface

Most of the AST is defined in term of interfaces. An interface defines a compound type made of
a fixed number of _properties_. Each property has a name (key) and a type.

Example:

> Point in the the sRGB color space with 8-bit color depth.
>
> ```
> interface SRgb8 {
>   r: Uint(8);
>   g: Uint(8);
>   b: Uint(8);
> }
> ```

The type of optional properties is wrapped in `Option()`, for example `Optional(Uint(8))`.

- Typescript: This corresponds to standard TS interfaces. Optional properties use `?`.
- Rust: This corresponds to structs with public fields. Optional properties use `Option<T>`.
- JSON: It corresponds to objects. The keys use `snake_case`. Missing optional properties are not
  emitted.

## Enum

**TODO**

## Containers

**TODO**

## License

[MIT License](./LICENSE.md)
