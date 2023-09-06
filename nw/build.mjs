import nwbuild from "nw-builder";
import fs from "fs";
// import { execSync } from "child_process";

async function main() {
  const packageJson = JSON.parse(fs.readFileSync("package.json"));
  packageJson["main"] = "./dist-react/index.html";
  delete packageJson["node-remote"];
  fs.writeFileSync("package.json", JSON.stringify(packageJson, null, 2));

  await nwbuild({
    mode: "build",
  });

  // await nwbuild({
  //   mode: "get",
  //   version: "0.79.1",
  //   flavor: "sdk",
  //   platform: "win",
  //   arch: "x64",
  //   downloadUrl: "https://dl.nwjs.io",
  //   manifestUrl: "https://nwjs.io/versions",
  //   cacheDir: "./cache",
  //   outDir: "./out",
  //   srcDir: ".",
  //   cache: true,
  //   ffmpeg: false,
  // });

  const packageJsonRevert = JSON.parse(fs.readFileSync("package.json"));
  packageJsonRevert["main"] = "http://localhost:4175";
  packageJsonRevert["node-remote"] = "http://localhost:4175";
  fs.writeFileSync("package.json", JSON.stringify(packageJsonRevert, null, 2));

  console.log("done");
}

main();
