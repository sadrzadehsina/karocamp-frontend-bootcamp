# 🎯 چالش آسان مرحله ۸-۰۱: مدیریت پروفایل کاربر مدرن (مرحله ۸ - جاوااسکریپت مدرن)

## 📝 توضیحات

یک سیستم پروفایل کاربر را با استفاده از ویژگی‌های مدرن ES6+ مانند destructuring، عملگر spread و تعریف متغیر مدرن بازنویسی کنید.

## 🎯 اهداف

- تمرین با `let` و `const` و محدوده بلاک
- استفاده از destructuring برای آبجکت و آرایه
- استفاده از عملگر spread و rest
- پیاده‌سازی پارامتر پیش‌فرض
- استفاده از template literal و سینتکس مدرن

## 📋 الزامات

۱. ساختار داده پروفایل کاربر:
   ```javascript
   const userData = {
     personal: {
       firstName: 'جان',
       lastName: 'دو',
       age: 28,
       email: 'john@example.com'
     },
     preferences: {
       theme: 'dark',
       language: 'fa',
       notifications: true
     },
     social: {
       twitter: '@johndoe',
       linkedin: 'john-doe'
     }
   };
   ```

۲. توابع مورد نیاز با سینتکس مدرن:
   - استخراج اطلاعات کاربر با destructuring
   - به‌روزرسانی پروفایل با spread
   - ادغام چند پروفایل
   - ساخت کارت نمایش کاربر با template literal
   - مدیریت داده ناقص با پارامتر پیش‌فرض

۳. الزامات سینتکس مدرن:
   - استفاده از `const` برای مقادیر ثابت و `let` برای متغیرها
   - destructuring تو در تو
   - استفاده از spread برای کپی و ادغام
   - پارامتر پیش‌فرض
   - template literal برای فرمت‌دهی رشته

## 💡 توابع نمونه

```javascript
// destructuring و پارامتر پیش‌فرض
function createUserCard(user, template = 'basic') {
  const { 
    personal: { firstName, lastName, email }, 
    preferences: { theme = 'light' } = {},
    social = {}
  } = user;
  return `
    <div class="user-card theme-${theme}">
      <h2>${firstName} ${lastName}</h2>
      <p>ایمیل: ${email}</p>
      ${social.twitter ? `<p>توییتر: ${social.twitter}</p>` : ''}
    </div>
  `;
}

// spread برای به‌روزرسانی
function updateUserProfile(currentUser, updates) {
  return {
    ...currentUser,
    personal: {
      ...currentUser.personal,
      ...updates.personal
    },
    preferences: {
      ...currentUser.preferences,
      ...updates.preferences
    }
  };
}

// rest parameter
function mergeUserProfiles(mainProfile, ...additionalProfiles) {
  return additionalProfiles.reduce((merged, profile) => ({
    ...merged,
    ...profile
  }), mainProfile);
}
```

## 🚀 ویژگی‌های مورد انتظار

۱. **نمایش پروفایل**:
   - استخراج و نمایش اطلاعات با destructuring
   - مدیریت نبود لینک شبکه اجتماعی
   - استفاده از تم پیش‌فرض

۲. **به‌روزرسانی پروفایل**:
   - به‌روزرسانی بخش خاص بدون تغییر کل آبجکت
   - ادغام چند آبجکت به‌روزرسانی
   - حفظ داده قبلی هنگام به‌روزرسانی

۳. **عملیات گروهی**:
   - پردازش چند کاربر با destructuring آرایه
   - استخراج الگوهای داده مشترک
   - ساخت گزارش با template literal

## ✅ سینتکس مدرن مورد انتظار

- `const` و `let` با محدوده بلاک
- destructuring آبجکت: `const { name, email } = user`
- destructuring آرایه: `const [first, second] = users`
- destructuring تو در تو: `const { personal: { firstName } } = user`
- spread: `{ ...user, age: 30 }`
- rest: `function merge(main, ...others)`
- پارامتر پیش‌فرض: `function display(user, theme = 'light')`
- template literal: `` `سلام ${name}` ``

## 🌟 نکته تکمیلی

- استفاده از property shorthand
- استفاده از property داینامیک
- افزودن متدهای آرایه با arrow function
- استفاده از Symbol برای پراپرتی خصوصی
