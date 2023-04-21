var row = 1;

var btn = document.getElementById("submit")

btn.addEventListener("click", displayElement)


function displayElement(event){
    event.preventDefault();
    var name = document.getElementById("first-name").value;
    var lastname = document.getElementById("last-name").value;
    var address = document.getElementById("address").value;
    var State = document.getElementById("State").value;
    var Country = document.getElementById("Country").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector(`input[name="gender"]:checked`).value;
    var foodList = [];
    var list = document.getElementsByName(`flist`)
    for(var i =0; i<list.length; i++){
        if(list[i].checked){
            foodList.push(list[i].value);
        }
    }

    if(foodList.length<2)
    {
        alert("please select two food items")
        return;
    }

    if(!name || !lastname || !address || !State || !Country || !pincode ||!gender || !foodList)
    {
        alert("please fill all the required fields")
        return;
    }
   var table = document.getElementById(`table`)
   var newrow = table.insertRow(row)
   var cell1 = newrow.insertCell(0);
   cell1.textContent = name;
   var cell2 = newrow.insertCell(1);
   cell2.textContent = lastname
   var cell3 = newrow.insertCell(2);
   cell3.textContent = address
   var cell4 = newrow.insertCell(3);
   cell4.textContent = State
   var cell5 = newrow.insertCell(4);
   cell5.textContent = Country
   var cell6 = newrow.insertCell(5);
   cell6.textContent = pincode;
   var cell7 = newrow.insertCell(6);
   cell7.textContent = gender
   var cell8 = newrow.insertCell(7);
   cell8.textContent = foodList
   row++;
   let form = document.getElementById("form")
   form.reset();


}