

const toDoList =[];

function showList(){
    const list = document.getElementById("list");
 
   list.innerHTML = '';
    
for(const l of toDoList){
    

   const createReminder = document.createElement("div");
    createReminder.classList.add("item");

   const paragraf1 = document.createElement("p");
    paragraf1.style.fontStyle = "italic";
    paragraf1.style.marginLeft = "10px";
    paragraf1Text =  document.createTextNode(l.nDate);
    paragraf1.appendChild(paragraf1Text);
    createReminder.appendChild(paragraf1);

    const paragraf2 = document.createElement("p");
    paragraf2.style.width = "80%";
    paragraf2.style.margin = "auto";
    paragraf1.style.wordWrap = "break-word";
    paragraf2Text =  document.createTextNode(l.nReminder);
    paragraf2.appendChild(paragraf2Text);
    createReminder.appendChild(paragraf2);


    list.appendChild(createReminder);
}
}

function enterNewReminder(){
    const newDate =document.getElementById("newDate").value;
    const newReminder =document.getElementById("newText").value;

  if((newDate)&&(newReminder)){

    const Reminder ={
        nDate: newDate,
        nReminder:newReminder
    }
    toDoList.push(Reminder);  
    
  }
  else{
    alert("Enter value in all fields.");
    }
    showList();
    

    }
    