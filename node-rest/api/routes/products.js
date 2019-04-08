const express = require('express');
const route = express.Router();

route.get('/',(req,res,next)=>{
	res.status(200).json({
		message:"get"
	});
	
});

route.post('/',(req,res,next)=>{
	res.status(200).json({
		message:"post"
	});
	
})

route.get('/:productId',(req,res,next)=>{
	const id= req.params.productId;
	if (id=='special'){
		res.status(200).json({
			message:"you have got token",
			id : id
		});
	}else {
		res.status(200).json({
			message:"try again it's error"
		})
	}
});
route.patch('/',(req,res,next)=>{
	res.status(200).json({
		message:"put"
	});
	
})
route.delete('/',(req,res,next)=>{
	res.status(200).json({
		message:"deleted"
	});
	
})


module.exports= route;