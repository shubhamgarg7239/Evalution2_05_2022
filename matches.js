// write js code here corresponding to matches.html

var formArr =JSON.parse(localStorage.getItem("schedule")) || [] ;

var favourArr = JSON.parse(localStorage.getItem("favourites")) || [] ; 

matchFunction(formArr) ;

function matchFunction(formArr) {
    formArr.forEach(function (ele){
        var tr =document.createElement("tr") ;
    
        var td1 =document.createElement("td") ;
        td1.innerText = ele.Number ;
    
        var td2 =document.createElement("td") ;
        td2.innerText = ele.Team_A ;
    
        var td3 =document.createElement("td") ;
        td3.innerText = ele.Team_B;
    
        var td4 =document.createElement("td") ;
        td4.innerText = ele.Date ;
    
        var td5 =document.createElement("td") ;
        td5.innerText = ele.venue ;
    
        var td6 =document.createElement("td") ;
        td6.innerText = "Add as favourite"
        td6.style.color = "green" ;
        
        // var button = document.createElement("button") ;
        // button.innerText = "Add Favourite" ;
        // td6.append(button) ;

        td6.addEventListener("click", function(){
            // favouriteFunction(ele ) ;

            favourArr.push(ele) ;
            console.log(favourArr) ;

            localStorage.setItem("favourites", JSON.stringify(favourArr)) ;
        }) ;

    
         tr.append(td1,td2,td3,td4,td5,td6) ;
    
        document.querySelector("table>tbody").append(tr) ;
    });
    
    // function favouriteFunction(ele){
    //     // console.log(ele) ;
       
    // }
    
}