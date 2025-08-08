// 교차 타입
type User = { name: string };
type Admin = { role: string };
type UserAdmin = User & Admin;

const adminUser: UserAdmin = {
  name: "yamoo9",
  role: "administrator",
};

const wjinssUser: UserAdmin = {
  name: "우진쓰",
  role: "방문자",
};
