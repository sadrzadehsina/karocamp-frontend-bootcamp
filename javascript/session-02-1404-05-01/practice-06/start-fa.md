<!-- markdownlint-disable -->

# تمرین ۰۶: ساخت سیستم احوال‌پرسی پویای کاربر

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- ایجاد توابع با الگوهای مختلف پارامتر
- درک حوزه تابع و دسترسی‌پذیری متغیر
- کار با پارامترهای پیش‌فرض و پارامترهای باقی‌مانده
- استفاده از template literals در درون توابع
- ایجاد توابع ابزاری برای وظایف رایج
- پیاده‌سازی الگوهای overloading تابع
- ساخت تجربیات کاربری تعاملی با توابع

## 📋 توضیح تمرین

سیستم جامع احوال‌پرسی کاربر بسازید که بتواند انواع مختلف اطلاعات کاربر را مدیریت کند و احوال‌پرسی‌های شخصی‌سازی شده تولید کند. این تمرین مفاهیم توابع از مرحله ۴ را تقویت می‌کند در حالی که اجزای عملی و قابل استفاده مجدد می‌سازد.

## 🔧 الزامات

### الزامات پایه:
1. تابع پایه `greetUser(name)` ایجاد کنید
2. تابع احوال‌پرسی پیشرفته با چندین پارامتر بسازید
3. توابعی با پارامترهای پیش‌فرض پیاده‌سازی کنید
4. توابع پیکانی برای ابزارهای احوال‌پرسی ساده ایجاد کنید
5. از template literals برای تولید پیام پویا استفاده کنید
6. حوزه تابع را با ترجیحات احوال‌پرسی نشان دهید

### الزامات پیشرفته:
1. توابعی ایجاد کنید که اشیاء را به عنوان پارامتر می‌پذیرند
2. توابع احوال‌پرسی برای زمان‌های مختلف روز پیاده‌سازی کنید
3. سیستم تاریخچه احوال‌پرسی بسازید
4. احوال‌پرسی شخصی‌سازی شده بر اساس ترجیحات کاربر ایجاد کنید
5. پشتیبانی احوال‌پرسی چندزبانه اضافه کنید
6. اعتبارسنجی احوال‌پرسی و مدیریت خطا پیاده‌سازی کنید

## 💻 ساختار نمونه کد

```javascript
// ترجیحات احوال‌پرسی سراسری (نمایش حوزه سراسری)
const GREETING_PREFERENCES = {
    formal: "روز بخیر [timeOfDay]، [title] [name]. به سیستم ما خوش آمدید.",
    casual: "سلام [name]! چطوری؟",
    business: "سلام [name]، ممنون که امروز به ما پیوستید.",
    friendly: "سلام [name]! خوشحالم که می‌بینمت! 😊"
};

let greetingHistory = [];

// مرحله ۱: تابع احوال‌پرسی پایه (اعلان)
function greetUser(name) {
    if (!name || name.trim() === '') {
        return "سلام! خوش آمدید!";
    }
    return `سلام، ${name}! خوش آمدید!`;
}

// مرحله ۲: احوال‌پرسی پیشرفته با چندین پارامتر
function greetUserAdvanced(name, timeOfDay = "روز", style = "casual") {
    // متغیرهای حوزه محلی
    const timestamp = new Date().toLocaleString();
    let greeting;
    
    // منطق احوال‌پرسی شما اینجا
    switch (style) {
        case 'formal':
            greeting = `${timeOfDay} بخیر، ${name}. افتخار آشنایی با شما را دارم.`;
            break;
        case 'casual':
            greeting = `سلام ${name}! امیدوارم ${timeOfDay} خوبی داشته باشی!`;
            break;
        case 'business':
            greeting = `سلام ${name}، به پلتفرم کسب‌وکار ما خوش آمدید.`;
            break;
        default:
            greeting = greetUser(name);
    }
    
    // ذخیره در تاریخچه (نمایش دسترسی حوزه)
    greetingHistory.push({
        name: name,
        greeting: greeting,
        timestamp: timestamp,
        style: style
    });
    
    return greeting;
}

// مرحله ۳: توابع پیکانی برای ابزارها
const getCurrentTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "صبح";
    if (hour < 17) return "بعدازظهر";
    if (hour < 21) return "عصر";
    return "شب";
};

const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

// مرحله ۴: تابع با پارامتر شیء
const greetUserWithProfile = (userProfile) => {
    const { 
        firstName, 
        lastName = '', 
        title = '', 
        preferredName = firstName,
        language = 'persian',
        greetingStyle = 'casual' 
    } = userProfile;
    
    const timeOfDay = getCurrentTimeOfDay();
    const displayName = preferredName || firstName;
    const fullName = title ? `${title} ${firstName} ${lastName}`.trim() : `${firstName} ${lastName}`.trim();
    
    // منطق احوال‌پرسی شخصی‌سازی شده شما اینجا
    return greetUserAdvanced(displayName, timeOfDay, greetingStyle);
};

// مرحله ۵: تابع با پارامترهای باقی‌مانده
function greetMultipleUsers(...users) {
    const greetings = [];
    
    users.forEach(user => {
        if (typeof user === 'string') {
            greetings.push(greetUser(user));
        } else if (typeof user === 'object') {
            greetings.push(greetUserWithProfile(user));
        }
    });
    
    return greetings;
}

// توابع خود را تست کنید
console.log("تست سیستم احوال‌پرسی کاربر:");
console.log("============================");

// فراخوانی‌های تست شما اینجا
const testUser1 = "احمد";
const testUser2 = {
    firstName: "سارا",
    lastName: "احمدی",
    title: "دکتر",
    preferredName: "سارا",
    greetingStyle: "formal"
};

console.log(greetUser(testUser1));
console.log(greetUserAdvanced("علی", "صبح", "formal"));
console.log(greetUserWithProfile(testUser2));
```

## ✅ خروجی مورد انتظار

```
تست سیستم احوال‌پرسی کاربر:
============================

احوال‌پرسی پایه: سلام، احمد! خوش آمدید!

احوال‌پرسی پیشرفته: صبح بخیر، علی. افتخار آشنایی با شما را دارم.

احوال‌پرسی پروفایل: بعدازظهر بخیر، دکتر سارا احمدی. افتخار آشنایی با شما را دارم.

کاربران متعدد:
- سلام، محمد! خوش آمدید!
- بعدازظهر بخیر، فاطمه. افتخار آشنایی با شما را دارم.

توابع ابزاری:
- زمان فعلی: بعدازظهر
- با حروف بزرگ: احمد رضایی
- تاریخچه احوال‌پرسی: 3 ورودی

نمایش حوزه:
- ترجیحات سراسری بارگذاری شد: 4 سبک
- timestamp محلی تولید شد: 2024-01-15 14:30:22
- تاریخچه قابل دسترس: true
```

## 🎯 وظایف چالشی

1. **پشتیبانی چندزبانه**: توابع احوال‌پرسی برای زبان‌های مختلف اضافه کنید
2. **احوال‌پرسی‌های وابسته به زمان**: احوال‌پرسی‌هایی ایجاد کنید که بر اساس تعطیلات یا تاریخ‌های خاص تغییر کنند
3. **تحلیل احوال‌پرسی**: توابعی برای تحلیل الگوهای احوال‌پرسی بسازید
4. **سازنده احوال‌پرسی سفارشی**: تابعی ایجاد کنید که قالب‌های احوال‌پرسی سفارشی می‌سازد
5. **احوال‌پرسی‌های سبک صدا**: سبک‌های شخصیت مختلف (شاد، حرفه‌ای، و غیره) پیاده‌سازی کنید

## 📝 ایده‌های پیاده‌سازی پیشرفته

```javascript
// سیستم احوال‌پرسی چندزبانه
const MULTILINGUAL_GREETINGS = {
    persian: {
        morning: "صبح بخیر",
        afternoon: "بعدازظهر بخیر", 
        evening: "عصر بخیر",
        casual: "سلام"
    },
    english: {
        morning: "Good morning",
        afternoon: "Good afternoon",
        evening: "Good evening", 
        casual: "Hello"
    },
    arabic: {
        morning: "صباح الخیر",
        afternoon: "مساء الخیر",
        evening: "مساء الخیر",
        casual: "أهلا"
    }
};

function greetInLanguage(name, language = 'persian', timeOfDay = getCurrentTimeOfDay()) {
    const greetings = MULTILINGUAL_GREETINGS[language] || MULTILINGUAL_GREETINGS.persian;
    const greeting = greetings[timeOfDay] || greetings.casual;
    return `${greeting}، ${name}!`;
}

// احوال‌پرسی با مود/شخصیت
const PERSONALITY_STYLES = {
    enthusiastic: (name) => `واو! ${name}! خیلی هیجان‌زده‌ام که می‌بینمت! 🎉`,
    zen: (name) => `خوش آمدید، ${name}. روزتان آرام باشد. 🧘`,
    professional: (name) => `روز بخیر، ${name}. امیدوارم حالتان خوب باشد.`,
    friendly: (name) => `سلام ${name}! امیدوارم امروز فوق‌العاده باشی! 😊`,
    mysterious: (name) => `آه، ${name}... دوباره همدیگر را می‌بینیم... 🕵️`
};

function greetWithPersonality(name, personality = 'friendly') {
    const greetingFunction = PERSONALITY_STYLES[personality] || PERSONALITY_STYLES.friendly;
    return greetingFunction(name);
}

// احوال‌پرسی پویا بر اساس فعالیت کاربر
function greetReturningUser(userProfile) {
    const { name, lastVisit, visitCount, favoriteFeature } = userProfile;
    const daysSinceLastVisit = Math.floor((Date.now() - new Date(lastVisit)) / (1000 * 60 * 60 * 24));
    
    if (visitCount === 1) {
        return `برگشتی، ${name}! خوشحالم که دوباره می‌بینمت!`;
    } else if (daysSinceLastVisit > 30) {
        return `${name}! مدتی می‌شد! برگشتی! دلمان برات تنگ شده بود! 🎊`;
    } else if (daysSinceLastVisit > 7) {
        return `سلام ${name}! برگشتی! چطور بودی؟`;
    } else {
        return `${name}! خوشحالم که امروز دوباره می‌بینمت!`;
    }
}

// ترکیب تابع برای احوال‌پرسی‌های پیچیده
function createCustomGreeting(name, options = {}) {
    const {
        includeTime = true,
        includeWeather = false,
        personality = 'friendly',
        language = 'persian',
        includeEmoji = true
    } = options;
    
    let parts = [];
    
    // ساخت قسمت‌های احوال‌پرسی
    if (includeTime) {
        parts.push(greetInLanguage(name, language, getCurrentTimeOfDay()));
    } else {
        parts.push(greetInLanguage(name, language, 'casual'));
    }
    
    if (includeWeather) {
        parts.push("امیدوارم آب‌وهوا براتون خوب باشه!");
    }
    
    // اعمال شخصیت
    if (personality !== 'standard') {
        return greetWithPersonality(name, personality);
    }
    
    let greeting = parts.join(' ');
    
    if (includeEmoji) {
        greeting += ' 😊';
    }
    
    return greeting;
}

// تابع اعتبارسنجی
function validateUserName(name) {
    if (!name) {
        throw new Error('نام الزامی است');
    }
    if (typeof name !== 'string') {
        throw new Error('نام باید رشته باشد');
    }
    if (name.trim().length === 0) {
        throw new Error('نام نمی‌تواند خالی باشد');
    }
    if (name.length > 50) {
        throw new Error('نام خیلی طولانی است');
    }
    return name.trim();
}

// تابع احوال‌پرسی ایمن با مدیریت خطا
function safeGreetUser(name, options = {}) {
    try {
        const validName = validateUserName(name);
        return createCustomGreeting(validName, options);
    } catch (error) {
        console.warn('خطای احوال‌پرسی:', error.message);
        return "سلام! خوش آمدید!";
    }
}
```

## 🔍 مفاهیم کلیدی برای تمرین

- پارامترهای تابع و مقادیر پیش‌فرض
- Template literals برای رشته‌های پویا
- حوزه تابع و closure
- توابع پیکانی در مقابل توابع معمولی
- Object destructuring در پارامترها
- پارامترهای باقی‌مانده (...args)
- ترکیب تابع
- مدیریت خطا در توابع
- توابع مرتبه بالا

## 💡 نکات

- از نام‌های پارامتر توصیفی که توضیح می‌دهند تابع چه انتظاری دارد، استفاده کنید
- مقادیر پیش‌فرض منطقی برای پارامترهای اختیاری ارائه دهید
- برای توابعی با گزینه‌های زیاد، استفاده از پارامترهای شیء را در نظر بگیرید
- Template literals درون‌یابی رشته را خیلی تمیزتر از الحاق می‌کند
- به یاد داشته باشید که توابع پیکانی binding `this` خودشان را ندارند
- وقتی نمی‌دانید چند آرگومان پاس داده می‌شود از پارامترهای باقی‌مانده استفاده کنید
- همیشه ورودی‌ها را اعتبارسنجی کنید، به خصوص وقتی توابع توسط دیگران استفاده می‌شوند
- وقتی نیاز به بازگرداندن چندین مقدار مرتبط دارید، بازگرداندن اشیاء را در نظر بگیرید

## 🧪 سناریوهای تست

```javascript
// مجموعه تست جامع
const testScenarios = [
    {
        description: "احوال‌پرسی پایه با نام معتبر",
        test: () => greetUser("علی"),
        expected: "سلام، علی! خوش آمدید!"
    },
    {
        description: "احوال‌پرسی با نام خالی",
        test: () => greetUser(""),
        expected: "سلام! خوش آمدید!"
    },
    {
        description: "احوال‌پرسی پیشرفته با همه پارامترها",
        test: () => greetUserAdvanced("محمد", "صبح", "formal"),
        expected: /صبح.*محمد/
    },
    {
        description: "احوال‌پرسی پروفایل با عنوان",
        test: () => greetUserWithProfile({
            firstName: "فاطمه",
            lastName: "احمدی", 
            title: "دکتر",
            greetingStyle: "formal"
        }),
        expected: /دکتر.*فاطمه/
    },
    {
        description: "احوال‌پرسی کاربران متعدد",
        test: () => greetMultipleUsers("علی", "محمد", "سارا"),
        expected: Array
    }
];

function runGreetingTests() {
    console.log("\n🧪 اجرای تست‌های احوال‌پرسی:");
    console.log("=========================");
    
    testScenarios.forEach((scenario, index) => {
        console.log(`\nتست ${index + 1}: ${scenario.description}`);
        try {
            const result = scenario.test();
            console.log(`نتیجه: ${result}`);
            
            if (scenario.expected instanceof RegExp) {
                console.log(`قبول شد: ${scenario.expected.test(result)}`);
            } else if (scenario.expected === Array) {
                console.log(`قبول شد: ${Array.isArray(result)}`);
            } else {
                console.log(`قبول شد: ${result === scenario.expected}`);
            }
        } catch (error) {
            console.log(`خطا: ${error.message}`);
        }
    });
}
```
