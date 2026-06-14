require("dotenv").config();

const app =
require("./src/app");

const {
  initializeRAG
}
=
require(
"./src/services/rag.service"
);

const PORT =
process.env.PORT || 5000;

(async()=>{

    await initializeRAG();

    app.listen(
      PORT,
      ()=>{
        console.log(
          `Server Running ${PORT}`
        );
      }
    );

})();