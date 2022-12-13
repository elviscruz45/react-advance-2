function casa(){
   
    console.log("hola")
    return () => document.removeEventListener("scroll",onScroll)
}