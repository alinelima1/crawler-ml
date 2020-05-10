const scrapping = require('../models/crawler')

exports.post = async(req,res) => {

    try{
        await scrapping(req.body).then(r => {
            res.status(200).send(r);
        });
        
    }catch(err){
        res.status(500).send({
            message: "Erro ao processar requisição."
        })
    }
    
}

