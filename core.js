var i = 0;
var factor = 0.2;

resetTimer();

function resetTimer() {
    anime({
        targets: '#breathingCircle',
        scale: 0.75,
        opacity: 1,
        duration: 400 * factor
    });
    anime({
        targets: '#progressBar',
        width: '0px',
        opacity: 1,
        easing: 'easeOutQuad',
        duration: 400 * factor
    });
    anime({
        targets: '#breathCount',
        opacity: 1,
        delay: 5000 * factor,
        duration: 1500 * factor,
        color: '#FFFFFF'
    });

    setTimeout(function () {
        timerMain();
        anime({
            targets: '#progressBar',
            width: '100%',
            easing: 'linear',
            duration: 85000 * factor,
            delay: 5000 * factor
        });
    }, 1000 * factor)
    //vertragen van functie van 1 seconde
    function timerMain() {
        var count = 0;

        var countTimer = setInterval(function () {
            count++;
            var breathCount = anime({
                targets: '#breathCount',
                value: count,
                round: 1,
                duration: 10,
                delay: 400 * factor
            });
        }, 3500 * factor);
        setTimeout(function () {
            clearInterval(countTimer)
        }, 90000 * factor)


        var basicTimeline = anime.timeline({
            loop: 26
        });
        basicTimeline
            .add({
                targets: '#breathingCircle',
                scale: 1,
                easing: 'easeOutQuad',
                duration: 2000 * factor,
                delay: 250 * factor
            })
            .add({
                targets: '#breathingCircle',
                scale: 0.75,
                easing: 'easeOutQuad',
                delay: 250 * factor,
                duration: 1000 * factor
            });
    }

    setTimeout(function () {
        $("#breathCount")[0].value = 'Breath out all the air in your lungs..';
        $("#breathCount")[0].style.fontSize = '24px';
        $("#breathCount")[0].style.color = '#333';
        anime({
            targets: '#breathingCircle',
            opacity: 0,
            duration: 1000 * factor
        });
        anime({
            targets: '#breathCount',
            opacity: 0,
            duration: 1000 * factor,
            delay: 3000 * factor
        });
        anime({
            targets: '#progressBar',
            opacity: 0,
            easing: 'easeOutQuad',
            duration: 1000 * factor,
        });
        anime({
            targets: '#counter',
            opacity: 1,
            easing: 'easeOutQuad',
            delay: 4000 * factor,
            duration: 400 * factor,
        });
        anime({
            targets: '#holdBreath',
            opacity: 1,
            easing: 'easeOutQuad',
            delay: 20000 * factor,
            duration: 2000 * factor,
        });
        setTimeout(function () {
            var sec = 0;

            function pad(val) {
                return val > 9 ? val : "0" + val;
            }
            setInterval(function () {
                $("#seconds").html(pad(++sec % 60));
                $("#minutes").html(pad(parseInt(sec / 60, 10)));
            }, 1000 * factor);
        }, 3000 * factor)

    }, 91000 * factor)
}

document.onclick = function () {
    //location.reload(); 
}
