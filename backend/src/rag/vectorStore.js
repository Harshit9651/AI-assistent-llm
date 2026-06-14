let storedChunks = [];
let storedVectors = [];

async function buildVectorStore(
    chunks,
    vectors
){

    storedChunks = chunks;

    storedVectors = vectors;

}

function getStore(){

    return {

        chunks:
        storedChunks,

        vectors:
        storedVectors

    };

}

module.exports = {

    buildVectorStore,

    getStore

};