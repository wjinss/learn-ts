// --------------------------------------------------------------------------
// ✅ TypeScript 함수에서의 `this`
// --------------------------------------------------------------------------

// 문제 1
// `user`라는 객체 리터럴을 만들고, `username` 속성과 `introduce`라는 메서드를 추가하세요.
// `introduce` 메서드는 `this`를 사용하여 `username` 속성을 포함한 자기소개 메시지를 반환해야 합니다.
const user = {
  username: "우진",
  introduce() {
    return `난 ${this.username}이야`;
  },
};

console.log(user.introduce());

// 문제 2
// `Counter`라는 클래스를 만들고, `count` 속성을 0으로 초기화하세요.
// 그리고 `increment`라는 메서드를 추가하여, `this`를 사용해 `count` 값을 1 증가시키세요.
class Counter {
  count: number = 0;
  increment() {
    this.count++;
  }
}

const counter = new Counter();
console.log(counter.count);
counter.increment();
console.log(counter.count);

// 문제 3
// 아래의 `person` 객체를 위해 인사 메시지를 출력하는 `sayHello` 함수를 만드세요.
// 이 함수에서 `this`를 사용하고, `call` 메서드를 사용해 `person` 객체와 함께 `sayHello` 함수를 호출하세요.

const person = { username: "정우진" };

function sayHello(this: { username: string }) {
  console.log(`안녕! 난 ${this.username}이라고 해`);
}

sayHello.call(person);
