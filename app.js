function convert() {
    const select = document.getElementById("unit");
    const unit = select.options[select.selectedIndex].value;
    const div_result = document.getElementById("result");
    let quantity = document.getElementById("quantity").value;

    const speed = document.getElementById("speed").value; //en Mo/s

    if (unit === "go") {
        quantity = quantity * 1000; //convert in Mo
        let time = quantity / speed;
        time = time / 60;
        time = Math.round(time * 100) / 100;

        if(isNaN(time) === true){
            console.log('Error');
        }
        else{
            div_result.innerHTML = time + "  minutes remaining";
        }
    } 
    else {
        let time = quantity / speed;
        time = time / 60;
        time = Math.round(time * 100) / 100;

        if(isNaN(time) === true){;
            console.log('Error')
        }
        else{
            div_result.innerHTML = time + "  minutes remaining";
        }
    }
}
