# 🎯 چالش آسان مرحله ۷-۰۲: اعتبارسنجی آپلود فایل (مرحله ۷ - مدیریت خطا و دیباگ)

## 📝 توضیحات

یک کامپوننت آپلود فایل بسازید که فایل‌ها را اعتبارسنجی کند و انواع خطاهای ممکن را مدیریت نماید.

## 🎯 اهداف

- مدیریت خطاهای مرتبط با فایل
- اعتبارسنجی نوع و حجم فایل
- نمایش بازخورد مناسب به کاربر
- تمرین مدیریت خطا در سناریوهای واقعی

## 📋 الزامات

۱. رابط آپلود فایل:
   - ناحیه کشیدن و رها کردن
   - دکمه انتخاب فایل
   - پیش‌نمایش فایل (برای تصاویر)
   - نمایش پیشرفت آپلود
   - لیست فایل‌های انتخاب‌شده

۲. قوانین اعتبارسنجی:
   - حداکثر حجم فایل: ۵ مگابایت
   - فرمت‌های مجاز: تصاویر (jpg, png, gif)، اسناد (pdf, doc, txt)
   - حداکثر ۳ فایل همزمان
   - عدم پذیرش فایل تکراری (هم‌نام)

۳. سناریوهای خطا:
   - فایل بیش‌ازحد بزرگ
   - فرمت نامعتبر
   - تعداد فایل بیش از حد مجاز
   - فایل تکراری
   - خطای شبکه هنگام آپلود (شبیه‌سازی)
   - شناسایی فایل خراب

## 💡 ساختار نمونه HTML

```html
<div class="upload-container">
  <div class="drop-zone" id="dropZone">
    <p>فایل‌ها را بکشید یا <button id="browseBtn">انتخاب کنید</button></p>
    <input type="file" id="fileInput" multiple accept=".jpg,.png,.gif,.pdf,.doc,.txt" hidden>
  </div>
  <div id="errorContainer" class="error-messages"></div>
  <div class="file-list">
    <h3>فایل‌های انتخاب‌شده:</h3>
    <div id="fileList"></div>
  </div>
  <button id="uploadBtn" disabled>آپلود فایل‌ها</button>
</div>
```

## 🚀 توابع نمونه

```javascript
function validateFile(file) {
  try {
    // بررسی حجم فایل
    if (file.size > 5 * 1024 * 1024) {
      throw new Error(`فایل "${file.name}" بیش از حد بزرگ است. حداکثر ۵ مگابایت.`);
    }
    // بررسی فرمت
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      throw new Error(`فرمت فایل "${file.type}" مجاز نیست.`);
    }
    return true;
  } catch (error) {
    displayError(error.message);
    return false;
  }
}

function uploadFiles() {
  const validFiles = [];
  try {
    // اعتبارسنجی همه فایل‌ها
    for (let file of selectedFiles) {
      if (validateFile(file)) {
        validFiles.push(file);
      }
    }
    if (validFiles.length === 0) {
      throw new Error("هیچ فایل معتبری برای آپلود وجود ندارد");
    }
    // شبیه‌سازی فرآیند آپلود
    simulateUpload(validFiles);
  } catch (error) {
    displayError(error.message);
  } finally {
    console.log(`تلاش آپلود کامل شد. ${validFiles.length} فایل پردازش شد.`);
  }
}
```

## ✅ پیام‌های خطای مورد انتظار

- **فایل بیش‌ازحد بزرگ**: «فایل 'document.pdf' بیش از حد بزرگ است. حداکثر ۵ مگابایت.»
- **فرمت نامعتبر**: «فرمت فایل 'video/mp4' مجاز نیست.»
- **تعداد فایل زیاد**: «بیش از ۳ فایل مجاز نیست.»
- **فایل تکراری**: «فایل 'image.jpg' قبلاً انتخاب شده.»
- **آپلود ناموفق**: «آپلود ناموفق بود. لطفاً اتصال خود را بررسی کنید.»

## ✅ مباحث مورد انتظار

- مدیریت خطا در File API
- `try-catch` در توابع اعتبارسنجی
- `finally` برای عملیات پاکسازی
- پیام خطای سفارشی
- مدیریت وضعیت خطا

## 🌟 نکته تکمیلی

- افزودن امکان تلاش مجدد برای آپلود ناموفق
- شناسایی فایل خراب
- فشرده‌سازی تصویر برای تصاویر بزرگ
- صف آپلود با مدیریت خطا
- تولید پیش‌نمایش با مدیریت خطا
