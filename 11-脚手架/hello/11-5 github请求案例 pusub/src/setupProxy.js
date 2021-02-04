const prox = require('http-proxy-middleware')

module.exports = function(app){
    app.use(
        prox('/api1',{
            target:'http://localhost:5000',
            changeOrigin:true,
            pathRewrite:{'^/api1':''}
        })

    )
}