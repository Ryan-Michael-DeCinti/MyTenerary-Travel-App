function buttonColor1(){
    document.getElementById("select-1").style.backgroundColor = '#A29BFF';
    document.getElementById("select-2").style.backgroundColor = '#FFFFFF';
}

function buttonColor2(){
    document.getElementById("select-3").style.backgroundColor = '#FFFFFF';
    document.getElementById("select-4").style.backgroundColor = '#A29BFF';
}

function signUpForm() {
    document.getElementById("sign-up-container").style.display = "block";
  }

function loginForm(){
    document.getElementById("sign-up-container").style.display = 'none';
} 

function login(form){
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if((user == "test") && (pass == "test")){
      self.location.href = "home.html";
      }
      else{
        alert("Username or Password is incorrect!");
        return false;
      }
  }

