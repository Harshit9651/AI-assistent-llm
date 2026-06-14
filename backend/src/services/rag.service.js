const loadDocuments =
require("../rag/documentLoader");

const splitText =
require("../rag/textSplitter");

const getEmbedder =
require("../rag/embeddings");

const {
    buildVectorStore
}
=
require("../rag/vectorStore");

const retrieve =
require("../rag/retriever");

const promptTemplate =
require("../rag/prompt");

const llm =
require("../config/gemini");

let embedder;

// ==========================
// INIT RAG
// ==========================

async function initializeRAG(){

    const text =
    await loadDocuments();

    const chunks =
    splitText(text);

    embedder =
    await getEmbedder();

    const vectors = [];

    for(
        const chunk of chunks
    ){

        const embedding =
        await embedder(
            chunk,
            {
                pooling:"mean",
                normalize:true
            }
        );

        vectors.push(
            Array.from(
                embedding.data
            )
        );

    }

    await buildVectorStore(
        chunks,
        vectors
    );

    console.log(
        "RAG READY"
    );

}

// ==========================
// ASK QUESTION
// ==========================

async function askQuestion(
    question
){

    const queryEmbedding =
    await embedder(
        question,
        {
            pooling:"mean",
            normalize:true
        }
    );

    const docs =
    await retrieve(
        Array.from(
            queryEmbedding.data
        )
    );

    const context =
    docs
    .map(
        doc=>doc.pageContent
    )
    .join("\n");

    const prompt =
    promptTemplate
    .replace(
        "{context}",
        context
    )
    .replace(
        "{question}",
        question
    );

    const response =
    await llm.invoke(
        prompt
    );

    return {

        answer:
        response.content,

        sources:
        docs.map(
            doc=>doc.metadata
        )

    };

}

module.exports = {

    initializeRAG,

    askQuestion

};