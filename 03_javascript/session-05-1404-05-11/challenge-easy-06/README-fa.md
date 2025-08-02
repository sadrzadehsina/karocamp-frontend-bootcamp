# 🎯 تمرین آسان ۰۶: تغییر دهنده رنگ (مرحله ۷ - رویدادها)

## 📝 توضیحات

دکمه‌هایی ایجاد کنید که هنگام کلیک، رنگ پس‌زمینه صفحه را تغییر دهند.

## 🎯 اهداف

- تمرین چندین event listener
- کار با تغییرات استایل CSS از طریق جاوااسکریپت
- مدیریت چندین المنت مشابه

## 📋 الزامات

1. یک فایل HTML با موارد زیر ایجاد کنید:
   - سه دکمه: "Red"، "Blue"، "Green"
   - به هر دکمه کلاس "color-btn" و id‌های منحصربه‌فرد بدهید
2. در جاوااسکریپت:
   - event listener به هر دکمه اضافه کنید
   - هنگام کلیک، `document.body.style.backgroundColor` را تغییر دهید
   - هر دکمه باید به رنگ مربوطه تغییر کند

## 💡 نمونه ساختار HTML

```html
<!DOCTYPE html>
<html>
<head>
    <title>Color Changer</title>
</head>
<body>
    <button id="redBtn" class="color-btn">Red</button>
    <button id="blueBtn" class="color-btn">Blue</button>
    <button id="greenBtn" class="color-btn">Green</button>
    <script src="script.js"></script>
</body>
</html>
```

## 💡 نمونه رفتار

```
کلیک دکمه "Red" → پس‌زمینه قرمز می‌شود
کلیک دکمه "Blue" → پس‌زمینه آبی می‌شود
کلیک دکمه "Green" → پس‌زمینه سبز می‌شود
```

## 🚀 امتیاز اضافی

- رنگ‌ها و دکمه‌های بیشتری اضافه کنید
- یک دکمه "Reset" برای برگرداندن به پس‌زمینه سفید اضافه کنید
- رنگ فعلی را در یک متغیر ذخیره کرده و نمایش دهید

## ✅ موضوعات مورد انتظار استفاده شده

- چندین فراخوانی `addEventListener()`
- `document.body.style.backgroundColor`
- مدیریت رویداد با المنت‌های مختلف
- دستکاری CSS از طریق جاوااسکریپت
