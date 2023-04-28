function checkForm(el){
    var name = el.name.value;
    var pass = el.pass.value;
    var state = el.state.value;
    var fail = ""

    if(name == "" || pass == "" || state == ""){
        fail = "Заполните поля";
    }
    else if(name.length <=1 || name.length > 50){
        fail = "Invalid name";
    }
    else if(pass.split("&").length > 1){
        fail = "Invalid password";
    }
    if(fail != ""){
        document.getElementById('error').innerHTML = fail;
        return false;
    }
    else{
        window.location = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
       
    }
    return false;
}
    