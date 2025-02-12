let promise = Promise.resolve(`${getSpecifier()}`).then(s => typeof process === "object" && process.versions?.node ? import("fs").then(fs => fs.promises.readFile(new URL(import.meta.resolve(s)))).then(WebAssembly.compile) : WebAssembly.compileStreaming(fetch(import.meta.resolve(s))));
