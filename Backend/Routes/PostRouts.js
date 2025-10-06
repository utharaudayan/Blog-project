const express=require("express")
const {getPost,postData,editPost,getIdPost,deletePoste} =require("../controllers/PostControllers");
const router=express.Router()


router.get("/",getPost)
router.get("/:id",getIdPost) 
router.post("/",postData)
router.put("/:id",editPost)
router.delete("/:id",deletePoste)


module.exports=router


