// --------------------------------------------------------------------------
// ✅ TypeScript에서 객체 타입
// --------------------------------------------------------------------------

// 질문 1: 다음과 같은 속성을 가진 책(book)을 객체 리터럴로 만드세요.
// - title: string
// - author: string
// - pages: number

const book = {
  title: "전나무와 매",
  author: "전민희",
  pages: 123094127890,
};

// 질문 2: book 객체 리터럴에 다른 속성을 추가하려고 하면 TypeScript가 허용할까요?
// 놉. 타입 추론을 사용해서 속성 추가 시 오류 발생함. 인덱스 시그너처를 추가해야됨

// 질문 3: 다음과 같은 속성을 가진 `Car` 인터페이스를 정의하세요.
// - make: string
// - model: string
// - year: number
// 그런 다음 이 인터페이스를 따르는 객체를 만드세요.

interface Car {
  make: string;
  model: string;
  year: number;
}

const camaro: Car = {
  make: "쉐보레",
  model: "카마로",
  year: 2010,
};

// 질문 4: `Car`와 동일한 형태를 가진 타입 별칭 `Car2`를 정의하세요.
// 그리고 이 타입 별칭을 따르는 객체를 만드세요.

type Car2 = {
  make: string;
  model: string;
  year: number;
};

const camaro2: Car2 = {
  make: "쉐보레",
  model: "2019 카마로",
  year: 2019,
};

// 질문 5: `Car`와 동일한 형태를 가지면서,
// 추가적인 어떤 프로퍼티도 허용하는 `Car3` 인터페이스를 만드세요.

interface Car3 {
  make: string;
  model: string;
  year: number;
  price?: number;
  [key: string]: any;
}

const camaro3: Car3 = {
  make: "쉐보레",
  model: "카마로",
  year: 2012,
  price: 23230,
  color: "범블비 옐로우",
};
