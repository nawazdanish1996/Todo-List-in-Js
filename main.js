let input = document.getElementById("input");
let btn = document.getElementById("btn");
let container = document.getElementById("container");

btn.addEventListener('click', function(){
    // create element p
    let paragraph = document.createElement("p");
    paragraph.innerText = input.value;
    container.appendChild(paragraph);
    input.value = "";

    // p line through onclick element p
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through black";
    })
    // ondblclick p element remove
    paragraph.addEventListener("dblclick", function(){
        container.removeChild(paragraph);
    })
})