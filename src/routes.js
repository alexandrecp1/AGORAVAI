const express = require("express");
const routes = express();
routes.use(express.json())


routes

    //Add an item
    .post('/iventory', (req, res) =>{
        const { item, price } = req.body;
        if (!item || !price){
            res.status(400).json({
                erro: "Error: Price and Item NULL",
            });
            return;
        }
        try{
            iventory.push({
                id: iventory.length+1,
                item: item,
                price: price
            })
            res.status(200).json({msg: "Item ADD sucessfully! :D"})
        }catch(error){
            res.status(400).json({erro: error.message});
        }
    })
    

    //See Item
    .get('/iventory', (req, res) =>{
        res.status(200).json(iventory)
    })


    //Update an Item
    .put('/iventory/:id', (req, res) => {
        const id = req.params.id;
        const price = req.body.price;
        const item = iventory.find((i) => i.id == id);

        if (item){
            item.price = price;
            res.status(200).json({msg: "Price was been updated"})
        }else{
            res.status(400).json({msg: "Item not found"})
        }
    })


    //Remove Item
    .delete('/iventory/:id', (req, res) => {
         const id = req.params.id
         for (let i = 0; i < iventory.length; i++){
            if(id == iventory[i].id){
                iventory.splice(id-1, 1)
                res.status(200).json({msg: "item Removed"})
                return;
             }
         }
        res.status(400).json({msg: "Item not found"})
    })

module.exports = routes;

const iventory = [{
    id: 1,
    item: "Intel Celeron",
    price: 5000
}];
