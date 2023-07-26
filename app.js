let bill = 0;
let person = 1;
let percentage = 15;

//CALCULATING THE VALUES

let calculatingTip =() => {
    let totalTip = bill*(percentage/100)
    let tipPerson =(totalTip/person).toFixed(2)

    document.getElementById('personTip').innerHTML = '$'+' '+ tipPerson
    document.getElementById('totalTip').innerHTML = '$'+' '+ totalTip.toFixed(2)
}

let handleBill=(event) => {
    bill = event.target.value;
    calculatingTip();
}

let handleCustom=(event) => {
    percentage = event.target.value;
    
    calculatingTip();
}

let handlePerson=(event) => {
    person = event.target.value;
    calculatingTip();
}

let resetAllTip =()=>{
    bill = 0;
    person = 1;
    percentage = 15;

    //Reset the all Values

    document.getElementById('inputBill').value = bill;
    document.getElementById('personInput').value = person;
    document.getElementById('customInput').value = null;

    document.getElementById('personTip').innerHTML ='$0.00' 
    document.getElementById('totalTip').innerHTML = '$0.00'

    let selectedTipButtons = document.getElementsByClassName('selectedTipBtn')[0];
    selectedTipButtons.classList.remove('selectedTipBtn');
 
}
let removeSelectedPercentage=()=>{
    // let selectedTipButn=document.getElementsByClassName('selectedTipBtn')[0]
    // selectedTipButn?.classList.remove('selectedTipBtn')
}
let handleTipBtnClass=(event)=>{
    let clickedTipButton=event.target
    percentage=clickedTipButton.dataset.percent

    let selectedTipBtn=document.getElementsByClassName('selectedTipBtn')[0]
    selectedTipBtn.classList.remove('selectedTipBtn')
    clickedTipButton.classList.add('selectedTipBtn')

    //Reset the custom Percentage Tip

    document.getElementById('customInput').value=null;
    calculatingTip();
}

// Create a Tip Buttons

let tipArray=[5,10,15,25,50]


let createTipButtons=(tipArray)=>{

    let tipBox=document.getElementsByClassName('tipBtnBox')[0]
   

    for(i=0;i<tipArray.length;i++){

        let tipBtn=document.createElement('button')
        if(i==2){
            tipBtn.setAttribute('class','selectedTipBtn tipButton')
        }
        else{
            tipBtn.setAttribute('class','tipButton')
        }
        tipBtn.setAttribute('data-percent',tipArray[i])
        tipBtn.innerHTML=tipArray[i]+'%'
        tipBtn.addEventListener('click',handleTipBtnClass)

        tipBox.append(tipBtn)
    }
}
createTipButtons(tipArray);






