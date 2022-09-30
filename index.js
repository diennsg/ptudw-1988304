var express = require('express');
var app = express();

// static: /public: (.html)
app.use(express.static(__dirname  + '/public'));

// express-handlebars
var expHbs = require('express-handlebars');
var hbs = expHbs.create({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
});
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

// render('blog')
app.get('/:page', (req,res)=>{
    var banners = {
        blog: '-My Blog-',
        cart: '-Shopping Cart-',
        category: '-Shop Category-',
        checkout: '-Product Checkout-',
        confirmation: '-Order Confirmation-',
        contact: '-Contact Us-',
        login: '-Login / Register-',
        register: '-Register-',
        single_blog: '-Blog Detail-',
        single_product: '-Shop Single-',
        tracking_order: '-Order Tracking-',
    } 
    var page = req.params.page;
    res.render(page, {banner: banners[page]});
});

app.get('/sua', (req, res)=>{
    res.send('sua tren remote repository');
});
// route goc
app.get('/', (req, res)=>{
    res.render('index');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), ()=>{
    console.log(`server is running on port ${app.get('port')}`);
});

// git init
// git config --global --add safe.directory E:/bt/ptudw-1988304
// heroku git:remote -m ptudw.1988304
// git add . // >> Commit
// git commit -m "chuoi message" // >> Sync changes
// git push origin "main" // >> Deploy Branch -> "main" 
