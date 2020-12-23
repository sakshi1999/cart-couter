var allIncrement = document.querySelectorAll('button.additems')
var integersdiv = document.querySelectorAll('div[id=number]')
var carddiv = document.querySelectorAll('div[class=cartbtn]')
console.log(allIncrement, integersdiv)
var values= [0,0,0,0]

// //function for increment
function additems(index){
    console.log(index)
    values[index]+=1 
    const integer = values[index]
    integersdiv[index].innerHTML = integer;
}

//function for decrement
function decitems(index){
    values[index]-=1 
    const integer =  values[index] 
    integersdiv[index].innerHTML = integer;
}
function deleteitems(index){
    integersdiv[index].remove()
    carddiv[index].remove()
    const countheader= document.querySelectorAll('button[class=countbtn]')[0].innerText-1
    document.querySelectorAll('button[class=countbtn]')[0].innerText = countheader
}
// function for refreshing the content
function refresh(){
    location.reload();
}
