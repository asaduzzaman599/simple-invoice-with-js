const date = new Date;
const today = date.toLocaleDateString();
document.getElementById('date').innerText = today;


document.getElementById('submit-button').addEventListener('click', function () {
    const detailInput = document.getElementById('detail-input');
    const detailInputText = detailInput.value;
    if (detailInputText != "") {
        document.getElementById('buyer-info').innerText = detailInputText;
    }
    detailInput.value ='';
    // console.log(detailInputText);
})

document.getElementById('add-item-btn').addEventListener('click', function () {
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementById('price');
    const quantityInput = document.getElementById('quantity');

    const name = nameInput.value;
    const price = Number(priceInput.value);
    const quantity = Number(quantityInput.value);
    const buyerInfo =document.getElementById('buyer-info').innerText;

    if( buyerInfo == '' ){

        alert('Enter Buyer Info Please.')
    }

    if ( nameInput.value != '' && price > 0 && quantity >0) {
        totalPrice = price * quantity;
        const tr = document.createElement('tr');
        const tbody = document.getElementById('item-data');
        tr.innerHTML = `
    
    <th scope="row">${name}</th>
    <td >${price}</td>
    <td>${quantity}</td>
    <td class='total-price'>${totalPrice}</td>
    
    `;

        tbody.appendChild(tr);

        const productPrices = document.getElementsByClassName('total-price');
        let subTotal = 0;
        for (const productprice of productPrices) {
            subTotal = subTotal + Number(productprice.innerText);
        }

        const tax = subTotal / 10;

        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax').innerText = tax;
        document.getElementById('grand-total').innerText = tax + subTotal;
        
    }else if( nameInput.value == '' ){

        alert('Enter The item name Please.')
    }else if(isNaN(price)){
        alert('Enter valid price Please.')
    }else if(isNaN(price)){
        alert('Enter valid quantity Please.')
    }
    nameInput.value = '';
    priceInput.value = '';
    quantityInput.value = '';

})