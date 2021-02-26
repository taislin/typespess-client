"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const browserify = require("browserify");
const fs = require("fs");
const used_bundler = browserify({
    entries: "./index.js",
    debug: false,
    cache: {},
    packageCache: {},
});
used_bundler.bundle(function (err, buf) {
    if (err) {
        throw new Error(err);
    }
    fs.writeFile("../resources/client.js", buf, function (err2) {
        if (err2) {
            throw new Error(err2);
        }
    });
});
console.info("COMPILE: done.");
