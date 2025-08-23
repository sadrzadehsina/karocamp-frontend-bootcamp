# 🎯 چالش آسان مرحله ۱۰-۰۱: دریافت پروفایل کاربر (مرحله ۱۰ - Fetch API و JSON)

## 📝 توضیحات

یک نمایش‌دهنده ساده پروفایل کاربر بسازید که داده‌های کاربران را از API سایت JSONPlaceholder دریافت و نمایش دهد. با اصول اولیه fetch، تجزیه JSON و نمایش داده‌های API در DOM آشنا شوید.

## 🎯 اهداف

- استفاده از `fetch()` برای دریافت داده از API
- تجزیه پاسخ‌های JSON با `JSON.parse()` (در fetch داخلی است)
- مدیریت Promiseها با `.then()` و `.catch()`
- نمایش داده‌های دریافت‌شده در DOM
- تمرین مدیریت خطاهای پایه

## 📋 الزامات

۱. نقطه پایانی API:
   ```javascript
   const API_URL = 'https://jsonplaceholder.typicode.com/users';
   ```

۲. این توابع را پیاده‌سازی کنید:
   - دریافت داده کاربران از API
   - نمایش اطلاعات کاربران در کارت‌ها
   - مدیریت وضعیت بارگذاری
   - نمایش پیام خطا در صورت شکست fetch
   - افزودن دکمه رفرش برای بارگذاری مجدد داده‌ها

۳. کارت کاربر باید نمایش دهد:
   - نام و نام کاربری
   - ایمیل و تلفن
   - آدرس (شهر و کدپستی)
   - نام شرکت

## 💡 نمونه پیاده‌سازی

```javascript
// تابع fetch پایه
async function fetchUsers() {
  try {
    showLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const users = await response.json();
    displayUsers(users);
    showLoading(false);
  } catch (error) {
    console.error('Error fetching users:', error);
    showError('بارگذاری کاربران ناموفق بود. لطفاً دوباره تلاش کنید.');
    showLoading(false);
  }
}

// نمایش کاربران در DOM
function displayUsers(users) {
  const container = document.getElementById('users-container');
  container.innerHTML = '';
  
  users.forEach(user => {
    const userCard = createUserCard(user);
    container.appendChild(userCard);
  });
}

// ساخت المنت کارت کاربر
function createUserCard(user) {
  const card = document.createElement('div');
  card.className = 'user-card';
  
  card.innerHTML = `
    <h3>${user.name} (@${user.username})</h3>
    <p><strong>ایمیل:</strong> ${user.email}</p>
    <p><strong>تلفن:</strong> ${user.phone}</p>
    <p><strong>شهر:</strong> ${user.address.city}</p>
    <p><strong>شرکت:</strong> ${user.company.name}</p>
  `;
  
  return card;
}

// نمایش/مخفی‌کردن وضعیت بارگذاری
function showLoading(isLoading) {
  const loadingEl = document.getElementById('loading');
  const container = document.getElementById('users-container');
  
  if (isLoading) {
    loadingEl.style.display = 'block';
    container.style.display = 'none';
  } else {
    loadingEl.style.display = 'none';
    container.style.display = 'block';
  }
}

// نمایش پیام خطا
function showError(message) {
  const errorEl = document.getElementById('error-message');
  errorEl.textContent = message;
  errorEl.style.display = 'block';
  
  // مخفی‌کردن خطا بعد از ۵ ثانیه
  setTimeout(() => {
    errorEl.style.display = 'none';
  }, 5000);
}
```

## 🚀 ویژگی‌های مورد انتظار

۱. **نمایش لیست کاربران**:
   - شبکه‌ای از کارت‌های کاربر با اطلاعات پروفایل
   - چیدمان خوانا و تمیز

۲. **وضعیت بارگذاری**:
   - نمایش وضعیت بارگذاری هنگام دریافت داده
   - مدیریت و نمایش مناسب خطاها

۳. **عناصر تعاملی**:
   - دکمه رفرش برای بارگذاری مجدد کاربران
   - طراحی واکنش‌گرا برای اندازه‌های مختلف صفحه

## 🎨 ساختار پیشنهادی HTML

```html
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>دریافت پروفایل کاربر</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>پروفایل کاربران</h1>
            <button id="refresh-btn">بارگذاری مجدد کاربران</button>
        </header>
        
        <div id="loading" class="loading">در حال بارگذاری کاربران...</div>
        <div id="error-message" class="error"></div>
        <div id="users-container" class="users-grid"></div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
```

## 💡 نکات مفید

- با یک درخواست fetch ساده شروع کنید
- ابتدا فراخوانی API را در کنسول مرورگر تست کنید
- همیشه هر دو حالت موفق و خطا را مدیریت کنید
- از async/await برای کد تمیزتر استفاده کنید
- قبل از تجزیه JSON، مقدار `response.ok` را بررسی کنید

## 🔧 ویژگی‌های اضافه

- افزودن فیلتر جستجو برای کاربران
- مرتب‌سازی کاربران بر اساس نام یا ایمیل
- افزودن صفحه‌بندی برای نمایش تعداد زیاد کاربران
- پیاده‌سازی قابلیت "کاربران مورد علاقه"
- نمایش جزئیات کاربر با کلیک روی کارت

## 📚 منابع یادگیری

- [مستندات Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [Promises در جاوااسکریپت](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
