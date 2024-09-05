let headerMoney = document.querySelector('.header-subtitle')
let money = 12434013552490;

function animateValue(obj, start = 0, end = null, duration = 3000) {
    // #region qs/qsa
    if (obj) {
        var textStarting = obj.innerHTML;
        end = end || parseInt(textStarting.replace(/\D/g, ""));
        var range = end - start;
        var minTimer = 50;
        var stepTime = Math.abs(Math.floor(duration / range));
        stepTime = Math.max(stepTime, minTimer);
        var startTime = new Date().getTime();
        var endTime = startTime + duration;
        var timer;

        function run() {
            var now = new Date().getTime();
            var remaining = Math.max((endTime - now) / duration, 0);
            var value = Math.round(end - (remaining * range));
            obj.innerHTML = `У вас сейчас ${value}$.`;
            if (value == end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(run, stepTime);
        run();
    }
    // #endregion
}

// Анимация значения money при перезагрузке страницы
animateValue(headerMoney, 0, money, 2000);

function tovarQuantity(tovar) {
    let minus = tovar.querySelector('.btn-remove');
    let plus = tovar.querySelector('.button-pisa');
    let result = tovar.querySelector('.span-quantity');

    plus.addEventListener('click', () => {
        money -= plus.dataset.value
        result.textContent = parseInt(result.textContent) + 1;
        setTimeout(() => {
            animateValue(headerMoney, parseInt(headerMoney.textContent.replace(/\D/g, "")), money, 1000);
        }, 200);
    });

    minus.addEventListener('click', () => {
        let currentQuantity = parseInt(result.textContent);
        if (currentQuantity > 0) {
            money += parseInt(plus.dataset.value)
            result.textContent = currentQuantity - 1;
            setTimeout(() => {
                animateValue(headerMoney, parseInt(headerMoney.textContent.replace(/\D/g, "")), money, 1000);
            }, 200);

        }
    });
}
let counts = document.querySelectorAll(".tovars-line .tovar");
counts.forEach(tovarQuantity);


























// // let tovarQuantity = 0;
// let money = 12434013552490;

// function minusPrice(event) {
//     const price = event.target.dataset.value;
//     const tovarQuantityObject = parseInt(event.target.nextElementSibling.nextElementSibling)

//     money -= price
//     console.log(money) //Checking
//     headerMoney.textContent = `У вас сейчас ${money}$.`

//     tovarQuantity++
//     console.log(tovarQuantity)
//     tovarQuantityObject.textContent = tovarQuantity
// }

// function plusPrice(event) {
//     const price = event.target.dataset.value;
//     const tovarQuantityObject = parseInt(event.target.nextElementSibling.nextElementSibling)

//     if (money !== 12434013552490) {
//         money += parseInt(price)
//         console.log(money) //Checking
//         headerMoney.textContent = `У вас сейчас ${money}$.`

//         tovarQuantity--
//         console.log(tovarQuantity)
//         tovarQuantityObject.textContent = tovarQuantity
//     }
// }
