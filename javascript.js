window.onload = function(){
  //variables
  var form = document.getElementById("form");
  var input = document.getElementById('input');
  var btn = document.getElementById('btn');
  var list = document .getElementById('list');
  var id = 1;

   //button event listener
   btn.addEventListener("click", addTodoItem);
   form.addEventListener("submit", addTodoItem);
   //list event list event listener
    list.addEventListener("change",boxCheked)
   // add todo item to list
   function addTodoItem(){
     if(input.value === ""){
       alert("you must enter some value")
     }
     else{
      if(list.style.borderTop === ""){
        list.style.borderTop = "2px solid white";
      }
      var text = input.value;
      var item = `<li id="li-${id}">${text}
                  <input id="box-${id}" class="checkboxes" type="checkbox"></li>`;
                  list.insertAdjacentHTML('beforeend',item);
                  id++;
                  form.reset();
    }
  }
  function boxCheked(){const element = event.target;
    if(element.type === "checkbox"){
      element.parentNode.remove();
    }
}
}
