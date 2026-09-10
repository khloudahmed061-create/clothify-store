const addToCartButtons =document.querySelectorAll('.add-to-cart-btn');
const cartCount = document.getElementById('cart-count');
let count = 0 ;
addToCartButtons.forEach(button => {
    button.addEventListener('click' , () => {
        count++;
        cartCount.textContent='Added to Cart';
        button.style.bordercolor = '#d4af37';
        button.style.color='#d4af37';
        setTimeout(( ) =>{
            button.textContent='Add to Cart';
            button.style.bordercolor= '#ffffff';
            1000},


        }
    ,)
    },
const orderForm = document.getElementById('order-form');
const successMessage =document.getElementById('success-message');

orderForm.addEventListener('submit' , (Event)=>{
    event.preventDefault();
    orderForm.style.display ='none';
    successMessage.classList.remove('hidden');
    orderForm.requestFullscreen();
});