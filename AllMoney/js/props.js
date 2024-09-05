// //Initialition var
// let headerText = document.querySelector('.header-text')
// let headerMoney = document.querySelector('.header-subtitle')
// let money = 12434013552490;

// let tovarQuantity = document.querySelector('.span-quantity');
// let cart = {};

// let basketQuantity = document.querySelector('.basket-quantity-zero')


// headerMoney.textContent =`У вас сейчас ${money}$.`

// function animateValue(obj, start = 0, end = null, duration = 3000) {
//   if (obj) {

//       var textStarting = obj.innerHTML;

//       end = end || parseInt(textStarting.replace(/\D/g, ""));

//       var range = end - start;

//       var minTimer = 50;

//       var stepTime = Math.abs(Math.floor(duration / range));

//       stepTime = Math.max(stepTime, minTimer);

//       var startTime = new Date().getTime();
//       var endTime = startTime + duration;
//       var timer;

//       function run() {
//           var now = new Date().getTime();
//           var remaining = Math.max((endTime - now) / duration, 0);
//           var value = Math.round(end - (remaining * range));

//           obj.innerHTML = textStarting.replace(/([0-9]+)/g, value);
//           if (value == end) {
//               clearInterval(timer);
//           }
//       }

//       timer = setInterval(run, stepTime);
//       run();
//   }
// }

// // Анимация при перезагрузке страницы
// const valueElement = document.getElementById('value');
// animateValue(valueElement, valueElement.textContent.replace(/\D/g, ""), money);



// function minusPrice(event) {
//   const productId = event.target.dataset.value;
//   const quantityElement = event.target.nextElementSibling;
//   const price = event.target.dataset.value;

//   if (!cart[productId]) {
//     cart[productId] = 0;
//   } else {
//     money -= price
//     headerMoney.textContent =`У вас сейчас ${money}$.`
//     quantityElement.textContent = cart[productId];
//     console.log(money)

//     cart[productId]++;
//     console.log(cart)
//   } 
  
//   // const valueElement = document.getElementById('value');
//   // animateValue(valueElement, valueElement.textContent.replace(/\D/g, ""), money);
// }



// function plusPrice (event) {

//   const productId = event.target.dataset.value;
//   const quantityElement = event.target.nextElementSibling;
//   const price = event.target.dataset.value;

//   const currentQuantity = parseInt(quantityElement.textContent);

//     if (currentQuantity > 0 && money !== 12434013552490) {
//       money += price;
//       quantityElement.textContent = currentQuantity - 1;
//     }

//   //   const productId = event.target.dataset.value;
//   // const quantityElement = event.target.nextElementSibling.nextElementSibling

//   // if (cart[productId] > 0) {
//   //   money += parseInt( productId)
//   //   cart[productId]--;  
//   //   headerMoney.textContent =`У вас сейчас ${money}$.`
//   //   quantityElement.textContent = parseInt(cart[productId]) 
//   // }

//     const oldValue = money;

//     // num--;
//     // tovarQuantity.innerHTML = num;
//     // console.log(num)


//     if(tovarQuantity > 0) {
//       tovarQuantity -= 1;
//       console.log(tovarQuantity)
//     }
    
//   //   const valueElement = document.getElementById('value');
//   // animateValue(valueElement, valueElement.textContent.replace(/\D/g, ""), money);
//   }
  


//   function returnMoney() {
//     money = 0;
//     money = 12434013552490;
//     headerMoney.textContent =`У вас сейчас ${money}$.`
//     console.log(money)
//   }
  



//   function busketOnMouseOver() {
//     const busketModalWalpapper = document.querySelector('.busket-modal-walpapper');
//     busketModalWalpapper.style.display = 'inherit';
//   }


  
 

  




















//   ////Test props

//   // let tovarQuantityValue = parseInt(tovarQuantity.dataset.value) 
//   // innerHTML.tovarQuantityValue++ 
//   // tovarQuantity.innerHTML = tovarQuantityValue
//   // console.log(tovarQuantityValue)
  

//   // let tovarQuantityValue = parseInt(tovarQuantity.dataset.value)
//   // tovarQuantityValue += parseInt(1)
//   // tovarQuantity.innerHTML = tovarQuantityValue
//   // console.log(tovarQuantity.dataset.value + 1)
//   // console.log(document.querySelector('.btn-plus-minus'))




