const {
    getStore
}
=
require("./vectorStore");

function cosineSimilarity(
    a,
    b
){

    let dot = 0;

    let normA = 0;

    let normB = 0;

    for(
        let i=0;
        i<a.length;
        i++
    ){

        dot +=
        a[i] * b[i];

        normA +=
        a[i] * a[i];

        normB +=
        b[i] * b[i];
    }

    return (
        dot /
        (
            Math.sqrt(normA)
            *
            Math.sqrt(normB)
        )
    );
}

async function retrieve(
    queryVector
){

    const {
        chunks,
        vectors
    } = getStore();

    const scored =
    vectors.map(
        (
            vector,
            index
        )=>({

            score:
            cosineSimilarity(
                queryVector,
                vector
            ),

            chunk:
            chunks[index]

        })
    );

    scored.sort(
        (a,b)=>
        b.score - a.score
    );

    return scored
    .slice(0,3)
    .map(item=>({

        pageContent:
        item.chunk,

        metadata:{
            source:
            "knowledge.txt"
        }

    }));

}

module.exports =
retrieve;