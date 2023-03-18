const  container = document.querySelector(".container");
const  refreshBtn = document.querySelector(".refresh-botton");
const maxPaletteBoxes = 30;

const generatePalette = () =>{
    container.innerHTML = "";
    for(let i= 0;i<maxPaletteBoxes;i++)
    {
        let randomHex = Math.floor(Math.random()* 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;
        
        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
        <span class="hex-value">${randomHex}</span>`;
        
        // adding click event to current li element to cpy the color 
        color.addEventListener("click" , ()=>copyColor(color , randomHex));

        container.appendChild(color);
        // setTimeout(()=>colorElement.innerText = hexVal , 1000);

    }
   
}
generatePalette();

const copyColor = (elem , hexVal)=>{
     const colorElement = elem.querySelector(".hex-value");

// copied the hex value updated the text to copied 
// and changing text back to original hex value after 1 second 


     navigator.clipboard.writeText(hexVal).then(()=> {
        colorElement.innerText = "Copied";
        setTimeout(()=>colorElement.innerText = hexVal , 1000);
     }).catch(()=>alert("Failed to Copy the color code ! "));
}

refreshBtn.addEventListener("click", generatePalette);
