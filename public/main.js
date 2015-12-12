var lastD = 0;

function reload(){ 
  console.log( '### main.js + RELOAD() : get playing ###' )
  $.getJSON('/playing',function( data ){
    if ( data.timestamp != lastD ) {
      lastD = data.timestamp;
//      buildPlaying(data);
/*
	  console.log( '### main.js + RELOAD() : get played ###' )
      $.getJSON('/played',function( songs ){
        reloadPlayed( songs );
      });
 */
    }
  });
};


$(function(){   
  reload();                  // now,.. 
  setInterval(reload,10000); // ..and every 10 secs   
});
