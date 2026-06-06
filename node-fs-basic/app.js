const fs = require("fs");

let text = [];
let i = 2;

if (!process.argv[2]) {
  console.log("입력값을 적어주세요!");
} else {
  while (process.argv[i]) {
    text.push(process.argv[i]);
    i++;
  }
  fs.appendFileSync("study-log.txt", text.join(" ") + "\n");
  console.log("내용이 추가되었습니다.");
}
