# 🎯 چالش متوسط مرحله ۷-۰۱: مدیریت داده API با بازیابی خطا (مرحله ۷ - مدیریت خطا و دیباگ)

## 📝 توضیحات

یک سیستم مدیریت داده بسازید که داده‌ها را از چند API دریافت کند، انواع خطاها را مدیریت کند و مکانیزم بازیابی و fallback داشته باشد.

## 🎯 اهداف

- مدیریت سناریوهای پیچیده خطا در API
- پیاده‌سازی استراتژی‌های بازیابی خطا
- تمرین الگوهای پیشرفته مدیریت خطا
- ایجاد مدیریت خطای قوی و حرفه‌ای

## 📋 الزامات

۱. ویژگی‌های مدیریت داده:
   - دریافت داده کاربران از چند endpoint
   - نمایش داده در کارت/لیست
   - قابلیت رفرش داده
   - جستجو و فیلتر
   - شناسایی حالت آفلاین

۲. سناریوهای خطا:
   - مشکلات اتصال شبکه
   - محدودیت نرخ (429)
   - خطاهای سرور (500، 502، 503)
   - پاسخ JSON نامعتبر
   - خطای timeout
   - خطای احراز هویت (401، 403)
   - خطای اعتبارسنجی داده

۳. استراتژی‌های بازیابی:
   - تلاش مجدد خودکار با backoff نمایی
   - fallback به داده کش‌شده
   - بارگذاری جزئی داده (نمایش داده‌های موجود)
   - کاهش graceful امکانات
   - گزینه تلاش مجدد توسط کاربر

## 💡 نمونه endpoint و شبیه‌سازی خطا

```javascript
const API_ENDPOINTS = {
  users: 'https://jsonplaceholder.typicode.com/users',
  posts: 'https://jsonplaceholder.typicode.com/posts',
  comments: 'https://jsonplaceholder.typicode.com/comments'
};

const ERROR_SIMULATION = {
  networkError: Math.random() < 0.1,
  serverError: Math.random() < 0.05,
  timeoutError: Math.random() < 0.03
};
```

## 🚀 توابع نمونه

```javascript
class APIManager {
  constructor() {
    this.retryAttempts = 3;
    this.retryDelay = 1000;
    this.cache = new Map();
  }

  async fetchWithRetry(url, options = {}) {
    let lastError;
    for (let attempt = 1; attempt <= this.retryAttempts; attempt++) {
      try {
        const response = await this.fetchData(url, options);
        return response;
      } catch (error) {
        lastError = error;
        if (this.shouldRetry(error, attempt)) {
          console.log(`تلاش ${attempt} ناموفق، تلاش مجدد در ${this.retryDelay}ms...`);
          await this.delay(this.retryDelay);
          this.retryDelay *= 2;
        } else {
          break;
        }
      } finally {
        this.logAttempt(url, attempt, lastError);
      }
    }
    return this.handleFailure(url, lastError);
  }

  shouldRetry(error, attempt) {
    if (attempt >= this.retryAttempts) return false;
    if (error.name === 'NetworkError') return true;
    if (error.status >= 500) return true;
    if (error.status === 429) return true;
    return false;
  }

  async handleFailure(url, error) {
    try {
      if (this.cache.has(url)) {
        this.showWarning('داده کش‌شده به دلیل مشکل شبکه استفاده شد');
        return this.cache.get(url);
      }
      const fallbackData = await this.tryFallbackEndpoint(url);
      if (fallbackData) {
        this.showWarning('منبع داده جایگزین استفاده شد');
        return fallbackData;
      }
      this.displayUserError(error);
      return null;
    } catch (fallbackError) {
      this.displayCriticalError(fallbackError);
      return null;
    } finally {
      this.logFailure(url, error);
    }
  }
}
```

## ✅ مدیریت خطا

- **خطای شبکه**: تلاش مجدد با backoff، سپس استفاده از کش
- **خطای سرور (۵xx)**: تلاش محدود، پیام نگهداری
- **محدودیت نرخ (429)**: انتظار و تلاش مجدد
- **خطای کاربر (۴xx)**: تلاش مجدد نشود، پیام مناسب
- **timeout**: تلاش مجدد با timeout بیشتر، نمایش حالت بارگذاری
- **خطای تجزیه**: لاگ خطا، پیام داده خراب

## ✅ تجربه کاربری مورد انتظار

- نمایش حالت بارگذاری هنگام تلاش مجدد
- پیام خطای واضح برای هر سناریو
- دکمه تلاش مجدد برای کاربر
- نمایش حالت آفلاین
- نمایش داده جزئی هنگام شکست برخی APIها
- نمایش پیشرفت تلاش مجدد

## ✅ مباحث مورد انتظار

- ساختارهای پیچیده `try-catch-finally`
- کلاس خطای سفارشی
- مدیریت خطا در Promise و async/await
- استراتژی بازیابی خطا
- لاگ کامل خطاها

## 🌟 نکته تکمیلی

- پیاده‌سازی circuit breaker
- ارسال گزارش خطا به سرویس خارجی
- داشبورد آنالیز خطا
- کش هوشمند
- مانیتورینگ عملکرد با ردیابی خطا
