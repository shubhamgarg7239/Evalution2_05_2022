// write js code here corresponding to favourites.html

var favourArr = JSON.parse(localStorage.getItem("favourites")) || [] ; 

// var matchFavArr = 
favouriteFun(favourArr) ;

function favouriteFun(favourArr){
    // console.log(favourArr) ;

    favourArr.forEach(function (ele, i){
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
        td6.innerText = "Delete"
        td6.style.color = "red" ;

        td6.addEventListener("click", function(){
            deleteFunction(ele, i) ;
        }) ;

        tr.append(td1,td2,td3,td4,td5,td6) ;
    
        document.querySelector("table>tbody").append(tr) ;
    })


    function deleteFunction(
        ele, i) {
        favourArr.slice(i,1); 
        localStorage.setItem("favourites", favourArr)
    }
};