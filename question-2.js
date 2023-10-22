// Question #2: User Task List

const userTaskList = [
  { id: 1, task: "Buy groceries" },
  { id: 2, task: "Finish homework" },
  { id: 3, task: "Call mom" },
  { id: 4, task: "Wash dishes" },
];

// เริ่มเขียนโค้ดตรงนี้
/*1) เพิ่ม Task ใหม่ชื่อว่า `"Walk the dog"` ไปที่ส่วนท้ายของ `userTaskList` 
ซึ่ง Task นี้จะมี `id` เป็น `5`
*/
userTaskList.push({ id: 5, task: "Walk the dog" })
console.log(userTaskList);

/*2) ให้แก้ไขชื่อ Task ที่มี `id` เป็น `4` จาก `"Wash dishes"` เป็น 
`"Go to the gym"`  */
const editTaskList = userTaskList.find(item => item.id == 4);
console.log(editTaskList);
editTaskList["task"] = "Go to the gym";
console.log(userTaskList);

//3) ลบ Task สุดท้ายที่อยู่ใน Array ออก
userTaskList.pop();
console.log(userTaskList);

/*4) ให้ Log ข้อความของ Task ตัวสุดท้ายที่อยู่ในรายการออกมาบนหน้าจอ Console
- ผลลัพธ์ที่แสดงบนหน้าจอ Console จะแสดงแบบนี้ 
`"Task id: 4, Go to the gym"`  */
console.log(`Task id: ${userTaskList.length}, ${userTaskList[userTaskList.length-1]["task"]}`);
