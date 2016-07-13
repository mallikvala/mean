var Todo = require('./models/todo');

function getTodos(res) {
    Todo.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
};

function getArticle(res, title){
    Todo.find({'title':title}, function (err, article) {
        if(err){
            res.send(err);
        }

        res.json(article);

    })
}


module.exports = function (app) {
    app.get('/api/create', function (req, res) {
        Todo.create({},function (err, article) {
            if(err){
                res.send(err);
            }else{
                res.send('success');
            }
        });
    });

    app.get('/api/articles/:article_title', function (req, res) {
        getArticle(res, req.params.article_title);
    });


    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};