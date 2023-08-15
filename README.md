# fiterr - file and dir iterator

Pass your file and directory list to the fiterr function as dirs and files key of config object.
Pass 2 utility functions, ondir and onfile, that will come into play when fiterr will encounter a directory or file respectively.

```js
const fiterr = require("fiterr")

const config = {
  dirs: ["./src", "./utils"],
  ondir: function () {
    console.log("do something")
  },
  files: ["./package.json", "./types.d.ts"],
  onfile: function () {
    console.log("do something")
  },
}

fiterr(config)
```
