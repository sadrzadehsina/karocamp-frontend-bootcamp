<!-- markdownlint-disable -->

# تمرین ۰۶: ساخت پورتال درخواست شغل با فرم‌های پیشرفته

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- ایجاد اپلیکیشن‌های فرم چند صفحه‌ای با ماندگاری داده
- تکنیک‌های پیشرفته اعتبارسنجی فرم و بازخورد کاربر
- کار با طرح‌ها و سازماندهی پیچیده فرم
- پیاده‌سازی فیلدهای فرم شرطی و تعاملات پویا
- ساخت فرم‌های درخواست حرفه‌ای با UX مناسب
- درک دسترسی فرم و اصول طراحی فراگیر

## 📋 توضیح تمرین

یک پورتال درخواست شغل جامع بسازید که شامل فهرست مشاغل، فرم‌های درخواست تفصیلی، پروفایل‌های کاندیدا و داشبوردهای کارفرما باشد. این تمرین پیشرفته همه عناصر فرم HTML را در یک زمینه حرفه‌ای واقعی ترکیب می‌کند.

## 🔧 الزامات

پورتال درخواست شغل شما باید شامل موارد زیر باشد:

1. **پورتال اصلی شغل (index.html)**
   - فرم جستجوی شغل با فیلترها
   - فهرست مشاغل ویژه
   - فرم درخواست سریع
   - گزینه‌های ورود/ثبت‌نام کاربر

2. **درخواست شغل تفصیلی (application.html)**
   - فرم اطلاعات شخصی
   - بخش تجربه حرفه‌ای
   - فرم پیشینه تحصیلی
   - ارزیابی مهارت‌ها با امتیازدهی
   - نامه انگیزه و اسناد اضافی

3. **پروفایل کاندیدا (profile.html)**
   - فرم ایجاد و ویرایش پروفایل
   - سازنده رزومه با بخش‌های متعدد
   - تنظیمات ترجیح برای هشدارهای شغلی
   - آپلود نمونه کار و پورتفولیو

4. **داشبورد کارفرما (employer.html)**
   - فرم ارسال آگهی شغل
   - رابط بررسی درخواست
   - فیلتر و جستجوی کاندیدا
   - فرم برنامه‌ریزی مصاحبه

5. **نظرسنجی و بازخورد (survey.html)**
   - نظرسنجی تجربه کاربری
   - بازخورد فرآیند درخواست
   - پیشنهادات بهبود سیستم
   - گزینه بازخورد ناشناس

## 🔧 الزامات فنی

### ساختار فایل:
```
job-portal/
├── index.html
├── application.html
├── profile.html
├── employer.html
├── survey.html
├── styles/
│   └── portal-styles.css
└── scripts/
    └── form-interactions.js (جای‌گذار)
```

### عناصر HTML پیشرفته برای استفاده:
- همه انواع input فرم شامل انواع جدیدتر HTML5
- ساختارهای پیچیده fieldset و legend
- اعتبارسنجی فرم با پیام‌های خطای سفارشی
- برچسب‌ها و توضیحات فرم قابل دسترس
- افشای تدریجی با فیلدهای شرطی
- قابلیت‌های آپلود چندین فایل

## 📝 دستورالعمل گام به گام

1. **ایجاد پورتال اصلی شغل با جستجو**
   
   **فرم جستجو و فیلتر شغل:**
   ```html
   <form action="#" method="get" id="job-search">
     <fieldset>
       <legend>شغل رویایی خود را پیدا کنید</legend>
       
       <div class="search-row">
         <div>
           <label for="job-title">عنوان شغل یا کلمات کلیدی:</label>
           <input type="search" id="job-title" name="jobTitle" 
                  placeholder="مثلاً توسعه‌دهنده نرم‌افزار، مدیر بازاریابی">
         </div>
         
         <div>
           <label for="location">مکان:</label>
           <input type="text" id="location" name="location" 
                  placeholder="شهر، استان، یا دورکاری">
         </div>
         
         <div>
           <button type="submit">جستجوی مشاغل</button>
         </div>
       </div>
       
       <details>
         <summary>فیلترهای پیشرفته</summary>
         
         <div class="filter-section">
           <div>
             <label for="job-type">نوع استخدام:</label>
             <select id="job-type" name="jobType" multiple size="4">
               <option value="full-time">تمام وقت</option>
               <option value="part-time">پاره وقت</option>
               <option value="contract">قراردادی</option>
               <option value="freelance">آزاد</option>
               <option value="internship">کارآموزی</option>
             </select>
           </div>
           
           <div>
             <label for="salary-min">حداقل حقوق:</label>
             <input type="number" id="salary-min" name="salaryMin" 
                    min="0" max="500000" step="5000" placeholder="۵۰٫۰۰۰٫۰۰۰ تومان">
           </div>
           
           <div>
             <label for="experience-level">سطح تجربه:</label>
             <select id="experience-level" name="experienceLevel">
               <option value="">هر سطحی</option>
               <option value="entry">سطح ابتدایی (۰-۲ سال)</option>
               <option value="mid">سطح متوسط (۲-۵ سال)</option>
               <option value="senior">سطح ارشد (۵-۱۰ سال)</option>
               <option value="executive">مدیریتی (۱۰+ سال)</option>
             </select>
           </div>
           
           <div>
             <label for="remote-work">گزینه‌های کار از راه دور:</label>
             <div>
               <input type="checkbox" id="remote-ok" name="remoteOptions" value="remote">
               <label for="remote-ok">دورکاری مجاز</label>
             </div>
             <div>
               <input type="checkbox" id="hybrid-ok" name="remoteOptions" value="hybrid">
               <label for="hybrid-ok">گزینه‌های ترکیبی</label>
             </div>
           </div>
         </div>
       </details>
     </fieldset>
   </form>
   
   <section>
     <h3>درخواست سریع</h3>
     <form action="#" method="post">
       <div>
         <label for="quick-email">آدرس ایمیل:</label>
         <input type="email" id="quick-email" name="email" required>
       </div>
       
       <div>
         <label for="quick-resume">آپلود رزومه:</label>
         <input type="file" id="quick-resume" name="resume" 
                accept=".pdf,.doc,.docx" required>
       </div>
       
       <div>
         <label for="target-position">موقعیت هدف:</label>
         <input type="text" id="target-position" name="targetPosition" required>
       </div>
       
       <div>
         <button type="submit">درخواست سریع</button>
       </div>
     </form>
   </section>
   ```

2. **ساخت فرم درخواست شغل جامع**
   
   ```html
   <form action="#" method="post" enctype="multipart/form-data">
     <fieldset>
       <legend>اطلاعات شخصی</legend>
       
       <div class="form-row">
         <div>
           <label for="first-name">نام:</label>
           <input type="text" id="first-name" name="firstName" required>
         </div>
         
         <div>
           <label for="last-name">نام خانوادگی:</label>
           <input type="text" id="last-name" name="lastName" required>
         </div>
       </div>
       
       <div class="form-row">
         <div>
           <label for="email">آدرس ایمیل:</label>
           <input type="email" id="email" name="email" required>
         </div>
         
         <div>
           <label for="phone">شماره تلفن:</label>
           <input type="tel" id="phone" name="phone" required>
         </div>
       </div>
       
       <div>
         <label for="address">آدرس:</label>
         <textarea id="address" name="address" rows="3" cols="50" required></textarea>
       </div>
       
       <div class="form-row">
         <div>
           <label for="city">شهر:</label>
           <input type="text" id="city" name="city" required>
         </div>
         
         <div>
           <label for="state">استان:</label>
           <input type="text" id="state" name="state" required>
         </div>
         
         <div>
           <label for="zip">کد پستی:</label>
           <input type="text" id="zip" name="zipCode" required>
         </div>
       </div>
       
       <div>
         <label for="date-of-birth">تاریخ تولد:</label>
         <input type="date" id="date-of-birth" name="dateOfBirth">
       </div>
     </fieldset>
     
     <fieldset>
       <legend>تجربه حرفه‌ای</legend>
       
       <div id="experience-container">
         <div class="experience-entry">
           <h4>موقعیت فعلی/آخرین</h4>
           
           <div class="form-row">
             <div>
               <label for="job-title-1">عنوان شغل:</label>
               <input type="text" id="job-title-1" name="jobTitle1" required>
             </div>
             
             <div>
               <label for="company-1">نام شرکت:</label>
               <input type="text" id="company-1" name="company1" required>
             </div>
           </div>
           
           <div class="form-row">
             <div>
               <label for="start-date-1">تاریخ شروع:</label>
               <input type="month" id="start-date-1" name="startDate1" required>
             </div>
             
             <div>
               <label for="end-date-1">تاریخ پایان:</label>
               <input type="month" id="end-date-1" name="endDate1">
               <label>
                 <input type="checkbox" name="currentJob1" value="yes"> شغل فعلی
               </label>
             </div>
           </div>
           
           <div>
             <label for="responsibilities-1">مسئولیت‌های کلیدی:</label>
             <textarea id="responsibilities-1" name="responsibilities1" 
                       rows="4" cols="50" required></textarea>
           </div>
           
           <div>
             <label for="salary-1">محدوده حقوق:</label>
             <select id="salary-1" name="salary1">
               <option value="">ترجیح می‌دهم نگویم</option>
               <option value="30-40m">۳۰-۴۰ میلیون تومان</option>
               <option value="40-50m">۴۰-۵۰ میلیون تومان</option>
               <option value="50-60m">۵۰-۶۰ میلیون تومان</option>
               <option value="60-80m">۶۰-۸۰ میلیون تومان</option>
               <option value="80-100m">۸۰-۱۰۰ میلیون تومان</option>
               <option value="100m+">بیشتر از ۱۰۰ میلیون تومان</option>
             </select>
           </div>
         </div>
       </div>
       
       <button type="button" id="add-experience">اضافه کردن موقعیت دیگر</button>
     </fieldset>
     
     <fieldset>
       <legend>پیشینه تحصیلی</legend>
       
       <div>
         <label for="education-level">بالاترین سطح تحصیلات:</label>
         <select id="education-level" name="educationLevel" required>
           <option value="">سطح تحصیلات را انتخاب کنید...</option>
           <option value="high-school">دیپلم</option>
           <option value="associate">فوق‌دیپلم</option>
           <option value="bachelor">کارشناسی</option>
           <option value="master">کارشناسی ارشد</option>
           <option value="doctorate">دکتری</option>
           <option value="other">سایر</option>
         </select>
       </div>
       
       <div class="form-row">
         <div>
           <label for="school-name">نام مدرسه/دانشگاه:</label>
           <input type="text" id="school-name" name="schoolName" required>
         </div>
         
         <div>
           <label for="graduation-year">سال فارغ‌التحصیلی:</label>
           <input type="number" id="graduation-year" name="graduationYear" 
                  min="1350" max="1410">
         </div>
       </div>
       
       <div>
         <label for="field-of-study">رشته تحصیلی:</label>
         <input type="text" id="field-of-study" name="fieldOfStudy">
       </div>
       
       <div>
         <label for="gpa">معدل (اختیاری):</label>
         <input type="number" id="gpa" name="gpa" min="0" max="20" step="0.01">
       </div>
     </fieldset>
     
     <fieldset>
       <legend>ارزیابی مهارت‌ها</legend>
       
       <div class="skills-section">
         <h4>مهارت‌های فنی</h4>
         
         <div class="skill-item">
           <label for="programming">زبان‌های برنامه‌نویسی:</label>
           <div>
             <input type="checkbox" id="javascript" name="skills" value="javascript">
             <label for="javascript">JavaScript</label>
           </div>
           <div>
             <input type="checkbox" id="python" name="skills" value="python">
             <label for="python">Python</label>
           </div>
           <div>
             <input type="checkbox" id="java" name="skills" value="java">
             <label for="java">Java</label>
           </div>
           <div>
             <input type="checkbox" id="csharp" name="skills" value="csharp">
             <label for="csharp">C#</label>
           </div>
         </div>
         
         <div class="skill-rating">
           <label for="communication">مهارت‌های ارتباطی (۱-۱۰):</label>
           <input type="range" id="communication" name="communicationSkill" 
                  min="1" max="10" value="5">
           <output for="communication">۵</output>
         </div>
         
         <div class="skill-rating">
           <label for="leadership">تجربه رهبری (۱-۱۰):</label>
           <input type="range" id="leadership" name="leadershipSkill" 
                  min="1" max="10" value="5">
           <output for="leadership">۵</output>
         </div>
         
         <div class="skill-rating">
           <label for="problem-solving">حل مسئله (۱-۱۰):</label>
           <input type="range" id="problem-solving" name="problemSolvingSkill" 
                  min="1" max="10" value="5">
           <output for="problem-solving">۵</output>
         </div>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>اطلاعات اضافی</legend>
       
       <div>
         <label for="cover-letter">نامه انگیزه:</label>
         <textarea id="cover-letter" name="coverLetter" rows="8" cols="50" 
                   placeholder="به ما بگویید چرا برای این موقعیت مناسب هستید..."></textarea>
       </div>
       
       <div>
         <label for="portfolio">وب‌سایت نمونه کار:</label>
         <input type="url" id="portfolio" name="portfolioUrl" 
                placeholder="https://yourportfolio.com">
       </div>
       
       <div>
         <label for="linkedin">پروفایل لینکدین:</label>
         <input type="url" id="linkedin" name="linkedinUrl" 
                placeholder="https://linkedin.com/in/yourprofile">
       </div>
       
       <div>
         <label for="resume-upload">آپلود رزومه:</label>
         <input type="file" id="resume-upload" name="resumeFile" 
                accept=".pdf,.doc,.docx" required>
       </div>
       
       <div>
         <label for="references">مراجع در دسترس:</label>
         <div>
           <input type="radio" id="references-yes" name="referencesAvailable" value="yes">
           <label for="references-yes">بله، در صورت درخواست</label>
         </div>
         <div>
           <input type="radio" id="references-no" name="referencesAvailable" value="no">
           <label for="references-no">خیر</label>
         </div>
         <div>
           <input type="radio" id="references-attached" name="referencesAvailable" value="attached">
           <label for="references-attached">همراه با درخواست پیوست شده</label>
         </div>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>ترجیحات کاری</legend>
       
       <div>
         <label for="availability">تاریخ شروع در دسترس:</label>
         <input type="date" id="availability" name="availableStartDate" required>
       </div>
       
       <div>
         <label for="salary-expectation">انتظار حقوق:</label>
         <input type="number" id="salary-expectation" name="salaryExpectation" 
                min="0" step="1000000" placeholder="انتظار حقوق سالانه">
       </div>
       
       <div>
         <label for="work-location">مکان کار ترجیحی:</label>
         <div>
           <input type="radio" id="onsite" name="workLocation" value="onsite">
           <label for="onsite">حضوری</label>
         </div>
         <div>
           <input type="radio" id="remote" name="workLocation" value="remote">
           <label for="remote">دورکاری</label>
         </div>
         <div>
           <input type="radio" id="hybrid" name="workLocation" value="hybrid">
           <label for="hybrid">ترکیبی</label>
         </div>
         <div>
           <input type="radio" id="flexible" name="workLocation" value="flexible">
           <label for="flexible">انعطاف‌پذیر</label>
         </div>
       </div>
       
       <div>
         <label for="travel-willingness">تمایل به سفر:</label>
         <select id="travel-willingness" name="travelWillingness">
           <option value="none">بدون سفر</option>
           <option value="minimal">حداقل (کمتر از ۱۰٪)</option>
           <option value="moderate">متوسط (۱۰-۲۵٪)</option>
           <option value="frequent">مکرر (۲۵-۵۰٪)</option>
           <option value="extensive">گسترده (بیشتر از ۵۰٪)</option>
         </select>
       </div>
     </fieldset>
     
     <fieldset>
       <legend>قانونی و انطباق</legend>
       
       <div>
         <label for="work-authorization">مجوز کار:</label>
         <div>
           <input type="radio" id="citizen" name="workAuth" value="citizen" required>
           <label for="citizen">شهروند ایرانی</label>
         </div>
         <div>
           <input type="radio" id="permanent-resident" name="workAuth" value="permanent">
           <label for="permanent-resident">ساکن دائم</label>
         </div>
         <div>
           <input type="radio" id="visa-holder" name="workAuth" value="visa">
           <label for="visa-holder">دارنده ویزا</label>
         </div>
         <div>
           <input type="radio" id="need-sponsorship" name="workAuth" value="sponsorship">
           <label for="need-sponsorship">نیاز به حمایت</label>
         </div>
       </div>
       
       <div>
         <input type="checkbox" id="background-check" name="backgroundCheck" value="agreed" required>
         <label for="background-check">با بررسی سوابق موافقم</label>
       </div>
       
       <div>
         <input type="checkbox" id="drug-test" name="drugTest" value="agreed">
         <label for="drug-test">در صورت نیاز با تست مواد مخدر موافقم</label>
       </div>
       
       <div>
         <input type="checkbox" id="terms-agreement" name="termsAgreement" value="agreed" required>
         <label for="terms-agreement">با شرایط و ضوابط موافقم</label>
       </div>
     </fieldset>
     
     <div class="form-actions">
       <button type="submit">ارسال درخواست</button>
       <button type="button">ذخیره به عنوان پیش‌نویس</button>
       <button type="reset">پاک کردن فرم</button>
     </div>
   </form>
   ```

3. **ایجاد فرم نظرسنجی و بازخورد**
   
   ```html
   <form action="#" method="post">
     <fieldset>
       <legend>نظرسنجی تجربه درخواست</legend>
       
       <div>
         <label for="overall-experience">تجربه کلی درخواست:</label>
         <select id="overall-experience" name="overallExperience" required>
           <option value="">تجربه خود را امتیازدهی کنید...</option>
           <option value="excellent">عالی</option>
           <option value="very-good">خیلی خوب</option>
           <option value="good">خوب</option>
           <option value="fair">متوسط</option>
           <option value="poor">ضعیف</option>
         </select>
       </div>
       
       <div>
         <label for="ease-of-use">تکمیل درخواست چقدر آسان بود؟</label>
         <div>
           <input type="radio" id="very-easy" name="easeOfUse" value="very-easy">
           <label for="very-easy">خیلی آسان</label>
         </div>
         <div>
           <input type="radio" id="easy" name="easeOfUse" value="easy">
           <label for="easy">آسان</label>
         </div>
         <div>
           <input type="radio" id="neutral" name="easeOfUse" value="neutral">
           <label for="neutral">بی‌طرف</label>
         </div>
         <div>
           <input type="radio" id="difficult" name="easeOfUse" value="difficult">
           <label for="difficult">سخت</label>
         </div>
         <div>
           <input type="radio" id="very-difficult" name="easeOfUse" value="very-difficult">
           <label for="very-difficult">خیلی سخت</label>
         </div>
       </div>
       
       <div>
         <label for="time-to-complete">زمان تکمیل درخواست:</label>
         <select id="time-to-complete" name="timeToComplete">
           <option value="under-15">کمتر از ۱۵ دقیقه</option>
           <option value="15-30">۱۵-۳۰ دقیقه</option>
           <option value="30-45">۳۰-۴۵ دقیقه</option>
           <option value="45-60">۴۵-۶۰ دقیقه</option>
           <option value="over-60">بیشتر از ۱ ساعت</option>
         </select>
       </div>
       
       <div>
         <label for="improvements">چه چیزی را می‌توانیم بهبود ببخشیم؟</label>
         <div>
           <input type="checkbox" id="improve-layout" name="improvements" value="layout">
           <label for="improve-layout">طرح و طراحی صفحه</label>
         </div>
         <div>
           <input type="checkbox" id="improve-instructions" name="improvements" value="instructions">
           <label for="improve-instructions">وضوح دستورالعمل‌ها</label>
         </div>
         <div>
           <input type="checkbox" id="improve-speed" name="improvements" value="speed">
           <label for="improve-speed">سرعت بارگذاری صفحه</label>
         </div>
         <div>
           <input type="checkbox" id="improve-mobile" name="improvements" value="mobile">
           <label for="improve-mobile">تجربه موبایل</label>
         </div>
         <div>
           <input type="checkbox" id="improve-validation" name="improvements" value="validation">
           <label for="improve-validation">اعتبارسنجی فرم</label>
         </div>
       </div>
       
       <div>
         <label for="additional-comments">نظرات اضافی:</label>
         <textarea id="additional-comments" name="additionalComments" 
                   rows="5" cols="50" 
                   placeholder="لطفاً هر بازخورد اضافی را به اشتراک بگذارید..."></textarea>
       </div>
       
       <div>
         <input type="checkbox" id="anonymous-feedback" name="anonymousFeedback" value="yes">
         <label for="anonymous-feedback">ارسال بازخورد ناشناس</label>
       </div>
     </fieldset>
     
     <div>
       <button type="submit">ارسال بازخورد</button>
     </div>
   </form>
   ```

## 💡 نکات حرفه‌ای

- از افشای تدریجی برای مدیریت فرم‌های پیچیده استفاده کنید
- بازخورد اعتبارسنجی لحظه‌ای پیاده‌سازی کنید
- فیلدهای مرتبط را منطقی با fieldset گروه‌بندی کنید
- نشانگرهای پیشرفت واضح برای فرم‌های چند مرحله‌ای ارائه دهید
- از انواع input مناسب برای تجربه موبایل بهتر استفاده کنید
- متن placeholder مفید و دستورالعمل‌ها اضافه کنید
- فرم‌ها را برای انطباق دسترسی کاملاً تست کنید

## 🚀 چالش‌های اضافی

1. **اضافه کردن آنالیتیک فرم**
   - نرخ تکمیل برای بخش‌های مختلف را ردیابی کنید
   - شناسایی نقاطی که کاربران رها می‌کنند
   - زمان صرف شده روی هر بخش را اندازه‌گیری کنید

2. **پیاده‌سازی ذخیره خودکار**
   - پیشرفت فرم را به طور خودکار ذخیره کنید
   - اجازه بازگشت کاربران به درخواست‌های ناتمام
   - هشدارهای timeout جلسه ارائه دهید

3. **ایجاد فیلدهای فرم پویا**
   - ورودی‌های تجربه را به طور پویا اضافه/حذف کنید
   - فیلدها را بر اساس انتخاب‌ها نشان/مخفی کنید
   - اعتبارسنجی شرطی پیاده‌سازی کنید

4. **ساخت مدیریت فایل پیشرفته**
   - آپلود چندین فایل با پیش‌نمایش
   - اعتبارسنجی نوع و اندازه فایل
   - رابط آپلود فایل drag-and-drop

## ✅ چک‌لیست تکمیل

- [ ] فرم جستجوی شغل جامع ایجاد شد
- [ ] فرم درخواست تفصیلی چند بخشی ساخته شد
- [ ] ایجاد پروفایل کاندیدا پیاده‌سازی شد
- [ ] عملکرد داشبورد کارفرما اضافه شد
- [ ] نظرسنجی تجربه کاربری ایجاد شد
- [ ] همه عناصر اصلی فرم HTML استفاده شد
- [ ] اعتبارسنجی فرم مناسب پیاده‌سازی شد
- [ ] ویژگی‌های دسترسی در سراسر اضافه شد
- [ ] سازماندهی منطقی فرم ایجاد شد
- [ ] فرم‌ها روی دستگاه‌های مختلف تست شد
- [ ] قابلیت‌های آپلود فایل اضافه شد
- [ ] برچسب‌ها و توضیحات مناسب فرم اضافه شد
- [ ] الگوهای افشای تدریجی پیاده‌سازی شد

این تمرین پیشرفته تجربه جامعی با فرم‌های HTML سطح حرفه‌ای فراهم می‌کند در حالی که یک سیستم درخواست شغل واقعی می‌سازد!
