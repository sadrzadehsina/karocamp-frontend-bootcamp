# 🎯 چالش متوسط: فیلتر نمرات دانشجو (مرحله ۵ - آرایه‌ها .filter())

## 📝 توضیحات

استفاده از متد `.filter()` برای یافتن دانشجویان بر اساس معیارهای متعدد از آرایه‌ای از اشیاء دانشجو.

## 🎯 اهداف

- استفاده از `.filter()` با اشیاء پیچیده
- اعمال شرایط فیلتر متعدد
- کار با ویژگی‌های تودرتو شیء

## 📋 الزامات

1. یک آرایه به نام `students` با این اشیاء ایجاد کنید:

   ```javascript
   [
     {name: "Alice", grade: 85, age: 20, major: "Computer Science"},
     {name: "Bob", grade: 92, age: 19, major: "Mathematics"},
     {name: "Charlie", grade: 78, age: 21, major: "Computer Science"},
     {name: "Diana", grade: 88, age: 20, major: "Physics"},
     {name: "Eve", grade: 95, age: 22, major: "Computer Science"}
   ]
   ```

2. سه آرایه فیلتر شده ایجاد کنید:
   - `highGradeStudents`: دانشجویان با نمره >= ۹۰
   - `csStudents`: دانشجویان رشته "Computer Science"
   - `youngHighAchievers`: دانشجویان سن <= ۲۰ و نمره >= ۸۵

3. تمام نتایج فیلتر شده را همراه با تعداد نمایش دهید

## 💡 خروجی نمونه

```javascript
High Grade Students (>=90): [Bob, Eve] (2 students)
CS Students: [Alice, Charlie, Eve] (3 students)  
Young High Achievers (<=20 & >=85): [Alice, Diana] (2 students)
```

## 🚀 اضافی

- تمام شرایط را در یک فیلتر ترکیب کنید
- فیلتر بر اساس بازه نمرات (۸۰-۹۰)
- تابع جستجو بر اساس نام ایجاد کنید

## ✅ موضوعات مورد انتظار

- متد `.filter()` با اشیاء
- اپراتورهای منطقی (&&, ||)
- دسترسی به ویژگی‌های شیء
- شرایط فیلتر متعدد
