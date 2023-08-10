document.addEventListener('DOMContentLoaded', () => {
    console.log("here")


    function convertStringToInteger(inputString) {
        var integerValue = parseInt(inputString, 10);
        return integerValue;
      }
function caesarShift() {
    let result = "";
    let num1 = document.getElementById("key").value;

    let shift = convertStringToInteger(num1);
    let text = document.getElementById("text1").value;
    console.log(text)
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      let charCode = char.charCodeAt(0);
  
      if (charCode >= 65 && charCode <= 90) { 
        char = String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { 
        char = String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
      }
  
      
      result += char;
    }
  
    let newText = document.getElementById("text2");
    newText.value = result;
  }

  function caesarDecrypt() {
    let result = "";
    let num1 = document.getElementById("key").value;

    let shift = convertStringToInteger(num1);
    let text = document.getElementById("text1").value;
    console.log(text)
    for (let i = 0; i < text.length; i++) {
      let char = text[i];
  
      let charCode = char.charCodeAt(0);
  
      
      if (charCode >= 65 && charCode <= 90) { // Uppercase letters
        char = String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
        char = String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
      }
  
      result += char;
    }
  
    let newText = document.getElementById("text2");
    console.log(result)

    newText.value = result;
  }

  document.getElementById("btn1").onclick = () => {
    caesarShift();
    
  }

  document.getElementById("btn2").onclick =  () => {
    caesarDecrypt();
  }



})

