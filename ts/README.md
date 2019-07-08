<a href="https://github.com/open-flash/open-flash">
    <img src="https://raw.githubusercontent.com/open-flash/open-flash/master/logo.png"
    alt="Open Flash logo" title="Open Flash" align="right" width="64" height="64" />
</a>

# SWF Tree (Typescript)

[![npm](https://img.shields.io/npm/v/swf-tree.svg)](https://www.npmjs.com/package/swf-tree)
[![GitHub repository](https://img.shields.io/badge/Github-open--flash%2Fswf--tree-blue.svg)](https://github.com/open-flash/swf-tree)
[![Build status](https://img.shields.io/travis/com/open-flash/swf-tree/master.svg)](https://travis-ci.com/open-flash/swf-tree)

Typescript implementation of the SWF Abstract Syntax Tree (AST).

## Usage

```shell
# Run as a simple user
npm install -S swf-tree
```

```typescript
import {readFileString} from "fs";
import {Movie} from "swf-tree";

// Deserialize
const jsonString: string = readFileString("ast.json").toString("utf8");
const parsedJson: Movie.Json = JSON.parse(jsonString);
const movie: Movie = Movie.Type.read("json", parsedJson);

// Serialize
const emittedJson: Movie.Json = Movie.Type.write("json", movie);
console.log(JSON.stringify(jsonMovie, null, 2));
```
