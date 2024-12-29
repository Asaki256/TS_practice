// npx tsc
  // トランスパイル
// npx tsc -w
  // 保存のたびにコンパイル。--watchでも可。
// node dist
  // JS実行

const message: string = "Hello world!";
// message = 12;
const test: number = 123
// console.log(test);

// console.log(message);
// console.log(message);

const result = console.log('test');
console.log(result);

console.log(typeof console.log);
console.log(Object.getOwnPropertyDescriptor(console, 'log'));

const boundLog = console.log.bind(null);
console.log(boundLog);

console.log(console.log('test'));