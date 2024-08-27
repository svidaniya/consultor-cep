//express app template 
const express = require('express');
const app = express();
const PORT = 3000;
//ejs template and import
const ejs = require('ejs');
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.get('/', (req, res) => {
    //return a ejs template
    res.render('home');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})