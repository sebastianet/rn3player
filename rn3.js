#! node
/*
 
 RN3 audio player
 sebastiasebas@gmail.com

 Pagina base amb en "player"
 http://www.rtve.es/alacarta/rne/radio-3/

 See INDEX.HTML to select stream
     RN1 : <param name="flashvars" value="assetID=1712486_es_audios&location=alacarta_audios&playerId=directoradioPlayer">
     RN3 : <param name="flashvars" value="assetID=1712469_es_audios&location=alacarta_audios&playerId=directoradioPlayer">

idBlock : 1712469 = RN3
          1712486 = RN1

 La emisora es pot escoltar aqui
 http://radio3.rtveradio.cires21.com/radio3/mp3/icecast.audio?rnd=119858

 He vist (amb fiddler) que agafa
 http://www.rtve.es/api/audios/1712469/config/alacarta_audios.json

 i la imatge de "RN3" es
 http://img.rtve.es/a/rne_rne3-live_1712469.png

*/

var os=require('os');

var express = require('express');
var app = express();

 console.log( '*** Windows Type is <'+ os.type() +'>.');
 console.log( '*** Homedir is <'+ os.homedir() +'>.');

var played = [] ;
var playing = {} ;

// --- express middleware --------------------------------------------------
app.use( express.static(__dirname + '/public') ) ; // where to serve HTML from

// --- express routes --------------------------------------------------
app.get('/played', function (req, res) {
  console.log( '>>> ['+ Date.now() +'] APP.JS get /played' ) ;
  res.send( played );
}); 

app.get('/playing', function (req, res) {
  console.log( '>>> ['+ Date.now() +'] APP.JS get /playing' ) ;
  res.send( playing ) ;
});

// --- main --------------------------------------------------------

(function main(){  

  console.log('>>> RN3 main.');
  var server = app.listen( process.env.PORT || 4321, function () {
    console.log( 'RN3 server is now open for e-business' ) ;
    console.log( '... at localhost: ', server.address().port ) ;
  });
 
})();
