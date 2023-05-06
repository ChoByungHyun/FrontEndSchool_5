let start = Date.now();

 const result = async (x) => {
   console.log(`${x}가 실행되는데 걸리는 시간 :  ${Date.now() - start}`);
 };
const asyncBlocking =  () => {
  return new Promise((resolve)=>{
  let i = 0;
  while (i < 9999999) {
    i++;
  }
  resolve("blocking finished");
  })

};

result("동기식코드1");
setTimeout(() => {
  result("timeout finished");
}, 0);

result(asyncBlocking().then((txt)=>{
  result(txt);
}));
result("동기식코드2");
