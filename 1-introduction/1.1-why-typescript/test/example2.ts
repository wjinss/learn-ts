// 추론된 타입
// let age = 29;
// let message = "안녕 타입스크립트!";
// let isAdmin = true;
// let isNull = null;
// let isUndefined = undefined;

// const를 활용한 타입 추론
const age = 29;
let message = "안녕 타입스크립트!";
const isAdmin = true;
const isNull = null;
const isUndefined = undefined;

message = "const를 사용해서 타입을 추론시키는게 더 효율적이다";

// 배열(Array) 타입
const numbers: number[] = [1, 2, 3];

// 제네릭(Generic) 타입
const number2: Array<number> = [1, 2, 3];

// 튜플(Tuple) 타입
const tuple: [number, string] = [1, "타입스크립트"];

// 제네릭 타입을 사용한 혼합 배열
// - 위의 튜플과 유사하지만, 완전히 동일하지 않음.
const tuple2: Array<number | string> = [1, "타입스크립트"];

// 고정 길이 배열
const fixedLength: [number, number, number] = [1, 2, 3];

// 객체 리터럴 {object literal}
const user = { name: "우진" };
