document.addEventListener("DOMContentLoaded",function(){
    const color_box= document.getElementById("color-box")
    const btn= document.getElementById("change-color-btn")

    function getRandomColor(){
        const hex = "0123456789ABCDEF";
        let color="#"

        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)]
        }
        return color
    }

    btn.addEventListener("click",function(){
        color_box.style.backgroundColor = getRandomColor();
    })
})