// 獲取顯示屏元素
let display = document.getElementById('screen');

// 清空顯示屏
const wipe = () => {
  display.value = '';
}

// 將按鈕上的符號或數字顯示在顯示屏上
const show = (n) => {
  display.value += n;
}

// 計算表達式，並在顯示屏上顯示結果
const calc = () => {
  display.value = eval(display.value);
}
