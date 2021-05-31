
var plus=document.getElementsByClassName("button-plus")
var zero=document.getElementsByClassName("zero")
var minus=document.getElementsByClassName("button-minus")
for(var i=0;i<plus.length;i++){
    plus[i].addEventListener("click",function(){
        // console.log(this.nextElementSibling)
        this.nextElementSibling.innerHTML=Number(this.nextElementSibling.innerHTML)+1
        Totalprice()
})
minus[i].addEventListener("click",function(){
    console.log(this.previousElementSibling)
    if(Number(this.previousElementSibling.innerHTML)>0)  this.previousElementSibling.innerHTML=Number(this.previousElementSibling.innerHTML)-1
 else this.previousElementSibling.innerHTML=0
 Totalprice()
})
}





function Totalprice(){
    let Total=document.querySelector(".total")
    let price=document.getElementsByClassName("price")
    let Quantité=document.getElementsByClassName("zero")
let sum=0
    for(let i=0;i<price.length;i++){
       
        sum=sum+price[i].innerHTML*Quantité[i].innerHTML
       console.log(sum)
       
    }
    Total.innerHTML=sum 
}
 
    var docremove=document.getElementsByClassName("doc")
    for(let i=0;i<docremove.length;i++){
        docremove[i].addEventListener("click",function(){
        this.parentElement.parentElement.remove()
        Totalprice()
        })
    }  

     


      
