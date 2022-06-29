function funk(){
 let a = document.querySelectorAll('a[href^="#"]')
 for(let b of a){
     console.log(b);
 }
}

funk()
