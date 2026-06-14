const {
  askQuestion
}
=
require("../services/rag.service");

exports.askQuestion =
async (req,res)=>{

   try{

      const { question } = req.body;

      const result =
      await askQuestion(question);

      return res.json({
         success:true,
         answer:result.answer,
         sources:result.sources
      });

   }catch(error){

      console.log(error);

      return res.status(500).json({
         success:false,
         error:error.message
      });

   }

}