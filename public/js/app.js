// reloj-js //

const h = $('#h-p');

const m = $('#m-p');

const s = $('#s-p');

// fun-reloj

const reloj = () => {

  h.html(moment().get('h'));
  m.html(moment().get('m'));
  s.html(moment().get('s'))

}

// setInterval-reloj

setInterval(reloj , 1000)