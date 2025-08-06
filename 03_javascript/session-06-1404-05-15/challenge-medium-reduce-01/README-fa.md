# 🎯 چالش متوسط: ماشین حساب سبد خرید (مرحله ۵ - آرایه‌ها .reduce())

## 📝 توضیحات

ایجاد ماشین حساب جامع سبد خرید با استفاده از `.reduce()` برای محاسبه مجموع، مالیات و ایجاد خلاصه از آرایه‌ای از آیتم‌های سبد.

## 🎯 اهداف

- استفاده از `.reduce()` با اشیاء پیچیده
- انجام محاسبات متعدد در یک reduce
- ایجاد اشیاء خلاصه به عنوان accumulator

## 📋 الزامات

1. یک آرایه به نام `cartItems` با این اشیاء ایجاد کنید:

   ```javascript
   [
     {name: "Laptop", price: 800, quantity: 1, category: "Electronics"},
     {name: "Mouse", price: 25, quantity: 2, category: "Electronics"},  
     {name: "Book", price: 15, quantity: 3, category: "Books"},
     {name: "Headphones", price: 100, quantity: 1, category: "Electronics"}
   ]
   ```

2. از `.reduce()` استفاده کنید تا محاسبه کنید:
   - ارزش کل سبد (قیمت × تعداد برای هر آیتم)
   - تعداد کل آیتم‌ها
   - مجموع بر اساس دسته‌بندی
   - گران‌ترین آیتم تکی

3. ۱۰٪ مالیات به مجموع نهایی اضافه کنید

4. تفکیک کاملی نمایش دهید

## 💡 خروجی نمونه

```javascript
Cart Summary:
- Total Items: 7
- Subtotal: $995
- Tax (10%): $99.50  
- Final Total: $1094.50

Category Breakdown:
- Electronics: $925 (4 items)
- Books: $45 (3 items)

Most Expensive Item: Laptop ($800)
```

## 🚀 اضافی

- نرخ مالیات مختلف بر اساس دسته‌بندی اعمال کنید
- محاسبات تخفیف اضافه کنید
- فرمت رسید کامل ایجاد کنید

## ✅ موضوعات مورد انتظار

- متد `.reduce()` با اشیاء
- الگوی Object accumulator
- محاسبات ریاضی
- تبدیل داده‌های پیچیده
