

// ticket selection
let totalprice=0
let c=7
let b = 1
let count= 0 
const increasing=document.getElementById("increase-seat")
const ticketSelection = document.getElementsByClassName("seat")
const seatleft = document.getElementById("seats-left")
for (let index = 0; index < ticketSelection.length; index++) {
    const element = ticketSelection[index];
;
    // console.log(element);
    element.addEventListener("click",function(){
        element.style.backgroundColor = "#1DD100"
        element.style.color="white"
        seatleft.innerText=c--
        increasing.innerText=b++
        if(seatleft.innerText<0){
          alert("can't be negative")
        }
        count++
if(count>4){
    alert("You can not buy more than 4 tickets")
    element.style.backgroundColor="#0307121A"
    
    return
}

        // appending
        const mainpricecontainer=document.getElementById("main-container")
        const tpp= document.getElementById("seat-per-price").innerText
        const ticketperprice=parseInt(tpp)
const seatstatusname = document.getElementById("container-3")
// const seatname = document.getElementById('s')
const p3 = document.createElement("p")
p3.innerText=this.innerText
seatstatusname.appendChild(p3)
mainpricecontainer.appendChild(seatstatusname)


        const economyclass = document.getElementById("container-2")
        const p2 = document.createElement("p")
        p2.innerText="Economy"
        economyclass.appendChild(p2)
        mainpricecontainer.appendChild(economyclass)
    
        const priceContainer = document.getElementById("container-1")
        const p = document.createElement("p")
        p.innerText=ticketperprice
        priceContainer.appendChild(p)
        mainpricecontainer.appendChild(priceContainer)
    totalprice+=ticketperprice
    document.getElementById("total-price").innerText=totalprice
document.getElementById("grand-total-price").innerText=totalprice
 

  
    })
  

    
}


const applyBtn = document.getElementById("apply-btn")
applyBtn.addEventListener('click',function(){
    const ci=document.getElementById("coupon-input")
    
    const couponInput=ci.value
    const couponcode=couponInput.split(" ").join(" ").toUpperCase()
  if(couponcode==="NEW15"){
    const discountamount = totalprice*0.15
    document.getElementById("grand-total-price").innerText=totalprice-discountamount
    ci.classList.add("hidden")
    applyBtn.classList.add("hidden")
  }
  
 else if(couponcode==="COUPLE20"){
    const discountamount = totalprice*0.20
    document.getElementById("grand-total-price").innerText=totalprice-discountamount
    ci.classList.add("hidden")
    applyBtn.classList.add("hidden")
  }
  else{
    alert("wrong coupon code")
  }
})





