// write js code here corresponding to index.html
// You should add submit event on the form

var formArr  =JSON.parse(localStorage.getItem("schedule")) || [] ;

document.querySelector("form").addEventListener("submit",masaiFormFunction) ;

function masaiFormFunction(){
    event.preventDefault() ;
    
    var formObj = {
        Number: masaiForm.matchNum.value ,
        Team_A : masaiForm.teamA.value,
        Team_B : masaiForm.teamB.value ,
        Date : masaiForm.date.value ,
        Venue : masaiForm.venue.value ,
    }
    formArr.push(formObj);
    // console.log(formArr) ;
    localStorage.setItem("schedule", JSON.stringify(formArr)) ;
    
}