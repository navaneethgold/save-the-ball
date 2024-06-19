// {/* <script> */}
    var stone = document.getElementsByClassName("stone");
    var stone2 = document.getElementsByClassName("stone2");
    var stone3 = document.getElementsByClassName("stone3");
    var stone4 = document.getElementsByClassName("stone4");
    var stone5 = document.getElementsByClassName("stone5");
    var stone6 = document.getElementsByClassName("stone6");
    var run=document.getElementsByClassName("run")
    var score=document.getElementsByClassName("yscore")
    let seconds=0

    let sto1=[250,200,150,100,50,0]
    let sto2=[200,150,100,50,0,-50]
    let sto3=[150,100,50,0,-50,-100]
    let sto4=[100,50,0,-50,-100,-150]
    let sto5=[50,0,-50,-100,-150,-200]
    let sto6=[0,-50,-100,-150,-200,-250]
    let choose=[-40,-90,-140,-190,-250,-300]
    // function check(){
    
    // }
    let collide=0
    function startTimer() {
        timerInterval = setInterval(function() {
            seconds++;
            score[0].innerText=seconds
        }, 1000); // 1000 milliseconds = 1 second
    }
    
    function stopTimer() {
        // Stop the timer by clearing the interval
        clearInterval(timerInterval);
    }
    
    // Example usage:
    
    function checkCollision() {
        var runRect = run[0].getBoundingClientRect();
        // for (var i = 0; i < stone.length; i++) {
            var stoneRect = stone[0].getBoundingClientRect();
    
            if (
                runRect.right >= stoneRect.left &&  
                runRect.left <= stoneRect.right &&
                runRect.bottom >= stoneRect.top &&
                runRect.top <= stoneRect.bottom
            ) {
                collide++
                console.log("Collision with stone ", collide);
                alert("game over!! , your score:- "+seconds)
                window.location.reload()
                
                
            }
            var runRect = run[0].getBoundingClientRect();
        // for (var i = 0; i < stone.length; i++) {
            var stoneRect = stone2[0].getBoundingClientRect();
    
            if (
                runRect.right >= stoneRect.left &&
                runRect.left <= stoneRect.right &&
                runRect.bottom >= stoneRect.top &&
                runRect.top <= stoneRect.bottom
            ) {
                collide++
                console.log("Collision with stone ", collide);
                alert("game over!! , your score:- "+seconds)
                window.location.reload()
            }
            var runRect = run[0].getBoundingClientRect();
        // for (var i = 0; i < stone.length; i++) {
            var stoneRect = stone3[0].getBoundingClientRect();
    
            if (
                runRect.right >= stoneRect.left &&
                runRect.left <= stoneRect.right &&
                runRect.bottom >= stoneRect.top &&
                runRect.top <= stoneRect.bottom
            ) {
                collide++
                console.log("Collision with stone ", collide);
                alert("game over!! , your score:- "+seconds)
                window.location.reload()
            }
            var runRect = run[0].getBoundingClientRect();
        // for (var i = 0; i < stone.length; i++) {
            var stoneRect = stone4[0].getBoundingClientRect();
    
            if (
                runRect.right >= stoneRect.left &&
                runRect.left <= stoneRect.right &&
                runRect.bottom >= stoneRect.top &&
                runRect.top <= stoneRect.bottom
            ) {
                collide++
                console.log("Collision with stone ", collide);
                alert("game over!! , your score:- "+seconds)
                window.location.reload()
            }
            var runRect = run[0].getBoundingClientRect();
        // for (var i = 0; i < stone.length; i++) {
            var stoneRect = stone5[0].getBoundingClientRect();
    
            if (
                runRect.right >= stoneRect.left &&
                runRect.left <= stoneRect.right &&
                runRect.bottom >= stoneRect.top &&
                runRect.top <= stoneRect.bottom
            ) {
                collide++
                console.log("Collision with stone ", collide);
                alert("game over!! , your score:- "+seconds)
                window.location.reload()
            }
            var runRect = run[0].getBoundingClientRect();
        // for (var i = 0; i < stone.length; i++) {
            var stoneRect = stone6[0].getBoundingClientRect();
    
            if (
                runRect.right >= stoneRect.left &&
                runRect.left <= stoneRect.right &&
                runRect.bottom >= stoneRect.top &&
                runRect.top <= stoneRect.bottom
            ) {
                collide++
                console.log("Collision with stone ", collide);
                alert("game over!! , your score:- "+seconds)
                window.location.reload()
            }
        }
    
    
    setInterval(checkCollision, 400); 
    
    function animateStones(stones, positions) {
        for (let i = 0; i < stones.length; i++) {
            stones[i].style.top = positions + "px";
            if (!stones[i].classList.contains("animation")) {
                stones[i].classList.add("animation");
            }
        }
    }

    

    function startAnimations() {
        setTimeout(function() {
            animateStones(stone2, sto2[Math.floor(Math.random() * 6)]);
        }, 800);
        setTimeout(function() {
            animateStones(stone3, sto3[Math.floor(Math.random() * 6)]);
        }, 1600);   
        setTimeout(function() {
            animateStones(stone4, sto4[Math.floor(Math.random() * 6)]);
        }, 2400);
        setTimeout(function() {
            animateStones(stone5, sto5[Math.floor(Math.random() * 6)]);
        }, 3000);
        setTimeout(function() {
            animateStones(stone6, sto6[Math.floor(Math.random() * 6)]);
        }, 3600);
        setTimeout(function() {
            animateStones(stone, sto1[Math.floor(Math.random() * 6)]);
            setTimeout(startAnimations, 4000); // Restart animations for all stones
        }, 4000);
    }
    document.addEventListener('keydown', function(event) {
        // Check if the pressed key is a number key (keyCode 48-57 for digits 0-9)
        if (/^\d$/.test(event.key)) {
            run[0].style.top=choose[event.key]+"px"
            console.log('Number key pressed:', event.key);
        }
      });
      const start=document.querySelector(".start")
      start.addEventListener("click",()=>{
        startAnimations();
        startTimer();
      })

    

// </script>
