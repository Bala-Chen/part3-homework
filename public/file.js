
const subBtn = document.getElementById('subBtn');

function getTextImage(){
    const inputText = document.getElementById('testText').value;
    const inputFile = document.getElementById('testFile').files[0];
    const formData = new FormData();
    if (!inputFile.type.match('image/*')){
        console.log("not image")
    } else {
        formData.append('avatar',inputFile);
        formData.append('simpletext',inputText);
        fetch('/images',{method:'POST',body:formData})
        .then((res)=>{
            return res.json()
        })
        .then((resJson)=>{
            if (resJson.error == true){
                console.log("not image")
            } else {
                makeDiv(resJson)
            }
        })
    }
}

subBtn.addEventListener('click',getTextImage)


function makeDiv(data){
    const divArea = document.getElementById('add-div');
    const divBlock = document.createElement('div');
    divBlock.className = "one-block"
    const divP = document.createElement('p');
    divP.textContent = data.textP;
    const divImg = document.createElement('img');
    divImg.src = data.imgUrl;
    divImg.style.width = "100px";
    const divHr = document.createElement('hr');
    divBlock.appendChild(divP);
    divBlock.appendChild(divImg);
    divBlock.appendChild(divHr);
    if (divArea.firstChild){
        divArea.insertBefore(divBlock,divArea.firstChild)
    } else{
        divArea.appendChild(divBlock)
    }
}

