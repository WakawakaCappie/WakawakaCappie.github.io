
let clumber = document.querySelector('.climber')
let flag = document.querySelector('.climb')
let flag2 = document.querySelector('.climb2')
let counter = 0
let vid = document.querySelector(`.video`)
// console.log(vid)
// console.log(flag)
// console.log(clumber)
let points = document.querySelector('article')
// console.log(points)
let win = 0
document.addEventListener('keydown', function(event){

    
    if (event.code === "KeyZ" && counter > 0){
        // console.log('ZZZ')
        counter--
        // console.log(counter)
        document.querySelector(`.savePoint${counter}`).append(clumber)
    }
    else if (event.code === "KeyX" && counter < 6){
        // console.log('XXX')
        counter++
        // console.log(counter)
        document.querySelector(`.savePoint${counter}`).append(clumber)
    }
    else if (event.code === 'KeyJ' && counter >= 6){
        // console.log('JJJ')
        // console.log(counter)
        counter++
        document.querySelector(`.savePoint${counter}`).style.animationName = `fligth`;
        document.querySelector(`.savePoint${counter}`).append(clumber)

    }
    else if (event.code === 'KeyF' && counter === 6){
        // console.log('FFF')
        // console.log(counter)
        document.querySelector(`.flagg1`).append(flag)
        win++
        
    }
    else if (event.code === 'KeyF' && counter === 7){
        // console.log('FFF')
        // console.log(counter)
        document.querySelector(`.flagg2`).append(flag2)
        win++
        if(win >= 2) {document.querySelector(`.sign-wrap-1`).style.visibility = 'visible';}
        
    }
    else if (event.code === 'KeyR' && win >= 2){
        // console.log('RRR')
        // console.log(win)
        vid.style.visibility = 'visible';
        vid.muted = false;
        vid.src ='MLG.mp4'
        document.querySelector('.mountin').style.visibility ='hidden';
        document.querySelector('.climber').style.width = '150px';
        document.querySelector(`.climber`).style.animationName = `dance`;
        document.querySelector(`.climb`).style.animationName = `dance`;
        document.querySelector(`.climb2`).style.animationName = `dance`;
        document.querySelector(`.sign-wrap-1`).style.left = `40vw`;
        document.querySelector(`section`).style.visibility ='hidden';
    }
    })
