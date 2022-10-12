const inputName = document.getElementById("name-label");
inputName.focus();
const cardHolderName = document.getElementById("card-holder")
inputName.addEventListener("input", () =>{
    cardHolderName.style.opacity = "1";
    cardHolderName.innerText = inputName.value;
    if(cardHolderName.innerText == ""){
      cardHolderName.style.opacity = "0.3";
      cardHolderName.innerText = "cardholder name";
    }   
});

const inputNumber = document.getElementById('number-label');
const cardNumber = document.getElementById("card-number");
inputNumber.onkeydown = function () {
  if (inputNumber.value.length > 0 && inputNumber.value.length < 28) {
      if (inputNumber.value.length % 4 == 0) {
        
        inputNumber.value += "    ";
      }
  }
}
inputNumber.addEventListener("input", () =>{
    cardNumber.style.opacity = "1"
    cardNumber.innerText = inputNumber.value;  
    if(cardNumber.innerText == ""){  
      cardNumber.style.opacity = "0.3"    
      cardNumber.innerText = "0000 0000 0000 0000"
      
    }    
});

const inputdateM = document.getElementById('EXP-date-M');
const inputdateY = document.getElementById('EXP-date-Y');
const cardExpDATE = document.getElementById("card-expiry")
inputdateM .addEventListener("input", () =>{
  cardExpDATE.style.opacity = "1"
  cardExpDATE.innerText = `${inputdateM.value} / ${inputdateY.value}`; 
  if(cardExpDATE.innerText == "/"){
    cardExpDATE.style.opacity = "0.3"
    cardExpDATE.innerText = "00 / 00"
  }
});
inputdateY .addEventListener("input", () =>{
  cardExpDATE.style.opacity = "1"
  cardExpDATE.innerText = `${inputdateM.value} / ${inputdateY.value}`; 
  if(cardExpDATE.innerText == "/"){
    cardExpDATE.style.opacity = "0.3"
    cardExpDATE.innerText = "00 / 00"
  }  
});

const inputCVC = document.getElementById('cvc');
const cardCVC = document.getElementById("card-cvc")
inputCVC.addEventListener("input", () =>{
    cardCVC.style.opacity = "1"
    cardCVC.innerText = inputCVC.value;  
    if(cardCVC.innerText == ""){  
      cardCVC.style.opacity = "0.3"    
      cardCVC.innerText = "000"
      
    }    
});


function onSubmitButtonClick(){
    cardHolderName.innerText = inputName.value;
    cardNumber.innerText = inputNumber.value; 
    cardExpDATE.innerText = `${inputdateM.value} / ${inputdateY.value}`; 
    if(cardExpDATE.innerText == "/"){
      cardExpDATE.style.opacity = "0.3"
      cardExpDATE.innerText = "00 / 00"
    } 
    cardCVC.innerText = inputCVC.value; 
    if(cardCVC.innerText == ""){  
      cardCVC.style.opacity = "0.3"    
      cardCVC.innerText = "000"
      
    } 
    
    document.querySelector('.input-div').innerHTML = `
    <div class="complete"> 
    <img style="margin-bottom: 25px;" src="images/icon-complete.svg" alt="" width="140px">
    <h2 style="margin-bottom: 25px;">THANK YOU!</h2>
    <p style="margin-bottom: 25px;">we've added your card details</p>
    <button style="margin-bottom: 25px; padding:10px 15px; width:250px;" onclick="window.location.href=window.location.href" >Countinue</button>
    </div>
    `
    document.querySelector('.complete').style = `
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    `
  }












// function onCountinueButtonClick(event){
//     event.preventDefault();
//     var cardHolderName = document.getElementById("cardholder").value;
//     document.getElementById("card-holder").innerText = cardHolderName;
//     var cardNumber = document.getElementById("cardnumber").value;
//     document.getElementById("card-number").innerText = cardNumber;
//     var cardExpiryMonth = document.getElementById("expirydateMM").value;
//     var cardExpiryyear = document.getElementById("expirydateYY").value;
//     document.getElementById("card-expiry").innerText = cardExpiryMonth + "/" + cardExpiryyear;
//     var cvv = document.getElementById("cvc").value;
//     document.getElementById("card-cvc").innerText = cvv;
// }
// const cardHorlderName = document.getElementById("cardholder");
// cardHorlderName.addEventListener("input", () =>{
//     document.getElementById("card-holder").innerText = cardHorlderName.value;   
// });

// const cardNumber = document.getElementById("cardnumber");
// cardNumber.addEventListener("input", () =>{
//     document.getElementById("card-number").innerText = cardNumber.value;   
// });

// const expiryMonth = document.getElementById("expirydateMM");
// const expiryYear = document.getElementById("expirydateYY");
// expiryMonth.addEventListener("input", () =>{
//     document.getElementById("card-expiry").innerText = expiryMonth.value + "/" + expiryYear.value;   
// });
// expiryYear.addEventListener("input", () =>{
//     document.getElementById("card-expiry").innerText = expiryMonth.value + "/" + expiryYear.value;   
// });

// const cvv = document.getElementById("cvc");
// cvv.addEventListener("input", () =>{
//     document.getElementById("card-cvc").innerText = cvv.value;   
// });