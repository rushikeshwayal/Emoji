const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
const app = express();


const corsOptions = {
  origin: 'http://localhost:3001',
};
app.use(cors(corsOptions));

    
const apiUrl = 'https://emoji-api.com/emojis?access_key=9d62d766c2c04076d191e31cecdac24d355d329b';




fetch(apiUrl)
  .then(response => response.json())
  .then(data => app.get('/emoji/api',(req,res)=>
    {
    res.send(data);
    console.log("response sent on http://localhost:3000/emoji/api")
    }
))
  .catch(error => console.error('Error:', error));



app.get("/",(req,res)=>{
  res.send("server is on")
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});