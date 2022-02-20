let i = 1;
function genereaza(){
    if(i > 10){
        return;
    }
        selectElement = document.getElementById('selector');
        output = selectElement.value;
        var divImagine = document.getElementById('imagine-generata');
        var imagine = document.createElement('img');
        imagine.src = `/imagini/${output}.png`;
        imagine.width = '200';
        imagine.height = '200';
        imagine.id = `imagine-${i}`
        divImagine.appendChild(imagine);
        i++;
}