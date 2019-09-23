var num = -4;
function absoluto(num) {
  if (num <= 0) {
    return num * -1;
  } else {
    return num;
  }
}

console.log(absoluto(num));