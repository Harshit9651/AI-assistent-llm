const fs = require("fs");
const path = require("path");

async function loadDocuments() {

    const filePath = path.join(
        process.cwd(),
        "knowledge.txt"
    );

    return fs.readFileSync(
        filePath,
        "utf8"
    );
}

module.exports = loadDocuments;