const express = require( 'express' ) 
    , app     = express() 
    , port    = process.env.PORT || 3000

app.use( express.static( __dirname + '/../dist' ) )

app.get( '/', ( req, res ) => { 

    res.sendFile( __dirname + '/../dist/index.html' )
})

app.get( '/image', require( './image' ) )  

app.listen( port, () => { 

    console.log( 'API listening on port ' + port )
}) 