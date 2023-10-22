// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้

//1. ให้แก้ไขจำนวนสินค้า Apple จาก 100 เป็น 200
inventory["apple"]["quantity"] = 200;

//2. เพิ่มสินค้าใหม่ที่ชื่อ "orange" ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory["orange"] = { price: 20, quantity: 300};
console.log(inventory);

//3. คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกด้วย Loop
let totalValue = 0
for (let i in inventory) {
    let eachValue;
    eachValue = inventory[i]["price"] * inventory[i]["quantity"];
    totalValue += eachValue;
}
console.log(totalValue);

/*4. สุดท้าย ให้ Log มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อกแสดงออกมาทางหน้าจอ Console ว่า `Total inventory value: <total-value> baht`
- `<total-value>` คือ มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
- เช่น ถ้ามูลค่ารวมที่คำนวณออกมาแล้วเป็น 35000 บาท
- ข้อความควรจะแสดงว่า `Total inventory value: 35000 baht`*/
console.log(`Total inventory value: ${totalValue} baht`);
