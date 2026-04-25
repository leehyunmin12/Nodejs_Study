import dayjs from "dayjs";
import "dayjs/locale/ko.js";

dayjs.locale("ko");

const now = dayjs();
console.log(now);
console.log(now.format("YYYY-MM-DD"));
console.log(now.format("YYYY년 MM월 DD일"));
console.log(now.format("YYYY-MM-DD HH:mm:ss"));

//7일 후
const nextWeek = now.add(7, "day");
console.log("일주일 후: ", nextWeek.format("YYYY년 MM월 DD일 dddd"));
