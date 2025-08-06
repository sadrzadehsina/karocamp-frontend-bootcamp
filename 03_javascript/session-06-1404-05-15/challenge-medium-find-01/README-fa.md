# 🎯 چالش متوسط: موتور جستجوی محصول (مرحله ۵ - آرایه‌ها .find())

## 📝 توضیحات

ایجاد سیستم جستجوی محصول با استفاده از متد `.find()` با معیارهای جستجوی پیچیده و ویژگی‌های متعدد.

## 🎯 اهداف

- استفاده از `.find()` با اشیاء پیچیده
- پیاده‌سازی معیارهای جستجوی متعدد
- مدیریت انواع مختلف داده

## 📋 الزامات

1. یک آرایه به نام `products` با این اشیاء ایجاد کنید:

   ```javascript
   [
     {id: 101, name: "Gaming Laptop", category: "Electronics", price: 1200, inStock: true, rating: 4.5},
     {id: 102, name: "Office Chair", category: "Furniture", price: 300, inStock: false, rating: 4.2},
     {id: 103, name: "Wireless Mouse", category: "Electronics", price: 50, inStock: true, rating: 4.8},
     {id: 104, name: "Standing Desk", category: "Furniture", price: 400, inStock: true, rating: 4.3}
   ]
   ```

2. این جستجوها را پیاده‌سازی کنید:
   - اولین محصول در دسته "Electronics" که موجود باشد
   - محصول با بالاترین امتیاز (ترکیب با سایر متدها)
   - محصول با قیمت دقیق مطابق
   - اولین محصول مقرون به صرفه (قیمت < ۱۰۰) که موجود باشد

3. نتایج جستجو را با پیام‌های مناسب نمایش دهید

## 💡 خروجی نمونه

```javascript
First Electronics in stock: Gaming Laptop ($1200)
Highest rated product: Wireless Mouse (4.8 stars)
Product at $50: Wireless Mouse
First affordable in-stock item: Wireless Mouse ($50)
```

## 🚀 اضافی

- جستجوی نام بدون حساسیت به حروف کوچک و بزرگ اضافه کنید
- جستجو بر اساس بازه قیمت
- با `.sort()` برای بهترین تطبیق ترکیب کنید

## ✅ موضوعات مورد انتظار

- متد `.find()` با شرایط پیچیده
- اپراتورهای منطقی (&&)
- دسترسی به ویژگی‌های شیء
- اپراتورهای مقایسه
