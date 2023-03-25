function value() {
  const name = document.forms["type"]["name"].value;
  const email = document.forms["type"]["email"].value;
  const query = document.forms["type"]["query"].value;

  var subject = document.forms[0];
  var text = "";
  var i;
  for (i = 0; i < subject.length; i++) {
    if (subject[i].checked) {
      text = text + subject[i].value + " ";
    }
  }
  var listbox = document.getElementById("query-form");
  var detailsbox = document.getElementById("details");
 
  document.getElementById('NAME').innerHTML = name;
  document.getElementById('EMAIL').innerHTML = email;
  document.getElementById('SUBJECT').innerHTML = text;
  document.getElementById('ISSUE').innerHTML = query;
 
  if (!(name == "" || name == " ")) {
  if(!( document.type.email.value == "" )) {
  if (!( ( type.subject[0].checked == false ) && ( type.subject[1].checked == false ) && ( type.subject[2].checked == false ))) {
  if (!(document.type.query.value == "")) {
    listbox.style.display = "none";
    detailsbox.style.display = "block";
    return false;
  } else {
  alert("Please fill in your issue details")
  return false;
    }    
    } else {
    alert ( "Please select Nationality" );
return false;
    }
        } else {
        alert( "Please enter your Email" );
            document.type.email.focus() ;
            return false;
        }
    } else {
    alert("Please enter your name");
    return false;
    }
}

function edit() {
var listbox = document.getElementById("query-form");
  var detailsbox = document.getElementById("details");

  listbox.style.display = "block";
detailsbox.style.display = "none";

return false;

}

