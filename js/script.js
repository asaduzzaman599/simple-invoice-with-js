
        const date = new Date;
        const today = date.toLocaleDateString();
        document.getElementById('date').innerText = today;


document.getElementById('submit-button').addEventListener('click',function(){
    const detailInput = document.getElementById('detail-input');
    const detailInputText = detailInput.value;
    if(detailInputText != ""){
        document.getElementById('buyer-info').innerText = detailInputText;
    }
    console.log(detailInputText);
})