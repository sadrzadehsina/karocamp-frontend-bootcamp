<!-- markdownlint-disable -->

# تمرین ۰۴: ساخت وب‌سایت نمونه‌کار قابل دسترس

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- ایجاد محتوای وب قابل دسترس از ابتدا با استفاده از HTML معنایی
- پیاده‌سازی سلسله‌مراتب مناسب سرتیتر و ساختار سند
- درک ویژگی‌های ARIA و بهترین شیوه‌های دسترسی‌پذیری
- ساخت ناوبری که با صفحه‌خوان‌ها کار کند
- ایجاد متن جایگزین معنادار و توضیحات
- طراحی برای ناوبری صفحه‌کلید و فناوری‌های کمکی

## 📋 توضیح تمرین

یک وب‌سایت نمونه‌کار شخصی بسازید که بهترین شیوه‌های دسترسی‌پذیری وب را نمایش دهد. این تمرین بر ایجاد ساختار سایت کاملاً قابل دسترس با استفاده از عناصر معنایی HTML5 و ویژگی‌های ARIA تمرکز دارد.

## 🔧 الزامات

### ساختار صفحه
یک نمونه‌کار تک‌صفحه‌ای با این بخش‌ها ایجاد کنید:
- هدر با ناوبری
- بخش معرفی/قهرمان
- بخش درباره
- بخش مهارت‌ها
- بخش پروژه‌ها
- بخش تماس
- فوتر

### الزامات HTML معنایی
- از `<header>` برای هدر سایت استفاده کنید
- از `<nav>` برای ناوبری با ساختار مناسب لیست استفاده کنید
- از `<main>` برای ناحیه محتوای اصلی استفاده کنید
- از `<section>` برای هر ناحیه محتوای اصلی استفاده کنید
- از `<article>` برای پروژه‌های جداگانه استفاده کنید
- از `<aside>` برای اطلاعات تکمیلی (در صورت وجود) استفاده کنید
- از `<footer>` برای فوتر سایت استفاده کنید

### ویژگی‌های دسترسی‌پذیری
- سلسله‌مراتب مناسب سرتیتر (فقط یک h1، پیشرفت منطقی h2-h6)
- پیوند پرش ناوبری برای کاربران صفحه‌کلید
- متن جایگزین برای تمام تصاویر
- برچسب‌های ARIA برای ناوبری و بخش‌ها
- برچسب‌ها و توضیحات مناسب فرم
- نشانگرهای فوکوس برای عناصر تعاملی
- نشانه‌گذاری معنایی برای لیست‌ها و ساختار محتوا

### الزامات محتوا

#### بخش هدر
- عنوان/لوگوی سایت
- منوی ناوبری با این آیتم‌ها: درباره، مهارت‌ها، پروژه‌ها، تماس
- پیوند پرش به محتوا (پنهان بصری اما قابل دسترس)

#### بخش قهرمان
- نام شما به عنوان h1 اصلی
- شعار حرفه‌ای یا توضیح مختصر
- دکمه فراخوان عمل

#### بخش درباره
- سرتیتر h2: "درباره من"
- بیوگرافی حرفه‌ای (۲-۳ پاراگراف)
- عکس حرفه‌ای با متن جایگزین معنادار

#### بخش مهارت‌ها
- سرتیتر h2: "مهارت‌ها"
- لیست مهارت‌های فنی سازماندهی‌شده بر اساس دسته
- استفاده از نشانه‌گذاری مناسب لیست (`<ul>`، `<ol>`، `<dl>`)

#### بخش پروژه‌ها
- سرتیتر h2: "پروژه‌ها"
- حداقل ۳ کارت پروژه، هر کدام شامل:
  - عنوان پروژه h3
  - توضیح پروژه
  - فناوری‌های استفاده‌شده
  - پیوندهای نمایش زنده و کد منبع (در صورت وجود)

#### بخش تماس
- سرتیتر h2: "تماس"
- فرم تماس با برچسب‌ها و اعتبارسنجی مناسب
- اطلاعات تماس جایگزین

#### فوتر
- اطلاعات کپی‌رایت
- پیوندهای شبکه‌های اجتماعی با برچسب‌های مناسب
- ناوبری اضافی در صورت نیاز

## 🎨 مشخصات دسترسی‌پذیری

### پیاده‌سازی ARIA
```html
<!-- مثال ناوبری -->
<nav aria-label="ناوبری اصلی">
  <ul role="menubar">
    <li role="none">
      <a href="#about" role="menuitem">درباره</a>
    </li>
  </ul>
</nav>

<!-- مثال بخش -->
<section aria-labelledby="about-heading">
  <h2 id="about-heading">درباره من</h2>
  <!-- محتوا -->
</section>
```

### پیاده‌سازی پیوند پرش
```html
<a href="#main-content" class="skip-link">پرش به محتوای اصلی</a>
```

### دسترسی‌پذیری تصویر
- تصاویر تزیینی: `alt=""`
- تصاویر اطلاعاتی: متن جایگزین توصیفی
- تصاویر پیچیده: `longdesc` یا توضیحات تفصیلی را در نظر بگیرید

### دسترسی‌پذیری فرم
- برچسب‌های مرتبط با کنترل‌های فرم
- نشانگرهای فیلد اجباری
- ارتباطات پیام خطا
- Fieldset برای ورودی‌های گروه‌بندی‌شده

## ✅ معیارهای موفقیت

نمونه‌کار شما باید:
- [ ] اعتبارسنجی HTML5 را پاس کند
- [ ] سلسله‌مراتب منطقی سرتیتر داشته باشد (h1 → h2 → h3، بدون پرش)
- [ ] عملکرد پرش ناوبری را شامل شود
- [ ] از عناصر معنایی HTML5 به درستی استفاده کند
- [ ] برچسب‌ها و نقش‌های ARIA مناسب داشته باشد
- [ ] متن جایگزین معنادار برای تمام تصاویر داشته باشد
- [ ] فقط با ناوبری صفحه‌کلید کار کند
- [ ] برچسب‌ها و اعتبارسنجی قابل دسترس فرم داشته باشد
- [ ] از نشانه‌گذاری مناسب لیست برای مهارت‌ها و ناوبری استفاده کند
- [ ] نشانگرهای فوکوس برای عناصر تعاملی داشته باشد

## 🔧 الزامات فنی

### مثال ساختار HTML
```html
<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>نام شما - نمونه‌کار توسعه‌دهنده وب</title>
</head>
<body>
    <a href="#main-content" class="skip-link">پرش به محتوای اصلی</a>
    
    <header role="banner">
        <nav aria-label="ناوبری اصلی">
            <!-- محتوای ناوبری -->
        </nav>
    </header>
    
    <main id="main-content" role="main">
        <section aria-labelledby="hero-heading">
            <h1 id="hero-heading">نام شما</h1>
            <!-- محتوای قهرمان -->
        </section>
        
        <!-- بخش‌های دیگر -->
    </main>
    
    <footer role="contentinfo">
        <!-- محتوای فوتر -->
    </footer>
</body>
</html>
```

### اطلاعات Meta مورد نیاز
- عنوان توصیفی صفحه
- ویژگی زبان در عنصر html
- تگ meta viewport برای طراحی پاسخگو
- اعلان کدگذاری کاراکتر

## 🚀 چالش‌های اضافی

اگر زودتر تمام کردید، این بهبودهای دسترسی‌پذیری را اضافه کنید:
- تغییر حالت تاریک با حالت‌های ARIA مناسب
- پشتیبانی تنظیمات حرکت کاهش‌یافته
- ملاحظات حالت کنتراست بالا
- پشتیبانی چندزبانه (ویژگی‌های lang)
- نواحی زنده برای به‌روزرسانی محتوای پویا
- ناوبری breadcrumb
- ملاحظات stylesheet چاپ

## 🧪 تست دسترسی‌پذیری شما

### تست دستی
- فقط با صفحه‌کلید ناوبری کنید (Tab، Shift+Tab، Enter، Space)
- با صفحه‌خوان تست کنید (NVDA، JAWS یا VoiceOver را امتحان کنید)
- نشانه‌گذاری HTML را اعتبارسنجی کنید
- نسبت‌های کنتراست رنگ را بررسی کنید
- با زوم تا ۲۰۰٪ تست کنید

### ابزارهای تست خودکار
- از پنل دسترسی‌پذیری ابزارهای توسعه‌دهنده مرورگر استفاده کنید
- آدیت دسترسی‌پذیری axe-core یا Lighthouse را اجرا کنید
- HTML را با اعتبارسنج W3C اعتبارسنجی کنید

## 💡 بهترین شیوه‌های دسترسی‌پذیری

- کد را برای انسان‌ها بنویسید، نه فقط ماشین‌ها
- در صورت امکان با کاربران واقعی تست کنید
- دسترسی‌پذیری شناختی را در نظر بگیرید، نه فقط صفحه‌خوان‌ها
- از اصول بهبود تدریجی استفاده کنید
- راه‌های متعدد برای دسترسی به اطلاعات فراهم کنید
- با الگوهای تعامل خود سازگار باشید
- فقط به رنگ برای انتقال اطلاعات تکیه نکنید

## 📚 منابع مفید

- [راهنمای دسترسی‌پذیری WebAIM](https://webaim.org/intro/)
- [دسترسی‌پذیری MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [راهنمای شیوه‌های نویسندگی ARIA](https://www.w3.org/WAI/ARIA/apg/)
- [راهنمای دسترسی‌پذیری محتوای وب (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

**تخمین زمان:** ۶۰-۹۰ دقیقه  
**سطح دشواری:** متوسط  
**مرحله:** ۶ - HTML معنایی و دسترسی‌پذیری
