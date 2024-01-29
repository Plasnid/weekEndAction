console.log("My Weekend Activities");

const bodyTag = document.querySelector("body");
let myHeader = document.createElement("header");
bodyTag.appendChild(myHeader);
myHeader.innerHTML = `<h1>Weekend Activities</h1>`;
//* initializing our weekend todo list
let toDoList = ["watching TV", "convenience store shift","gym"];
toDoList.push("football");
toDoList.unshift("groceries");
console.log(toDoList);
/**
 * * add a ul tag onto the body
 * * some kind of loop to
 *      * a an li into our ul for each to do
 *      * have each li listen for clicks and call a message
 */
let list = document.createElement("ul");
bodyTag.appendChild(list);
for(let i=0;i<toDoList.length;i++){
    console.log(toDoList[i]);
    if(toDoList[i]=="groceries"){
        purchaseIcecream();
    }
    let listItem = document.createElement("li");
    listItem.innerText = toDoList[i];
    list.appendChild(listItem);
};
/**
 * * < less than
 * * > greater than
 * * <= less than or equal to
 * * >= greater than or equal to
 * * == compare value
 * * !== isn't equal to 
 * * === compare value and datatype
 */


function purchaseIcecream(){
    let doIFeelWeirdToday = Math.random();
    let weirdDessert = ["black sesame", "smoked chocolate", "red wine and mustard", "roasted garlic", "babaganoushe", "candied bacon"]
    if(doIFeelWeirdToday<=.7){
        // * get the weird icecream
        let randNum = Math.floor(weirdDessert.length*Math.random())
        let myIcecream = weirdDessert[randNum];
        console.log(`my icecream today is ${myIcecream}`)
    }
    else{
        console.log("I got vanilla!");
    }
}



