<!-- markdownlint-disable -->

# تمرین ۰۵: ایجاد فرم جامع ثبت‌نام رویداد

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- نحوه ایجاد و ساختاردهی فرم‌های HTML (`<form>`)
- کار با انواع مختلف input و ویژگی‌های خاص آنها
- استفاده مناسب از label برای دسترسی فرم
- ایجاد منوهای کشویی و گزینه‌های انتخاب
- ساخت عناصر textarea برای ورودی متن طولانی
- درک اعتبارسنجی فرم و تجربه کاربری
- سازماندهی فرم‌های پیچیده با fieldset و legend

## 📋 توضیح تمرین

یک سیستم ثبت‌نام رویداد جامع با فرم‌های متعدد برای انواع مختلف رویدادها بسازید. این تمرین همه عناصر اساسی فرم HTML را پوشش می‌دهد و الگوهای طراحی فرم دنیای واقعی را نشان می‌دهد.

## 🔧 الزامات

سیستم ثبت‌نام رویداد شما باید شامل موارد زیر باشد:

1. **صفحه ثبت‌نام اصلی (index.html)**
   - نمای کلی و توضیح رویداد
   - فرم ثبت‌نام سریع با فیلدهای ضروری
   - لینک‌هایی به فرم‌های ثبت‌نام تفصیلی

2. **ثبت‌نام کنفرانس (conference.html)**
   - فرم اطلاعات شخصی
   - ترجیحات جلسه با checkbox ها
   - ترجیحات غذا با radio button ها
   - textarea الزامات ویژه

3. **ثبت‌نام کارگاه (workshop.html)**
   - فرم جزئیات شرکت‌کننده
   - انتخاب سطح مهارت dropdown
   - انتخاب چندین کارگاه
   - چک‌لیست نیازهای تجهیزات

4. **تماس و بازخورد (contact.html)**
   - فرم اطلاعات تماس
   - فرم بازخورد رویداد با امتیازدهی
   - جعبه پیشنهاد با textarea
   - گزینه‌های اشتراک خبرنامه

## 🔧 الزامات فنی

### ساختار فایل:
```
event-registration/
├── index.html
├── conference.html
├── workshop.html
├── contact.html
└── styles/
    └── form-styles.css (اختیاری)
```

### عناصر HTML برای استفاده:
- `<form>` با ویژگی‌های action و method مناسب
- `<input>` با انواع مختلف: text، email، tel، date، number، checkbox، radio، submit
- `<label>` با ویژگی‌های for مناسب
- `<select>` و `<option>` برای منوهای کشویی
- `<textarea>` برای ورودی متن چند خطی
- `<fieldset>` و `<legend>` برای سازماندهی فرم
- `<button>` برای ارسال فرم و اقدامات

## 📝 دستورالعمل گام به گام

1. **ایجاد صفحه ثبت‌نام اصلی**
   
   **فرم ثبت‌نام سریع:**
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>ثبت‌نام سریع</legend>
       
       <div>
         <label for="quick-name">نام کامل:</label>
         <input type="text" id="quick-name" name="fullName" required>
       </div>
       
       <div>
         <label for="quick-email">آدرس ایمیل:</label>
         <input type="email" id="quick-email" name="email" required>
       </div>
       
       <div>
         <label for="event-type">نوع رویداد:</label>
         <select id="event-type" name="eventType" required>
           <option value="">یک رویداد انتخاب کنید...</option>
           <option value="conference">کنفرانس فناوری</option>
           <option value="workshop">کارگاه عملی</option>
           <option value="seminar">سمینار حرفه‌ای</option>
         </select>
       </div>
       
       <div>
         <button type="submit">هم‌اکنون ثبت‌نام کنید</button>
       </div>
     </fieldset>
   </form>
   ```

2. **ساخت فرم ثبت‌نام کنفرانس**
   
   **بخش اطلاعات شخصی:**
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>اطلاعات شخصی</legend>
       
       <div>
         <label for="conf-first-name">نام:</label>
         <input type="text" id="conf-first-name" name="firstName" required>
       </div>
       
       <div>
         <label for="conf-last-name">نام خانوادگی:</label>
         <input type="text" id="conf-last-name" name="lastName" required>
       </div>
       
       <div>
         <label for="conf-email">آدرس ایمیل:</label>
         <input type="email" id="conf-email" name="email" required>
       </div>
       
       <div>
         <label for="conf-phone">شماره تلفن:</label>
         <input type="tel" id="conf-phone" name="phone">
       </div>
       
       <div>
         <label for="conf-company">شرکت/سازمان:</label>
         <input type="text" id="conf-company" name="company">
       </div>
       
       <div>
         <label for="conf-title">عنوان شغلی:</label>
         <input type="text" id="conf-title" name="jobTitle">
       </div>
     </fieldset>
     
     <fieldset>
       <legend>ترجیحات جلسه</legend>
       <p>تمام جلساتی که می‌خواهید شرکت کنید را انتخاب کنید:</p>
       
       <div>
         <input type="checkbox" id="ai-session" name="sessions" value="ai">
         <label for="ai-session">هوش مصنوعی در کسب و کار</label>
       </div>
       
       <div>
         <input type="checkbox" id="cloud-session" name="sessions" value="cloud">
         <label for="cloud-session">استراتژی‌های رایانش ابری</label>
       </div>
       
       <div>
         <input type="checkbox" id="security-session" name="sessions" value="security">
         <label for="security-session">بهترین روش‌های امنیت سایبری</label>
       </div>
       
       <div>
         <input type="checkbox" id="data-session" name="sessions" value="data">
         <label for="data-session">کاربردهای علم داده</label>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>ترجیحات غذا</legend>
       
       <div>
         <input type="radio" id="regular-meal" name="mealType" value="regular" checked>
         <label for="regular-meal">منوی معمولی</label>
       </div>
       
       <div>
         <input type="radio" id="vegetarian-meal" name="mealType" value="vegetarian">
         <label for="vegetarian-meal">گیاهخواری</label>
       </div>
       
       <div>
         <input type="radio" id="vegan-meal" name="mealType" value="vegan">
         <label for="vegan-meal">وگان</label>
       </div>
       
       <div>
         <input type="radio" id="gluten-free-meal" name="mealType" value="gluten-free">
         <label for="gluten-free-meal">بدون گلوتن</label>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>الزامات ویژه</legend>
       
       <div>
         <label for="accessibility">نیازهای دسترسی:</label>
         <textarea id="accessibility" name="accessibility" rows="3" cols="50" 
                   placeholder="لطفاً هر نیاز دسترسی را توضیح دهید..."></textarea>
       </div>
       
       <div>
         <label for="dietary-restrictions">محدودیت‌های غذایی:</label>
         <textarea id="dietary-restrictions" name="dietaryRestrictions" rows="3" cols="50"
                   placeholder="لطفاً محدودیت‌ها یا آلرژی‌های غذایی را فهرست کنید..."></textarea>
       </div>
     </fieldset>
     
     <div>
       <button type="submit">تکمیل ثبت‌نام کنفرانس</button>
       <button type="reset">پاک کردن فرم</button>
     </div>
   </form>
   ```

3. **ایجاد فرم ثبت‌نام کارگاه**
   
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>اطلاعات شرکت‌کننده</legend>
       
       <div>
         <label for="workshop-name">نام کامل:</label>
         <input type="text" id="workshop-name" name="fullName" required>
       </div>
       
       <div>
         <label for="workshop-email">ایمیل:</label>
         <input type="email" id="workshop-email" name="email" required>
       </div>
       
       <div>
         <label for="workshop-experience">سطح تجربه:</label>
         <select id="workshop-experience" name="experienceLevel" required>
           <option value="">سطح خود را انتخاب کنید...</option>
           <option value="beginner">مبتدی (۰-۱ سال)</option>
           <option value="intermediate">متوسط (۲-۵ سال)</option>
           <option value="advanced">پیشرفته (۵+ سال)</option>
           <option value="expert">خبره (۱۰+ سال)</option>
         </select>
       </div>
       
       <div>
         <label for="workshop-field">حوزه اصلی:</label>
         <select id="workshop-field" name="primaryField">
           <option value="">حوزه خود را انتخاب کنید...</option>
           <option value="web-dev">توسعه وب</option>
           <option value="mobile-dev">توسعه موبایل</option>
           <option value="data-science">علم داده</option>
           <option value="design">طراحی UI/UX</option>
           <option value="devops">DevOps</option>
           <option value="other">سایر</option>
         </select>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>انتخاب کارگاه</legend>
       <p>حداکثر ۳ کارگاه برای شرکت انتخاب کنید:</p>
       
       <div>
         <input type="checkbox" id="react-workshop" name="workshops" value="react">
         <label for="react-workshop">مبانی React.js</label>
       </div>
       
       <div>
         <input type="checkbox" id="python-workshop" name="workshops" value="python">
         <label for="python-workshop">پایتون برای تحلیل داده</label>
       </div>
       
       <div>
         <input type="checkbox" id="design-workshop" name="workshops" value="design">
         <label for="design-workshop">کارگاه تفکر طراحی</label>
       </div>
       
       <div>
         <input type="checkbox" id="api-workshop" name="workshops" value="api">
         <label for="api-workshop">توسعه RESTful API</label>
       </div>
       
       <div>
         <input type="checkbox" id="testing-workshop" name="workshops" value="testing">
         <label for="testing-workshop">استراتژی‌های تست خودکار</label>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>تجهیزات و تنظیمات</legend>
       
       <div>
         <input type="checkbox" id="bring-laptop" name="equipment" value="laptop">
         <label for="bring-laptop">لپ‌تاپ خودم را می‌آورم</label>
       </div>
       
       <div>
         <input type="checkbox" id="need-laptop" name="equipment" value="need-laptop">
         <label for="need-laptop">به لپ‌تاپ ارائه شده نیاز دارم</label>
       </div>
       
       <div>
         <input type="checkbox" id="need-adapter" name="equipment" value="adapter">
         <label for="need-adapter">به آداپتور/کابل برق نیاز دارم</label>
       </div>
       
       <div>
         <label for="os-preference">ترجیح سیستم عامل:</label>
         <select id="os-preference" name="osPreference">
           <option value="windows">ویندوز</option>
           <option value="mac">macOS</option>
           <option value="linux">لینوکس</option>
           <option value="no-preference">بدون ترجیح</option>
         </select>
       </div>
     </fieldset>
     
     <div>
       <button type="submit">ثبت‌نام در کارگاه‌ها</button>
     </div>
   </form>
   ```

4. **ساخت فرم تماس و بازخورد**
   
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>اطلاعات تماس</legend>
       
       <div>
         <label for="contact-name">نام:</label>
         <input type="text" id="contact-name" name="name" required>
       </div>
       
       <div>
         <label for="contact-email">ایمیل:</label>
         <input type="email" id="contact-email" name="email" required>
       </div>
       
       <div>
         <label for="contact-subject">موضوع:</label>
         <select id="contact-subject" name="subject" required>
           <option value="">یک موضوع انتخاب کنید...</option>
           <option value="registration">سؤال ثبت‌نام</option>
           <option value="schedule">اطلاعات برنامه</option>
           <option value="payment">مشکل پرداخت</option>
           <option value="technical">پشتیبانی فنی</option>
           <option value="feedback">بازخورد عمومی</option>
           <option value="other">سایر</option>
         </select>
       </div>
       
       <div>
         <label for="contact-message">پیام:</label>
         <textarea id="contact-message" name="message" rows="6" cols="50" 
                   placeholder="لطفاً پیام خود را اینجا تایپ کنید..." required></textarea>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>بازخورد رویداد</legend>
       
       <div>
         <label for="overall-rating">امتیاز کلی رویداد:</label>
         <select id="overall-rating" name="overallRating">
           <option value="">به رویداد امتیاز دهید...</option>
           <option value="5">عالی (۵ ستاره)</option>
           <option value="4">خیلی خوب (۴ ستاره)</option>
           <option value="3">خوب (۳ ستاره)</option>
           <option value="2">متوسط (۲ ستاره)</option>
           <option value="1">ضعیف (۱ ستاره)</option>
         </select>
       </div>
       
       <div>
         <label for="recommend">آیا این رویداد را توصیه می‌کنید؟</label>
         <div>
           <input type="radio" id="recommend-yes" name="recommend" value="yes">
           <label for="recommend-yes">بله، قطعاً</label>
         </div>
         <div>
           <input type="radio" id="recommend-maybe" name="recommend" value="maybe">
           <label for="recommend-maybe">شاید</label>
         </div>
         <div>
           <input type="radio" id="recommend-no" name="recommend" value="no">
           <label for="recommend-no">نه، احتمالاً نه</label>
         </div>
       </div>
       
       <div>
         <label for="suggestions">پیشنهادات برای بهبود:</label>
         <textarea id="suggestions" name="suggestions" rows="4" cols="50"
                   placeholder="دفعه بعد چه کاری می‌توانیم بهتر انجام دهیم؟"></textarea>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>خبرنامه و به‌روزرسانی‌ها</legend>
       
       <div>
         <input type="checkbox" id="newsletter" name="newsletter" value="yes">
         <label for="newsletter">در خبرنامه ما عضو شوید</label>
       </div>
       
       <div>
         <input type="checkbox" id="event-updates" name="eventUpdates" value="yes">
         <label for="event-updates">به‌روزرسانی‌هایی درباره رویدادهای آینده دریافت کنید</label>
       </div>
       
       <div>
         <label for="interests">موضوعات مورد علاقه:</label>
         <select id="interests" name="interests" multiple size="4">
           <option value="technology">روندهای فناوری</option>
           <option value="business">استراتژی کسب و کار</option>
           <option value="design">طراحی و UX</option>
           <option value="development">توسعه نرم‌افزار</option>
           <option value="leadership">مهارت‌های رهبری</option>
           <option value="innovation">نوآوری</option>
         </select>
         <small>Ctrl (Cmd در Mac) را نگه دارید تا چندین گزینه انتخاب کنید</small>
       </div>
     </fieldset>
     
     <div>
       <button type="submit">ارسال پیام</button>
       <button type="reset">پاک کردن فرم</button>
     </div>
   </form>
   ```

## 💡 نکات حرفه‌ای

- همیشه از عناصر `<label>` مناسب با ویژگی‌های `for` استفاده کنید
- ویژگی‌های `required` را برای فیلدهای اجباری اضافه کنید
- از انواع `input` مناسب برای تجربه موبایل بهتر استفاده کنید
- فیلدهای مرتبط را با `<fieldset>` و `<legend>` گروه‌بندی کنید
- دستورالعمل‌های واضح و متن placeholder ارائه دهید
- اعتبارسنجی فرم و مدیریت خطا را در نظر بگیرید

## 🚀 چالش‌های اضافی

1. **اضافه کردن انواع Input پیشرفته**
   - انتخابگرهای تاریخ و زمان برای برنامه‌ریزی رویداد
   - ورودی‌های عددی با min/max برای قیمت‌گذاری
   - اسلایدرهای محدوده برای سیستم‌های امتیازدهی

2. **شامل کردن فرم‌های آپلود فایل**
   - آپلود رزومه/CV برای درخواست سخنرانی
   - آپلود عکس برای پروفایل شرکت‌کنندگان
   - آپلود سند برای مواد ارائه

3. **ایجاد فرم‌های چند مرحله‌ای**
   - تقسیم فرم‌های طولانی به چندین مرحله
   - اضافه کردن نشانگرهای پیشرفت
   - شامل کردن ناوبری قبلی/بعدی

4. **اضافه کردن اعتبارسنجی فرم**
   - اعتبارسنجی سمت کلاینت با HTML5
   - پیام‌های اعتبارسنجی سفارشی
   - بازخورد لحظه‌ای برای کاربران

## ✅ چک‌لیست تکمیل

- [ ] صفحه ثبت‌نام اصلی با فرم سریع ایجاد شد
- [ ] فرم جامع ثبت‌نام کنفرانس ساخته شد
- [ ] ثبت‌نام کارگاه با سطوح مهارت ایجاد شد
- [ ] فرم‌های تماس و بازخورد اضافه شد
- [ ] از ساختار فرم مناسب با fieldset استفاده شد
- [ ] همه انواع اصلی input شامل شد
- [ ] برچسب‌های مناسب برای همه ورودی‌ها اضافه شد
- [ ] از ویژگی‌های اعتبارسنجی فرم مناسب استفاده شد
- [ ] منوهای کشویی برای انتخاب‌ها ایجاد شد
- [ ] عناصر textarea برای متن طولانی اضافه شد
- [ ] radio button ها و checkbox ها شامل شد
- [ ] دکمه‌های ارسال و ریست اضافه شد
- [ ] قابلیت استفاده و دسترسی فرم تست شد

## 🎨 نکات طراحی فرم

- فرم‌ها را منظم و منطقی نگه دارید
- از فاصله‌گذاری و تراز سازگار استفاده کنید
- فیلدهای مرتبط را با هم گروه‌بندی کنید
- دستورالعمل‌های واضح و متن کمکی ارائه دهید
- پیام‌های خطا را مفید و مشخص کنید
- طرح‌های فرم دوستدار موبایل را در نظر بگیرید

این تمرین تمرین جامعی با فرم‌های HTML فراهم می‌کند در حالی که یک سیستم ثبت‌نام رویداد عملی می‌سازد!
