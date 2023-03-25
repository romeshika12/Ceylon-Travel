function validatingForm(){
    var uname = document.registration.username;
    var ucountry = document.registration.country;
    var uemail = document.registration.email;
    var umsex = document.registration.msex;
    var ufsex = document.registration.fsex;{
        if(allLetter(uname)){
            if(alphanumeric(uadd)){
                if(allnumeric(uzip)){
                    if(countryselect(ucountry)){
                        if(ValidateEmail(uemail)){
                            if(validsex(umsex,ufsex)){
                            }
                
                        }
            
                    }
                }
            }
        }
    }
    return false;
}

function allLetter(uname){
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters)){
        return true;
    }
    else{
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}

function alphanumeric(uadd){
    var letters = /^[0-9a-zA-Z]+$/;
    if(uadd.value.match(letters)){
        return true;
    }
    else{
        alert('User address must have alphanumeric characters only');
        uadd.focus();
        return false;
    }
}

function allnumeric(uzip){ 
    var numbers = /^[0-9]+$/;
    if(uzip.value.match(numbers)){
        return true;
    }
    else{
        alert('ZIP code must have numeric characters only');
        uzip.focus();
        return false;
    }
}

function countryselect(ucountry){
    if(ucountry.value == "Default"){
        alert('Select your country from the list');
        ucountry.focus();
        return false;
    }
    else{
        return true;
    }
}

function ValidateEmail(uemail){
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)){
        return true;
    }
    else{
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function validsex(umsex,ufsex){
    x=0;
    if(umsex.checked){
        x++;
    } 
    if(ufsex.checked){
        x++; 
    }
    if(x==0){
        alert('Select Male/Female');
        umsex.focus();
        return false;
    }
    else{
        alert('Form Succesfully Submitted');
        window.location.reload()
        return true;
    }
}
