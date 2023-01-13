//Range
const input = document.querySelector('#square-input'); // i1 - input
const range = document.querySelector('#square-range'); //rng - это ползунок
const inputs = document.querySelectorAll('input');
//Радио Кнопки
const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');
//ЧекБокс Кнопки
const checkBoxPlus = document.querySelector('.plus');
const checkBox = document.querySelectorAll('input[name="active"]');

//Старт
let basePrice = 6000;

//Элемент в который пушат данные
const totalPriceElement = document.querySelector('#total-price');

//Слушатель событий
range.addEventListener('input', function(){
  input.value = range.value 
});
input.addEventListener('input', function(){
  range.value = input.value 
});

//Результат 
function calc(){
  let totalPrice = basePrice * parseInt(input.value);

  for(const radio of radioType){
    if(radio.checked === true){
      totalPrice = totalPrice *  parseFloat(radio.value);
    }
  }
  for(const radio of radioBuilding){
    if(radio.checked === true){
      totalPrice = totalPrice *  parseFloat(radio.value);
    }
  }
  for(const radio of radioRooms){
    if(radio.checked === true){
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }
  if(checkBoxPlus.checked === true){
    totalPrice = totalPrice * parseFloat(checkBoxPlus.value);
  }
  for(const radio of checkBox){
    if(radio.checked === true){
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  //Форматирует число и отступ
  const formatter = new Intl.NumberFormat('ru');
  //Push Total
  totalPriceElement.innerText = formatter.format(totalPrice);
}calc();

//Слушатель всех Инпутов
for(const input of inputs){ //Обновляет данные.
  input.addEventListener('input', function(){
    calc();
  });
}




