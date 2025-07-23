<!-- markdownlint-disable -->

# تمرین ۰۶: درک کد Inline در مقابل Internal در مقابل External

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- تفاوت‌های بین CSS و JavaScript درون‌خطی، داخلی و خارجی
- کی از هر رویکرد استفاده کنید و مزایا/معایب آن‌ها
- نحوه تبدیل بین روش‌های مختلف پیاده‌سازی
- بهترین شیوه‌های سازماندهی کد در توسعه وب
- پیامدهای عملکرد هر رویکرد
- ملاحظات نگهداری و مقیاس‌پذیری

## 📋 توضیح تمرین

سه نسخه از همان وب‌صفحه ایجاد کنید تا رویکردهای درون‌خطی، داخلی و خارجی را برای CSS و JavaScript نمایش دهید. شما یک صفحه تعاملی ساده خواهید ساخت و آن را با استفاده از هر سه روش پیاده‌سازی خواهید کرد تا تفاوت‌ها و موارد استفاده آن‌ها را درک کنید.

## 🔧 ساختار پروژه

این فایل‌ها را ایجاد کنید:
```
comparison-project/
├── inline-version.html
├── internal-version.html
├── external-version.html
├── styles.css (برای نسخه خارجی)
└── script.js (برای نسخه خارجی)
```

## 📄 محتوای پایه برای تمام نسخه‌ها

تمام سه فایل HTML باید شامل همان محتوای پایه باشند:

```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[نسخه] - نمایش پیاده‌سازی کد</title>
    <!-- پیاده‌سازی CSS در هر نسخه متفاوت خواهد بود -->
</head>
<body>
    <div class="container">
        <header class="header">
            <h1 class="title">مقایسه پیاده‌سازی کد</h1>
            <p class="subtitle">این نسخه [نسخه] است</p>
        </header>

        <main class="main-content">
            <section class="demo-section">
                <h2>نمایش تعاملی</h2>
                <p>دکمه‌های زیر را کلیک کنید تا JavaScript را در عمل ببینید:</p>
                
                <div class="button-group">
                    <button id="color-btn" class="btn primary">تغییر پس‌زمینه</button>
                    <button id="text-btn" class="btn secondary">تغییر متن</button>
                    <button id="hide-btn" class="btn danger">تغییر نمایش</button>
                </div>
                
                <div id="demo-box" class="demo-box">
                    <p id="demo-text">این متن وقتی دکمه را کلیک کنید تغییر خواهد کرد!</p>
                </div>
            </section>

            <section class="info-section">
                <h2>اطلاعات روش</h2>
                <div class="info-card">
                    <h3>روش فعلی: [نسخه]</h3>
                    <p id="method-description">توضیحات توسط JavaScript به‌روزرسانی خواهد شد</p>
                    <ul id="method-pros">
                        <!-- مزایا توسط JavaScript اضافه خواهند شد -->
                    </ul>
                    <ul id="method-cons">
                        <!-- معایب توسط JavaScript اضافه خواهند شد -->
                    </ul>
                </div>
            </section>
        </main>

        <footer class="footer">
            <p>&copy; ۲۰۲۴ نمایش پیاده‌سازی کد</p>
        </footer>
    </div>

    <!-- پیاده‌سازی JavaScript در هر نسخه متفاوت خواهد بود -->
</body>
</html>
```

## 🎨 استایل‌های CSS (باید در هر نسخه متفاوت پیاده‌سازی شوند)

```css
/* استایل‌های پایه که باید پیاده‌سازی شوند */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Tahoma', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    background-color: #f4f4f4;
    direction: rtl;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 2rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 10px;
}

.title {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

.subtitle {
    font-size: 1.2rem;
    opacity: 0.9;
}

.main-content {
    display: grid;
    gap: 2rem;
}

.demo-section, .info-section {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.button-group {
    display: flex;
    gap: 1rem;
    margin: 1rem 0;
    flex-wrap: wrap;
}

.btn {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.3s ease;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.primary {
    background-color: #3498db;
    color: white;
}

.secondary {
    background-color: #95a5a6;
    color: white;
}

.danger {
    background-color: #e74c3c;
    color: white;
}

.demo-box {
    margin-top: 1rem;
    padding: 1.5rem;
    background-color: #ecf0f1;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.info-card {
    background-color: #f8f9fa;
    padding: 1.5rem;
    border-radius: 5px;
    margin-top: 1rem;
}

.footer {
    text-align: center;
    margin-top: 2rem;
    padding: 1rem;
    background-color: #34495e;
    color: white;
    border-radius: 5px;
}

.hidden {
    display: none;
}

/* طراحی پاسخگو */
@media (max-width: 768px) {
    .title {
        font-size: 2rem;
    }
    
    .button-group {
        flex-direction: column;
    }
    
    .btn {
        width: 100%;
    }
}
```

## 💻 عملکرد JavaScript (باید در هر نسخه متفاوت پیاده‌سازی شود)

```javascript
// کد JavaScript که باید پیاده‌سازی شود
document.addEventListener('DOMContentLoaded', function() {
    // عملکرد تغییر رنگ
    const colorBtn = document.getElementById('color-btn');
    const demoBox = document.getElementById('demo-box');
    const colors = ['#e74c3c', '#3498db', '#2ecc71', '#f39c12', '#9b59b6'];
    let colorIndex = 0;

    colorBtn.addEventListener('click', function() {
        colorIndex = (colorIndex + 1) % colors.length;
        demoBox.style.backgroundColor = colors[colorIndex];
    });

    // عملکرد تغییر متن
    const textBtn = document.getElementById('text-btn');
    const demoText = document.getElementById('demo-text');
    const texts = [
        'این متن وقتی دکمه را کلیک کنید تغییر خواهد کرد!',
        'JavaScript به طور کامل کار می‌کند!',
        'CSS و JavaScript می‌توانند با هم کار کنند!',
        'این محتوای پویا را نمایش می‌دهد!',
        'بازگشت به متن اصلی!'
    ];
    let textIndex = 0;

    textBtn.addEventListener('click', function() {
        textIndex = (textIndex + 1) % texts.length;
        demoText.textContent = texts[textIndex];
    });

    // عملکرد تغییر نمایش
    const hideBtn = document.getElementById('hide-btn');
    hideBtn.addEventListener('click', function() {
        demoBox.classList.toggle('hidden');
        hideBtn.textContent = demoBox.classList.contains('hidden') ? 'نمایش نمونه' : 'تغییر نمایش';
    });

    // به‌روزرسانی اطلاعات روش بر اساس نسخه فعلی
    updateMethodInfo();
});

function updateMethodInfo() {
    const description = document.getElementById('method-description');
    const prosList = document.getElementById('method-pros');
    const consList = document.getElementById('method-cons');
    
    // این برای هر نسخه متفاوت خواهد بود
    const currentMethod = getCurrentMethod(); // این تابع در هر نسخه متفاوت پیاده‌سازی خواهد شد
    
    description.textContent = currentMethod.description;
    
    // پاک کردن لیست‌های موجود
    prosList.innerHTML = '';
    consList.innerHTML = '';
    
    // اضافه کردن مزایا
    currentMethod.pros.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = '✅ ' + pro;
        li.style.color = '#27ae60';
        li.style.marginBottom = '0.5rem';
        prosList.appendChild(li);
    });
    
    // اضافه کردن معایب
    currentMethod.cons.forEach(con => {
        const li = document.createElement('li');
        li.textContent = '❌ ' + con;
        li.style.color = '#e74c3c';
        li.style.marginBottom = '0.5rem';
        consList.appendChild(li);
    });
}

// پیاده‌سازی‌های مختلف getCurrentMethod() برای هر نسخه ارائه خواهد شد
```

## 📁 پیاده‌سازی فایل‌ها

### ۱. inline-version.html
تمام CSS را با استفاده از ویژگی‌های `style` و تمام JavaScript را با استفاده از event handler های درون‌خطی و تگ‌های `<script>` با کد تعبیه‌شده پیاده‌سازی کنید.

### ۲. internal-version.html
CSS را با استفاده از تگ‌های `<style>` در `<head>` و JavaScript را با استفاده از تگ‌های `<script>` در سند پیاده‌سازی کنید.

### ۳. external-version.html
به فایل‌های خارجی `styles.css` و `script.js` پیوند دهید.

## ✅ معیارهای موفقیت

پروژه شما باید نمایش دهد:

### نسخه درون‌خطی
- [ ] استایل‌های CSS اعمال‌شده با استفاده از ویژگی‌های `style` روی عناصر
- [ ] عملکرد JavaScript با استفاده از event handler های درون‌خطی (onclick و غیره)
- [ ] کد JavaScript تعبیه‌شده درون تگ‌های `<script>`
- [ ] عملکرد تعاملی کاربردی
- [ ] اطلاعات روش نمایش دهنده رویکرد "درون‌خطی"

### نسخه داخلی
- [ ] استایل‌های CSS تعریف‌شده در تگ‌های `<style>` درون `<head>`
- [ ] کد JavaScript درون تگ‌های `<script>` در سند
- [ ] Event listener های متصل‌شده در JavaScript (نه درون‌خطی)
- [ ] عملکرد تعاملی کاربردی
- [ ] اطلاعات روش نمایش دهنده رویکرد "داخلی"

### نسخه خارجی
- [ ] CSS پیوند‌شده از فایل خارجی `styles.css`
- [ ] JavaScript پیوند‌شده از فایل خارجی `script.js`
- [ ] ساختار HTML تمیز بدون استایل‌ها یا اسکریپت‌های تعبیه‌شده
- [ ] عملکرد تعاملی کاربردی
- [ ] اطلاعات روش نمایش دهنده رویکرد "خارجی"

## 📊 تحلیل مقایسه‌ای

برای هر نسخه، تابع `getCurrentMethod()` را پیاده‌سازی کنید تا اطلاعات مناسب را برگرداند:

### اطلاعات روش درون‌خطی
```javascript
function getCurrentMethod() {
    return {
        description: "CSS و JavaScript مستقیماً در ویژگی‌ها و عناصر HTML تعبیه شده‌اند.",
        pros: [
            "سریع برای پیاده‌سازی تغییرات کوچک",
            "بدون درخواست HTTP اضافی",
            "بارگذاری فوری",
            "مناسب برای قالب‌های ایمیل"
        ],
        cons: [
            "سخت برای نگهداری و به‌روزرسانی",
            "قابل استفاده مجدد در صفحات نیست",
            "اختلاط نگرانی‌ها (HTML، CSS، JS)",
            "اندازه فایل HTML بزرگ‌تر",
            "بدون مزایای کش"
        ]
    };
}
```

### اطلاعات روش داخلی
```javascript
function getCurrentMethod() {
    return {
        description: "CSS و JavaScript در سند HTML در تگ‌های <style> و <script> تعریف شده‌اند.",
        pros: [
            "سازماندهی بهتر از درون‌خطی",
            "بدون درخواست HTTP اضافی",
            "می‌توان از انتخابگرهای CSS و توابع JavaScript استفاده کرد",
            "بارگذاری سریع‌تر از فایل‌های خارجی"
        ],
        cons: [
            "قابل استفاده مجدد در چندین صفحه نیست",
            "فایل‌های HTML بزرگ‌تر",
            "سخت برای نگهداری در چندین صفحه",
            "بدون مزایای کش برای CSS/JS"
        ]
    };
}
```

### اطلاعات روش خارجی
```javascript
function getCurrentMethod() {
    return {
        description: "CSS و JavaScript در فایل‌های جداگانه ذخیره و به سند HTML پیوند داده شده‌اند.",
        pros: [
            "قابل استفاده مجدد در چندین صفحه",
            "سازماندهی و نگهداری بهتر",
            "جداسازی نگرانی‌ها",
            "مزایای کش مرورگر",
            "همکاری آسان‌تر",
            "فایل‌های HTML کوچک‌تر"
        ],
        cons: [
            "درخواست‌های HTTP اضافی",
            "تأخیر جزئی در بارگذاری",
            "نیاز به مدیریت چندین فایل",
            "احتمال شکسته شدن پیوندها"
        ]
    };
}
```

## 🚀 چالش‌های اضافی

اگر زودتر تمام کردید، این بهبودها را امتحان کنید:
- تحلیل عملکرد مقایسه زمان‌های بارگذاری اضافه کنید
- نسخه ترکیبی ایجاد کنید که رویکردهای مختلف را به صورت استراتژیک ترکیب کند
- فرآیند ساخت پیاده‌سازی کنید که بین روش‌ها تبدیل کند
- ویژگی‌های دسترسی‌پذیری اضافه کنید و ببینید چگونه با هر رویکرد کار می‌کنند
- جدول مقایسه نمایش اندازه فایل‌ها ایجاد کنید
- انیمیشن‌های CSS اضافه کنید و ببینید چگونه در هر نسخه رفتار می‌کنند

## 💡 کی از هر رویکرد استفاده کنیم

### استفاده از درون‌خطی:
- پروتوتایپ‌سازی و تست سریع
- قالب‌های ایمیل
- بازنویسی‌های استایل بسیار کوچک
- event handler های یکباره

### استفاده از داخلی:
- اپلیکیشن‌های تک‌صفحه‌ای
- استایل‌ها یا اسکریپت‌های مخصوص صفحه
- وقتی مدیریت فایل خارجی امکان‌پذیر نیست
- کاهش درخواست‌های HTTP برای سایت‌های کوچک

### استفاده از خارجی:
- وب‌سایت‌های چندصفحه‌ای
- حفظ استایل‌های سازگار در صفحات
- محیط‌های توسعه تیمی
- وب‌سایت‌های تولیدی
- وقتی کش و عملکرد مهم است

## 📚 منابع مفید

- [MDN: CSS - چگونه CSS کار می‌کند](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_works)
- [MDN: JavaScript - کجا JavaScript خود را قرار دهید](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_JavaScript_within_a_webpage)
- [بهترین شیوه‌های عملکرد وب](https://developer.mozilla.org/en-US/docs/Web/Performance)

---

**تخمین زمان:** ۶۰-۹۰ دقیقه  
**سطح دشواری:** متوسط  
**مرحله:** ۷ - آماده شدن برای CSS و JavaScript
