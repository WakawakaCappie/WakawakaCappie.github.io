
var counter = 0



document.addEventListener('keydown', function(event){
    var clumber = document.querySelector('.climber')
    let points = document.querySelectorAll('article>div')
    
    я
    if(event.code === 'KeyZ'){
        points[counter].appendChild(clumber)
            if (6 >= counter > 0 ){
                counter = counter - 1
                }

            
        
    } else if (event.code === 'KeyX'){   
        points[counter].appendChild(clumber) 
        console.log(counter)
            if(6>=counter>0) {
                counter = counter + 1}
            

        
    }
    
})