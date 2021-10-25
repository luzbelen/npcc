setBalls(0);
    let fecha = new Date();
    let fechas = document.getElementsByClassName('fecha');
    for(let item of fechas){

      item.innerHTML = fecha.toISOString();
    }

    let nextButton = document.getElementById('next');
    nextButton.addEventListener('click', function(){

      let frame = document.getElementById('frame');
      let position = parseInt(frame.offsetLeft);
      let newposition = position <= -1674 ? 0 : position - 837;

      if(position%837 == 0){

        setBalls(newposition);
        frame.style.left = newposition + 'px';
      }
    });

    let prevButton = document.getElementById('prev');
    prevButton.addEventListener('click', function(){

      let frame = document.getElementById('frame');
      let position = parseInt(frame.offsetLeft);
      let newposition = position >= 0 ? -1674 : position + 837;

      if(position%837 == 0){

        setBalls(newposition);
        frame.style.left = newposition + 'px';
      }
    });

    let balls = document.getElementsByClassName('ball');
    let frame = document.getElementById('frame');

    for(let i=0; i<balls.length; i++){

      let ball = balls[i];

      ball.addEventListener('click', (e) => {

        for(let ball of balls){

          ball.style.background = 'white';
        }

        let element = e.target;
        element.style.background = 'red';

        switch(i){

          case 0:
            frame.style.left = '0px';
            break;
          case 1:
            frame.style.left = '-837px';
            break;
          case 2:
            frame.style.left = '-1674px';
            break;
        }
      });
    }

    function setBalls(position){

      let balls = document.getElementsByClassName('ball');

      for(let ball of balls){

        ball.style.background = 'white';
      }

      switch(position){
        case 0:
          balls[0].style.background = 'red';
          break;
        case -837:
          balls[1].style.background = 'red';
          break;
        case -1674:
          balls[2].style.background = 'red';
          break;
      }
    }