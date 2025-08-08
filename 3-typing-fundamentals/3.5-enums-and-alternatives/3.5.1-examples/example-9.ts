// enum 대신, const 객체를 사용하는 방법도 고려해보세요.
const Colors = {
  Red: "red",
  Green: "green",
  Blue: "blue",
} as const;

console.log(typeof Colors);

// 함수에 컬러 목록을 전달하려면 keyof typeof를 사용합니다.
// keyof typeof Colors : "Red" | "Green" | "Blue"
function printColors(color: keyof typeof Colors) {
  const colorValue = color;
  //    ^?
  console.log(colorValue);
}

printColors("Green");
