const express = require('express');
const route = express.Router();




route.get('/',(req,res,next)=>{
	res.status(200).json({
		message:" orders fatched"
	});
	
});

route.post('/',(req,res,next)=>{
	res.status(201).json({
		message:"created orders "
	});
	
});

route.get('/:orderId',(req ,res, next) => {
	res.status(200).json({
		message:"order details",
		orderId: req.params.orderId
	});
	
});

route.delete('/:orderId',(req ,res, next) => {
	res.status(200).json({
		message:"order deleted",
		orderId: req.params.orderId
	});
	
});



module.exports= route;