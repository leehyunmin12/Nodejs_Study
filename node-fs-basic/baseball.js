import fs from 'fs'
import dayjs from "dayjs";
import "dayjs/locale/ko.js";

dayjs.locale("ko");

const now = dayjs();

let text = [];
let i = 2;

if (process.argv[2] === "list") {
  const text = fs.readFileSync("baseballList.txt", "utf-8");
  console.log("=== 무적 LG ===");
  console.log(text);
} else if (process.argv[5] && !process.argv[6]) {
  for (let i = 3; i <= 5; i++) text.push(process.argv[i]);
  fs.appendFileSync(
    "baseballList.txt",
    now.format("YYYY-MM-DD HH:mm:ss") + "\n",
  );
  fs.appendFileSync("baseballList.txt", text.join(" | ") + "\n");
  if(text.toString().includes("승리")) console.log("승리를 축하합니다~");
  console.log("무적 LG 화이팅~")
} else {
  console.log(
    "node app.js add “경기명” “결과” “한줄평” 또는 node app.js list 형식으로 입력해주세요.",
  );
}
