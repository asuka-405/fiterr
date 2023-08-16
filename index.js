"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
/**
 * @description iterate over provided directory array and for each dir call ondir function (if provided) and for each file call onfile function (if provided) if more dirs are present within the provided dir array, add that dir into the dir array and continue the iteration
 * @param {object<FITERR_CONFIG>} config - configuration object
 *   @key {string[]} dirs - array of directories to iterate over
 *   @key {function} ondir - function to call on each directory
 *   @key {string[]} files - array of files to iterate over
 *   @key {function} onfile - function to call on each file
 */
const fiterr = (config) => {
    // destructure config
    let { dirs, files, ondir, onfile } = config;
    // check if config is provided
    if (!dirs)
        dirs = [];
    if (!files)
        files = [];
    if (!ondir)
        ondir = () => { };
    if (!onfile)
        onfile = () => { };
    while (dirs.length > 0) {
        const dir = dirs.shift() || "";
        if (!fs_1.default.lstatSync(dir).isDirectory())
            throw new Error(`provided path ${dir} is not a directory`);
        ondir(dir);
        const dirContent = fs_1.default.readdirSync(dir);
        while (dirContent.length > 0) {
            const item = dirContent.shift() || "";
            const itemPath = `${dir}/${item}`;
            if (fs_1.default.lstatSync(itemPath).isDirectory())
                dirs.push(itemPath);
            else if (fs_1.default.lstatSync(itemPath).isFile())
                onfile(itemPath);
            else
                throw new Error(`provided path ${itemPath} is not a file or directory`);
        }
    }
    while (files.length > 0) {
        const file = files.shift() || "";
        if (!fs_1.default.lstatSync(file).isFile())
            throw new Error(`provided path ${file} is not a file`);
        onfile(file);
    }
};
module.exports = fiterr;
