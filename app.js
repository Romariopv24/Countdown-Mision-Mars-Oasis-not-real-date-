const $days = document.getElementById('days'),
      $hours = document.getElementById('hours'),
      $minutes = document.getElementById('minutes'),
      $seconds = document.getElementById('seconds'),
      $finalmessage = document.querySelector('.final-sms')

      //Fecha a futuro
      const countdownDate = new Date('Dec 16, 2021 11:53:00').getTime();

      let interval = setInterval(function() {
          // Fecha actual en milisegundos
          const now = new Date().getTime();

          // Distancias entre las fechas
          const distance = countdownDate - now;
          

          //Calculos de dias horas minutos y segundos

          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) /(1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) /(1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60 )) / (1000));

        //Escribir resultados
        $days.innerHTML = days;
        $hours.innerHTML = hours;
        $minutes.innerHTML = minutes;
        $seconds.innerHTML = ('0' + seconds).slice(-2);

        //Cuando llegue a 0

        if( distance < 0 ) {
            clearInterval(interval);
            $finalmessage.style.transform = 'translateY(0)';
        }
      }, 1000);



        //scrollReveal
     ScrollReveal().reveal('.headline', {delay: 500})
     ScrollReveal().reveal('.countdown', {delay: 1000})
     ScrollReveal().reveal('.final-sms', {delay: 500})


     //Random Background
     const randomChange = document.getElementById('randomChange'),
  
     images = ['assets/mars.jpg', 'assets/Mars2.png', 'assets/rocket.jpeg']
      
     const imgCount = images.length
   
    const number = Math.floor(Math.random() * imgCount);
   
    window.onload = function() {
      
      randomChange.style.backgroundImage = 'url('+images[number]+')'
      randomChange.style.backgroundSize = 'cover';
      randomChange.style.backgroundRepeat = 'no-repeat';

    }
  
  
     
    