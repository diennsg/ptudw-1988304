const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.get('/aroma', (req,res)=>{
    res.send('This is arome web page !');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{
    console.log(`server is running on port ${app.get('port')}`);
});