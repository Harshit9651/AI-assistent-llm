const { pipeline } =
require("@xenova/transformers");

let embedder;

async function getEmbedder(){

    if(!embedder){

        embedder =
        await pipeline(
            "feature-extraction",
            "Xenova/all-MiniLM-L6-v2"
        );
    }

    return embedder;
}

module.exports =
getEmbedder;