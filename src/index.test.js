const fiterr = require("./index")

dirs = ["./node_modules"]
files = ["./index.js", "./.gitignore", "./package.json", "./README.md"]
onfile = (file) => {
  console.log(file)
}
ondir = (dir) => {
  console.log(dir)
}

config = {
  dirs,
  files,
  onfile,
  ondir,
}

fiterr(config)
