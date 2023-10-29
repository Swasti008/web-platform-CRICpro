const poptext = document.getElementsByTagName("span");
console.log(poptext);//It will console the list of every span text
let counter=0
function popup(index){
    if (counter%2==0){
        poptext[index].style.display="block";
        counter++;
    }
    else{
        poptext[index].style.display="none";
        counter++;
    }
    
}
//The function popup will create a functionality that will create a popup
// when you click the respective span text and will go ,when you will click the same text once again.