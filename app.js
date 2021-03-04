 var list =document.getElementById("list")
function submitbtn()
{
   var todotext1 = document.getElementById("todoText")
   var li = document.createElement("li")
var listText=document.createTextNode(todotext1.value)
li.appendChild(listText)

var delBtn = document.createElement("button")
var delText =document.createTextNode("DELETE")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)
delBtn.setAttribute("class","button")
li.appendChild(delBtn)

var editBtn = document.createElement("button")
var ediText = document.createTextNode("EDIT")


editBtn.appendChild(ediText) 
li.appendChild(editBtn)
editBtn.setAttribute("onclick","editText(this)")
editBtn.setAttribute("class","button") 
  list.appendChild(li)
  todotext1.value=""
  console.log(li)
}

function deleteItem(f)
{
     f.parentNode.remove()
}
function deleteAll()
{
    list.innerHTML=""
}

function editText(f)
{
    var a = prompt("Enter Edit VAlue")
    f.parentNode.firstChild.nodeValue =a
}