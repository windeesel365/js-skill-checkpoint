// Question #6: Calculating Total Price in User's Cart

function filterInStockProducts(products) {
  // เริ่มเขียนโค้ดตรงนี้
  return products.filter(product => (product.quantity > 0));
}

/*
- กำหนดให้มี Array ของ Object สินค้า ชื่อว่า `products`
- ให้เขียน Function `filterInStockProducts` 
  ที่รับ Parameter เป็น Array ของ Object สินค้า
- Function `filterInStockProducts` 
  ทำหน้าที่ในการกรองสินค้าที่หมดสต็อก (quantity เป็น 0)
    - Function จะ Return ผลลัพธ์ออกมาเป็น Array อันใหม่
                         ที่มี Value เป็นสินค้าที่มี `quantity` มากกว่า 0

*/

// ตัวอย่างการใช้งาน
const products = [
  { name: "apple", quantity: 2 },
  { name: "banana", quantity: 0 },
  { name: "orange", quantity: 5 },
];

console.log(filterInStockProducts(products));
// ผลลัพธ์ที่ได้จากการ Execute Function คือ
// [{ name: "apple", quantity: 2 }, { name: "orange", quantity: 5 }]
