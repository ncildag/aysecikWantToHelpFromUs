/**
 * 1.Aysecik HTML'den sayiyi yazi ile girecek.
 * Biz bu yaziyi 10 dan farkini alip ekrana yine yazi ile verecegiz.
 * Farkli bir sayi girerse ona uyari mesaji döndürecegiz.
 * 
 * 
 * function getValue(){

    let givenValue = document.getElementsByClassName("myInput").value;
    let lowerGivenNumber = givenValue.toLowerCase();
    let result = 10-number[''+lowerGivenNumber+''];

    return document.getElementByClassName("writeHere").innerHTML = result;
    
}

 * 
 */


    
function getValue () {
    let number = {'zero': 0, 'one':1,'two':2, 'three':3, 'four':4, 'five':5, 'six':6, 'seven':7, 'eight':8, 'nine':9, 'ten':10};
    
    let givenValue = document.getElementById("myInput").value;
    let lowerGivenNumber = givenValue.toLowerCase();
    let result = 10-number[''+lowerGivenNumber+''];


    if (lowerGivenNumber === undefined) {
        return document.getElementById("writeHere").innerHTML = "You entered wrong chracters or you entered numbers!!!"
        }
    else {
        return document.getElementById("writeHere").innerHTML = "10-your number =" + ""+ result;
    }
    
    
   
}
  





