// const { response } = require("express");
const {foods} = require("../models/");
// const { post } = require("../routers");
// const foodsRouters = require("../routers/foodsRouters");

module.exports = {
    getAllfoods : (_require, response)=>{
        foods.findAll()
        .then ((data)=>{
            response.send({
                msg : "succes get all data",
                status : 200,
                data
            })
        })
        .catch ((err=>
            response.send({
                msg : "error",
                status : 500,
                err,
            })
            ))
    },



    deleteDataByid : async (req, res)=>{
        let {id} = req.params;

        const findFoods = await foods.findOne({
            where: {id}
        });

        if(findFoods === null){
            res.status(404).send({
                msg: "failed delete data",
                status: 404,
                error: "data not found"
            })
        }

        foods.destroy({
            where : {id}
        })
        .then(()=>{
            res.status(200).send({
                msg: "delete data succes",
                status: 200,
                findFoods,
            });
        })
        .catch((err)=>{
            res.status(500).send({
                msg: "failed delete data",
                status: 500,
                err,
            });
        });
    },



    postfoods : (require,response)=>{
        let {body} = require;
        console.log("BODY", body);
        foods.create(body)
        .then((data)=>{
            response.status(200).send({
                msg : "succes post data",
                status : 200,
                data,
            })
        })
        .catch((err)=>{
            response.send({
                msg : "gagal",
                status : 500,
                err,
            })
        })
    },



    getDataByid : async (req, res)=>{
        let {id} = req.params;
        const findFoods = await foods.findOne({
            where: {id}
        });

        if(findFoods === null){
            res.status(500).send({
                msg: "this data not found",
                status: 500,
                findFoods,
            })
        }

        foods.findOne({
            where : {id}
        })
        .then(()=>{
            res.status(200).send({
                msg: "get data by id succes",
                status: 200,
                findFoods,
            });
        })
    },





    deleteDataByid : async (req, res)=>{
        let {id} = req.params;

        const findFoods = await foods.findOne({
            where: {id}
        });

        if(findFoods === null){
            res.status(404).send({
                msg: "failed delete data",
                status: 404,
                error: "data not found"
            })
        }

        foods.destroy({
            where : {id}
        })
        .then(()=>{
            res.status(200).send({
                msg: "delete data success",
                status: 200,
                findFoods,
            });
        })
        .catch((err)=>{
            res.status(500).send({
                msg: "failed delete data",
                status: 500,
                err,
            });
        });
    },





    upDateByid : async (req, res)=>{
        let {id} = req.params;
        let {body} = req;
        const findFoods = await foods.findOne({
            where: {id}
        });

        if(findFoods === null){
            res.status(404).send({
                msg: "failed update data",
                status: 404,
                error: "data not found"
            })
        }

        foods.update(body, {
            where : {id}
        })
        .then(()=>{
            console.log(findFoods);
            deletOBJ = {...findFoods.data, ...body};
            res.status(200).send({
                msg: "succes update data",
                status: 200,
                deletOBJ,
            })
        })
        .catch((err)=>{
            res.status(500).send({
                msg: "failed update data",
                status: 500,
                err,
            })
        })
    },
}