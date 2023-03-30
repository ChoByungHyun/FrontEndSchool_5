let text1 = "aa bb cc dd";
let text2 = "aa-bb-cc-dd";
let text3 = "aa,bb,cc,dd";
let text4 = "aa,bb-cc-dd"; // 중급자 분들만 하세요.
// ['aa', 'bb', 'cc', 'dd']

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text4);

console.log(text1.split(" "));
console.log(text2.split("-"));
console.log(text3.split(","));
console.log(text4.replace(",", "-").split("-"));
