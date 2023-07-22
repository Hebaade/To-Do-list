let submit=document.getElementById('submit');
let input=document.getElementById('input');
let todoItems=document.getElementById('to-do-items');
let trash=document.getElementById('trash');
let taskArray=[]
input.addEventListener('keydown',function(event){
    if(event.key ==="Enter"){
        addItem()
}
})
submit.onclick=function addItem(){
  var divP=document.createElement('div');
  var divC=document.createElement('div');
  var check=document.createElement('i');
  var del=document.createElement('i');
  divP.className='item'
  divP.innerHTML='<div>'+input.value+'</div>'
  check.className='fa-regular fa-square-check'
  check.style.color='lightgrey'
  check.addEventListener('click', function(){
    check.style.color='limegreen'
})
  divC.appendChild(check)
  del.className='fa-solid fa-trash'
  del.style.color='darkgrey'
  del.addEventListener('click', function(){
    divP.remove()
  })
  taskArray.push(divP)
  divC.appendChild(del)
  divP.appendChild(divC)
  todoItems.appendChild(divP)
  input.value=''
}
function addToLocal(taskArray){
    window.localStorage.setItem("tasks",JSON.stringify(taskArray));
  }
  function getFromLocal(){
    let data = window.localStorage.getItem("tasks");
    if(data){
      let tasks = JSON.parse(data)
      addItem(tasks)
    }
  }