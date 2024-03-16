const express = require('express');
const app = express();
require('dotenv').config();
const mongoose=require('mongoose');
var cors = require('cors');
app.use(cors());
const base_url= process.env.BASE_URL;
const port =process.env.PORT||8000;
const model  = require('./db_models/model');


const connect = require('./connection');
const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', (req, res) => {
    res.send('Hello World!');
    }); 
connect (process.env.URL);   
 app.get('/search', async (req,res)=>{
    const query = req.query.query;
    try {
        
        const result = await model.aggregate([
            {
                $search: {
                    index: 'example', 
                    text: {
                        query: query,
                        path: {
                            wildcard: '*'
                        }
                    }
                }
            }
        ]);

        res.json(result); 
    } catch (error) {
        console.error('Error during search:', error);
        res.status(500).json({ error: 'An error occurred during search' }); 
    }
});

    


    


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }); 
    