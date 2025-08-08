// --------------------------------------------------------------------------
// ✅ Enum 타입과 대체 방법
// --------------------------------------------------------------------------

// 1. Up, Down, Left, Right 네 가지 값을 가지는
//    Direction이라는 enum을 정의하세요.
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// 2. Direction enum을 인자로 받아 switch문을 사용해
//    "위로 이동!"과 같은 문자열을 반환하는 `move` 함수를 만드세요.

console.log(Direction["Up"]);

function move(direction: Direction) {
  switch (direction) {
    case Direction["Up"]:
      return `위로 이동`;
    case Direction["Down"]:
      return `아래로 이동`;
    case Direction["Left"]:
      return `왼쪽으로 이동`;
    case Direction["Right"]:
      return `오른쪽로 이동`;
    default:
      const otherValue: never = direction;
      return otherValue;
  }
}
console.log(move(3));

// 3. Success = 1, Failure = -1, Pending = 0의
//    명시적 값을 갖는 Status라는 enum을 정의하세요.

enum Status {
  Success = 1,
  Failure = -1,
  Pending = 0,
}

// 4. Status enum을 인자로 받아 "오퍼레이션 성공." 또는
//    "오퍼레이션 실패"와 같은 메시지를 반환하는 getStatusMessage 함수를 만드세요.

function getStatusMessage(status: Status) {
  switch (status) {
    case Status.Success:
      return "오퍼레이션 성공";
    case Status.Failure:
      return "오퍼레이션 실패";
    case Status.Pending:
      return "오퍼레이션 진행 중";
    default:
      const otherValue: never = status;
      return otherValue;
  }
}
console.log(getStatusMessage(-1));

// 5. 이번에는 enum 대신 객체 리터럴을 사용해서 동일한 기능을 구현하세요.

const StatusLiteral = {
  Success: 1,
  Failure: -1,
  Pending: 0,
} as const;

// 6. statusLiteral을 인자로 받아서
//    해당 메시지를 반환하는 getStatusMessageLiteral 함수를 만드세요.
function getStatusMessageLiteral(statusLiteral: keyof typeof StatusLiteral) {
  switch (statusLiteral) {
    case "Success":
      return "오퍼레이션 성공";
    case "Failure":
      return "오퍼레이션 실패";
    case "Pending":
      return "오퍼레이션 진행 중";
    default:
      const otherValue: never = statusLiteral;
      return otherValue;
  }
}

console.log(getStatusMessageLiteral("Success"));
