var billAmount=document.querySelector("#bill-amount")
var cashGiven=document.querySelector("#cash-given")
var checkButton=document.querySelector(".check-button")
var errorMessage=document.querySelector(".error-message")
const noofnotes=document.querySelectorAll(".no-of-notes")

var availCash=[2000,500,100,20,10,5,1];

function calculateReturn(returnAmount)
{
    for(let i=0;i<availCash.length;i++)
    {
        var notesNumber=Math.trunc(returnAmount/availCash[i]);
        returnAmount=returnAmount % availCash[i];
        noofnotes[i].innerText=notesNumber;
    }
}

function showMessage(msg)
{
    errorMessage.style.display="block";
    errorMessage.innerText = msg;
}
//console.log(billAmount.value);

checkButton.addEventListener("click", function validate(){
   errorMessage.style.display="none";
    if(billAmount.value > 0)
    {
        if(cashGiven.value >= billAmount.value)
        {
            const amounttobeReturned = cashGiven.value -billAmount.value;
               calculateReturn(amounttobeReturned);

        }else{
            showMessage("The cash provided is less then bill");
        }
    } else {
        
        showMessage("Invalid Bill Amount");
        
    }
})

