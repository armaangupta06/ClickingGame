
document.addEventListener("DOMContentLoaded", () => {
    if (typeof(Storage) !== "undefined") {
        if (!localStorage.clickcount) {
          localStorage.clickcount = 0;
        }
        document.getElementById("p1").innerHTML = `Number of times clicked: ${localStorage.clickcount}`;
      } else {
        document.getElementById("p1").innerHTML = `Sorry, your browser does not support Local Storage`;
      }
    document.getElementById("b1").onclick = function() {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.clickcount) {
              localStorage.clickcount = Number(localStorage.clickcount)+1;
            } else {
              localStorage.clickcount = 1;
            }
            document.getElementById("p1").innerHTML = `Number of times clicked: ${localStorage.clickcount}`;
          } else {
            document.getElementById("p1").innerHTML = `Sorry, your browser does not support Local Storage`;
          }
    }

    document.getElementById("b2").onclick = function() {
        if (typeof(Storage) !== "undefined") {
            localStorage.clickcount = 0;
            document.getElementById("p1").innerHTML = `Number of times clicked: ${localStorage.clickcount}`;
          } else {
            document.getElementById("p1").innerHTML = `Sorry, your browser does not support Local Storage`;
          }
    }

        
    

});