<!-- markdownlint-disable -->

# تمرین ۰۵: پیوند فایل‌های خارجی CSS و JavaScript

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- نحوه پیوند استایل‌شیت‌های خارجی CSS به اسناد HTML
- نحوه اضافه کردن فایل‌های خارجی JavaScript در HTML
- درک تفاوت بین منابع inline، internal و external
- جایگذاری مناسب تگ‌های `<link>` و `<script>`
- تنظیم ساختار پروژه پایه برای توسعه وب
- بهترین شیوه‌های سازماندهی فایل‌های HTML، CSS و JavaScript

## 📋 توضیح تمرین

یک پروژه وب چندفایله ایجاد کنید که پیوند مناسب فایل‌های خارجی CSS و JavaScript را نمایش دهد. شما یک وب‌صفحه تعاملی ساده خواهید ساخت که از استایل‌شیت‌ها و اسکریپت‌های خارجی برای جداسازی نگرانی‌ها و بهبود قابلیت نگهداری استفاده می‌کند.

## 🔧 ساختار پروژه

ساختار فایل زیر را ایجاد کنید:
```
project-folder/
├── index.html
├── css/
│   ├── styles.css
│   └── responsive.css
└── js/
    ├── main.js
    └── utils.js
```

## 📁 الزامات فایل

### index.html
سند HTML با موارد زیر ایجاد کنید:
- DOCTYPE و ساختار مناسب سند
- پیوندهای هر دو فایل CSS
- ارجاعات به هر دو فایل JavaScript
- بخش‌های محتوا برای تست استایل‌ها و اسکریپت‌ها

### css/styles.css
استایل‌شیتی با موارد زیر ایجاد کنید:
- استایل‌دهی پایه برای چیدمان صفحه
- طرح رنگ و تایپوگرافی
- استایل‌دهی دکمه و فرم
- افکت‌های hover و انتقال‌ها

### css/responsive.css
استایل‌شیت پاسخگو با موارد زیر ایجاد کنید:
- Media query برای دستگاه‌های موبایل
- تنظیمات چیدمان پاسخگو
- ناوبری دوستدار موبایل

### js/main.js
فایل JavaScript با موارد زیر ایجاد کنید:
- عملکرد تعاملی برای صفحه
- Event listener برای تعاملات کاربر
- مثال‌هایی از دستکاری DOM

### js/utils.js
فایل JavaScript ابزاری با موارد زیر ایجاد کنید:
- توابع کمکی
- قطعه کدهای قابل استفاده مجدد
- متدهای ابزاری

## 🔧 قالب HTML

با این ساختار پایه HTML شروع کنید:

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نمایش فایل‌های خارجی</title>
    
    <!-- فایل‌های CSS را اینجا پیوند دهید -->
    
</head>
<body>
    <header>
        <nav>
            <h1>وب‌سایت من</h1>
            <ul>
                <li><a href="#home">خانه</a></li>
                <li><a href="#about">درباره</a></li>
                <li><a href="#contact">تماس</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="home">
            <h2>خوش آمدید</h2>
            <p>این صفحه پیوند CSS و JavaScript خارجی را نمایش می‌دهد.</p>
            <button id="color-button">تغییر رنگ پس‌زمینه</button>
        </section>

        <section id="about">
            <h2>درباره</h2>
            <p>این بخش شامل اطلاعاتی درباره پروژه است.</p>
            <div class="card">
                <h3>ویژگی ۱</h3>
                <p>توضیح ویژگی ۱</p>
            </div>
            <div class="card">
                <h3>ویژگی ۲</h3>
                <p>توضیح ویژگی ۲</p>
            </div>
        </section>

        <section id="contact">
            <h2>تماس</h2>
            <form id="contact-form">
                <label for="name">نام:</label>
                <input type="text" id="name" required>
                
                <label for="email">ایمیل:</label>
                <input type="email" id="email" required>
                
                <label for="message">پیام:</label>
                <textarea id="message" required></textarea>
                
                <button type="submit">ارسال پیام</button>
            </form>
            <div id="form-feedback"></div>
        </section>
    </main>

    <footer>
        <p>&copy; ۲۰۲۴ وب‌سایت من. تمام حقوق محفوظ است.</p>
    </footer>

    <!-- فایل‌های JavaScript را اینجا پیوند دهید -->
    
</body>
</html>
```

## 🎨 الزامات CSS

### محتوای نمونه styles.css
```css
/* ریست پایه */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* تایپوگرافی */
body {
    font-family: 'Tahoma', sans-serif;
    line-height: 1.6;
    color: #333;
    direction: rtl;
}

/* چیدمان */
header {
    background-color: #2c3e50;
    color: white;
    padding: 1rem 0;
}

nav {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* استایل‌های بیشتر برای بخش‌ها، کارت‌ها، فرم‌ها و غیره اضافه کنید */
```

### محتوای نمونه responsive.css
```css
/* طراحی پاسخگو mobile-first */
@media (max-width: 768px) {
    nav {
        flex-direction: column;
        text-align: center;
    }
    
    nav ul {
        margin-top: 1rem;
    }
    
    /* استایل‌های موبایل بیشتر اضافه کنید */
}
```

## 💻 الزامات JavaScript

### محتوای نمونه main.js
```javascript
// منتظر بارگذاری کامل DOM بمانید
document.addEventListener('DOMContentLoaded', function() {
    // عملکرد تغییر رنگ
    const colorButton = document.getElementById('color-button');
    const colors = ['#f39c12', '#e74c3c', '#9b59b6', '#3498db', '#2ecc71'];
    let currentColorIndex = 0;
    
    colorButton.addEventListener('click', function() {
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColorIndex];
    });
    
    // مدیریت فرم
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // استفاده از تابع ابزاری از utils.js
        const formData = getFormData(contactForm);
        displayMessage('ممنون از پیام شما!', 'success');
    });
});
```

### محتوای نمونه utils.js
```javascript
// توابع ابزاری

function getFormData(form) {
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    return data;
}

function displayMessage(message, type = 'info') {
    const feedback = document.getElementById('form-feedback');
    feedback.innerHTML = `<div class="message ${type}">${message}</div>`;
    
    // پیام را بعد از ۳ثانیه پاک کن
    setTimeout(() => {
        feedback.innerHTML = '';
    }, 3000);
}

// توابع ابزاری بیشتر در صورت نیاز اضافه کنید
```

## ✅ معیارهای موفقیت

پروژه شما باید:
- [ ] سازماندهی مناسب فایل با پوشه‌های جداگانه برای CSS و JS داشته باشد
- [ ] فایل‌های خارجی CSS را به درستی در بخش `<head>` پیوند دهد
- [ ] فایل‌های خارجی JavaScript را به درستی قبل از بسته شدن تگ `</body>` پیوند دهد
- [ ] استایل‌های کاربردی اعمال‌شده از فایل‌های خارجی CSS داشته باشد
- [ ] عملکرد JavaScript کاربردی از فایل‌های خارجی JS داشته باشد
- [ ] جداسازی نگرانی‌ها را نمایش دهد (ساختار HTML، ارائه CSS، رفتار JS)
- [ ] طراحی پاسخگو با media query شامل شود
- [ ] عناصر تعاملی به درستی کار کنند
- [ ] از توابع ابزاری فایل‌های JS جداگانه استفاده کند
- [ ] کد تمیز، سازماندهی‌شده و کامنت‌گذاری‌شده داشته باشد

## 🔗 بهترین شیوه‌های پیوند

### پیوند CSS
```html
<!-- در بخش <head> -->
<link rel="stylesheet" href="css/styles.css">
<link rel="stylesheet" href="css/responsive.css">
```

### پیوند JavaScript
```html
<!-- قبل از بسته شدن تگ </body> -->
<script src="js/utils.js"></script>
<script src="js/main.js"></script>
```

### ترتیب مهم است
- فایل‌های CSS باید در `<head>` برای رندر مناسب پیوند شوند
- فایل‌های JavaScript باید قبل از `</body>` یا با ویژگی `defer` پیوند شوند
- فایل‌های ابزاری را قبل از فایل‌هایی که به آن‌ها وابسته هستند بارگذاری کنید

## 🚀 چالش‌های اضافی

اگر زودتر تمام کردید، این بهبودها را امتحان کنید:
- فایل CSS سوم برای استایل‌های چاپ اضافه کنید (`@media print`)
- ماژول‌های JavaScript اضافی برای عملکردهای مختلف ایجاد کنید
- تغییر حالت تاریک پیاده‌سازی کنید که بر چندین فایل CSS تأثیر بگذارد
- ویژگی‌های سفارشی CSS (متغیرها) اضافه کنید و در فایل‌ها استفاده کنید
- فرآیند ساخت با استفاده از الحاق ساده ایجاد کنید
- مثال‌هایی از کوچک‌سازی CSS و JavaScript اضافه کنید

## 💡 مزایای فایل‌های خارجی

### فواید
- **جداسازی نگرانی‌ها**: HTML برای ساختار، CSS برای ارائه، JS برای رفتار
- **قابلیت استفاده مجدد**: همان استایل‌شیت می‌تواند در چندین صفحه استفاده شود
- **قابلیت نگهداری**: به‌روزرسانی و مدیریت کد آسان‌تر
- **کش**: فایل‌های خارجی می‌توانند توسط مرورگرها کش شوند
- **همکاری**: اعضای مختلف تیم می‌توانند روی فایل‌های مختلف کار کنند
- **سازماندهی**: ساختار پروژه تمیزتر و سازماندهی‌شده‌تر

### ملاحظات عملکرد
- فایل‌های خارجی نیاز به درخواست‌های HTTP اضافی دارند
- می‌توان با هدرهای کش مناسب کاهش داد
- کوچک‌سازی و فشردگی اندازه فایل‌ها را کاهش می‌دهد
- HTTP/2 چندین درخواست را کارآمدتر می‌کند

## 📚 منابع مفید

- [مبانی CSS در MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
- [مبانی JavaScript در MDN](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [عنصر Link در MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)
- [عنصر Script در MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)

---

**تخمین زمان:** ۴۵-۶۰ دقیقه  
**سطح دشواری:** مبتدی تا متوسط  
**مرحله:** ۷ - آماده شدن برای CSS و JavaScript
