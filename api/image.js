const axios = require( 'axios' ) 
  , cheerio = require( 'cheerio' )

module.exports = function( req, res ) {
    axios.get( 'https://archillect.com' )
    .then( response => 
        cheerio.load( response.data )( '#posts > a' ).first().prop( 'href' ).substr( 1 )
    )
    .then( id => 
        axios.get( 'https://archillect.com/' + Math.floor( Math.random() * id ) ) 
    )
    .then( response => 
        res.send({
                id: response.config.url.split( '/' )[3],
               url: cheerio.load( response.data )( '#ii' ).prop( 'src' ),
            status: 200 
        })
    )
    .catch( error => 
        res.send({
            status: 400 
        })
    )    
}
