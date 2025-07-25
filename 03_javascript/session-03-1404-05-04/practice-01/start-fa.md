<!-- markdownlint-disable -->

# تمرین ۰۳: ساخت بازی حدس عدد

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- استفاده از عبارات شرطی (`if`، `else if`، `else`)
- کار با عبارات `switch` برای شرایط متعدد
- پیاده‌سازی انواع مختلف حلقه‌ها (`for`، `while`، `do...while`)
- استفاده از عبارات `break` و `continue` در حلقه‌ها
- ترکیب جریان کنترل با مفاهیم قبلی (متغیرها، عملگرها)
- ایجاد منطق تعاملی با شاخه‌بندی شرطی

## 📋 توضیح تمرین

بازی حدس عددی بسازید که در آن کامپیوتر یک عدد تصادفی تولید می‌کند و کاربر (شبیه‌سازی شده) سعی می‌کند آن را حدس بزند. این تمرین به شما کمک می‌کند تا مفاهیم جریان کنترل مرحله ۳ را تمرین کنید.

## 🔧 الزامات

### الزامات پایه:
1. یک عدد تصادفی بین ۱ تا ۱۰۰ تولید کنید
2. شبیه‌سازی حدس‌های کاربر ایجاد کنید
3. از عبارات `if`/`else` برای بررسی اینکه حدس درست، خیلی بالا یا خیلی پایین است، استفاده کنید
4. از حلقه برای امکان حدس‌های متعدد استفاده کنید
5. تعداد تلاش‌ها را بشمارید
6. از `break` برای خروج از حلقه وقتی عدد حدس زده شد، استفاده کنید

### الزامات پیشرفته:
1. سطوح دشواری با استفاده از عبارات `switch` اضافه کنید
2. حداکثر تعداد تلاش‌ها را پیاده‌سازی کنید
3. از `continue` برای رد کردن حدس‌های نامعتبر استفاده کنید
4. قابلیت بازی مجدد با استفاده از حلقه `do...while` اضافه کنید

## 💻 ساختار نمونه کد

```javascript
// مرحله ۱: تولید عدد تصادفی و راه‌اندازی بازی
const targetNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let maxAttempts = 10;
let gameWon = false;

// مرحله ۲: شبیه‌سازی حدس‌های کاربر (در بازی واقعی، این ورودی کاربر خواهد بود)
const simulatedGuesses = [50, 75, 60, 65, 62, 64, 63]; // حدس‌های نمونه

console.log("🎯 به بازی حدس عدد خوش آمدید!");
console.log("من به عددی بین ۱ تا ۱۰۰ فکر می‌کنم");
console.log(`شما ${maxAttempts} تلاش برای حدس زدن آن دارید!`);

// مرحله ۳: حلقه بازی
while (attempts < maxAttempts && !gameWon) {
    // منطق بازی شما اینجا
    let currentGuess = simulatedGuesses[attempts];
    attempts++;
    
    console.log(`تلاش ${attempts}: حدس شما ${currentGuess} است`);
    
    // منطق شرطی شما اینجا
    if (currentGuess === targetNumber) {
        // مدیریت حدس درست
    } else if (currentGuess < targetNumber) {
        // مدیریت حدس خیلی پایین
    } else {
        // مدیریت حدس خیلی بالا
    }
}

// مرحله ۴: منطق پایان بازی
// منطق پایان بازی شما اینجا
```

## ✅ خروجی مورد انتظار

```
🎯 به بازی حدس عدد خوش آمدید!
من به عددی بین ۱ تا ۱۰۰ فکر می‌کنم
شما 10 تلاش برای حدس زدن آن دارید!

تلاش 1: حدس شما 50 است
خیلی پایین! عدد بالاتری امتحان کنید.

تلاش 2: حدس شما 75 است
خیلی بالا! عدد پایین‌تری امتحان کنید.

تلاش 3: حدس شما 62 است
خیلی پایین! عدد بالاتری امتحان کنید.

تلاش 4: حدس شما 64 است
🎉 تبریک! شما عدد 64 را در 4 تلاش حدس زدید!
```

## 🎯 وظایف چالشی

1. **سطوح دشواری**: آسان (۱-۵۰)، متوسط (۱-۱۰۰)، سخت (۱-۲۰۰) با استفاده از `switch` پیاده‌سازی کنید
2. **مدیریت ورودی نامعتبر**: از `continue` برای رد کردن حدس‌های غیرعددی یا خارج از محدوده استفاده کنید
3. **آمار بازی**: برد، باخت و میانگین تلاش‌ها را ردیابی کنید
4. **چندین دور**: از `do...while` برای امکان بازی چندین دور استفاده کنید

## 📝 ایده‌های پیاده‌سازی پیشرفته

```javascript
// انتخاب دشواری با switch
function setDifficulty(level) {
    switch (level) {
        case 'easy':
            return { max: 50, attempts: 8 };
        case 'medium':
            return { max: 100, attempts: 10 };
        case 'hard':
            return { max: 200, attempts: 15 };
        default:
            return { max: 100, attempts: 10 };
    }
}

// ردیابی آمار بازی
let gameStats = {
    gamesPlayed: 0,
    gamesWon: 0,
    totalAttempts: 0
};
```

## 🔍 مفاهیم کلیدی برای تمرین

- عبارات شرطی (`if`، `else if`، `else`)
- عبارات Switch برای شرایط متعدد
- انواع حلقه (`for`، `while`، `do...while`)
- کنترل حلقه (`break`، `continue`)
- ترکیب شرایط با عملگرهای منطقی
- ساختارهای کنترل تودرتو

## 💡 نکات

- از `Math.floor(Math.random() * max) + 1` برای تولید اعداد تصادفی استفاده کنید
- به یاد داشته باشید که `break` از کل حلقه خارج می‌شود، در حالی که `continue` به تکرار بعدی می‌پرد
- از نام‌های معنادار برای وضعیت بازی استفاده کنید (مثل `gameWon`، `attempts`)
- موارد خاص مانند ورودی‌های نامعتبر یا مقادیر مرزی را در نظر بگیرید
- منطق بازی خود را با مقادیر معلوم قبل از استفاده از اعداد تصادفی تست کنید

## 🧪 سناریوهای تست

1. **بازی کامل**: عدد را در اولین تلاش حدس بزنید
2. **حداکثر تلاش‌ها**: از همه تلاش‌ها بدون حدس درست استفاده کنید
3. **موارد مرزی**: با حدس‌های ۱، حداکثر عدد و خارج از محدوده تست کنید
4. **ورودی‌های نامعتبر**: با مقادیر غیرعددی (شبیه‌سازی شده) تست کنید
