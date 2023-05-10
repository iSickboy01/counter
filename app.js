let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(buttons);

function buttons (btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;  
        }
        else if (styles.contains("increase")) {
            count++;    
        }
        else{
            count = 0; 
        };
        if (count>0){
            value.style.color = "blue"; 
        }
        else if (count < 0){
            value.style.color = "orange";
        }
        else{
            value.style.color = "aqua";
        }

        value.textContent = count;
    });

};