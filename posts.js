const data = {
    'html5': require('./posts/html5.json'),
    'css3': require('./posts/css3.json'),
    'javascript': require('./posts/javascript.json')
};

module.exports = function(app) {

    app.get('/posts/:category', (req, res) => {

        // In case the post category doesn't exists.
        if (!data[req.params.category]) {
            res.redirect('/');
            return;
        }

        if (req.query.id && data[req.params.category].posts[req.query.id]) {
            data[req.params.category].posts[req.query.id].views++;
            res.render('post.ejs', {
                data: data[req.params.category].posts[req.query.id]
            });
            return;
        }

        res.render('posts.ejs', {
            data: data[req.params.category]
        });

    });

}