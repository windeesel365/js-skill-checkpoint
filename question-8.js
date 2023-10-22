// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
let newUsers;  //declare newUsers ก่อน

function extractName(data) {
    let extracted = data.reduce((acc, curr) => {
                                acc.push(curr.name);
                                return acc;
                                }, []);
    return extracted;
}

async function fetchUserData() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json();  //ได้เป็น Array เริ่มต้น
        newUsers = extractName(data); //แปลง Array extract only name
        return newUsers;

    }catch(error){
        console.log(error);
    }
    
}

async function main() {
    newUsers = await fetchUserData();  //async await เพื่อให้รอ process  ก่อน console.log 
    console.log(newUsers);
}

main();

/*
- ให้ Fetch ข้อมูล User จาก Server ของ Jsonplaceholder 
    ด้วย Built-in `fetch` Function
- โดยกำหนดให้ Endpoint ในการ Fetch ข้อมูล User เป็น 
   `https://jsonplaceholder.typicode.com/users`
- จากนั้น ให้แปลงโครงสร้างข้อมูลที่ได้จาก Server ให้เป็น Array ของชื่อ User 
   แล้วเก็บไว้ใน Variable ชื่อว่า `newUsers`

- แล้วให้ Log ดู Value ของ `newUsers` มาแสดงบนหน้าจอ Console

- ผลลัพธ์ที่แสดงบน Console จะเป็น
[ 'Leanne Graham', 'Ervin Howell', 'Clementine Bauch',
'Patricia Lebsack', 'Chelsey Dietrich', 'Mrs. Dennis Schulist',
'Kurtis Weissnat', 'Nicholas Runolfsdottir V', 'Glenna Reichert', 
'Clementina DuBuque' ]
*/