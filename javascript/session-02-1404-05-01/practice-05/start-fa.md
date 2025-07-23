<!-- markdownlint-disable -->

# تمرین ۰۵: ساخت ماشین‌حساب مالیات و تخفیف قابل استفاده مجدد

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- درک تفاوت بین اعلان تابع و عبارت تابع
- کار مؤثر با پارامترها و آرگومان‌ها
- استفاده از مقادیر بازگشتی برای قابل استفاده مجدد کردن توابع
- درک حوزه محلی در مقابل حوزه سراسری
- ایجاد و استفاده از توابع پیکانی (`() => {}`)
- ساخت کد ماژولار و قابل استفاده مجدد
- ترکیب و زنجیره‌سازی توابع

## 📋 توضیح تمرین

سیستم ماشین‌حساب جامعی با توابع قابل استفاده مجدد برای محاسبات مالیات، اعمال تخفیف و محاسبات قیمت نهایی ایجاد کنید. این تمرین به شما کمک می‌کند تا مفاهیم توابع و حوزه را از مرحله ۴ کامل یاد بگیرید.

## 🔧 الزامات

### الزامات پایه:
1. توابعی با استفاده از هر دو syntax اعلان و عبارت ایجاد کنید
2. توابعی بسازید که پارامترها را می‌پذیرند و مقادیر برمی‌گردانند
3. محاسبه مالیات با نرخ‌های مختلف مالیات پیاده‌سازی کنید
4. توابع محاسبه تخفیف ایجاد کنید
5. از توابع پیکانی برای محاسبات ساده استفاده کنید
6. تفاوت‌های حوزه محلی و سراسری را نشان دهید

### الزامات پیشرفته:
1. تابعی ایجاد کنید که توابع دیگر را به عنوان پارامتر می‌پذیرد (توابع مرتبه بالا)
2. زنجیره‌سازی توابع برای محاسبات متعدد پیاده‌سازی کنید
3. اعتبارسنجی ورودی در درون توابع اضافه کنید
4. سیستم پرداخت کاملی با استفاده از چندین تابع ایجاد کنید
5. موارد خاص و شرایط خطا را مدیریت کنید

## 💻 ساختار نمونه کد

```javascript
// متغیرهای سراسری (نمایش حوزه سراسری)
const DEFAULT_TAX_RATE = 0.08; // مالیات پیش‌فرض ۸%
let calculationHistory = [];

// مرحله ۱: اعلان تابع
function calculateTax(amount, taxRate) {
    // متغیرهای حوزه محلی
    const tax = amount * taxRate;
    return tax;
}

// مرحله ۲: عبارت تابع
const calculateDiscount = function(amount, discountPercent) {
    // منطق محاسبه تخفیف شما اینجا
    const discountAmount = amount * (discountPercent / 100);
    return discountAmount;
};

// مرحله ۳: تابع پیکانی
const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
};

// مرحله ۴: تابع پیچیده‌تر با چندین پارامتر
function calculateFinalPrice(originalPrice, discountPercent = 0, taxRate = DEFAULT_TAX_RATE) {
    // منطق محاسبه شما اینجا
    // باید ابتدا تخفیف، سپس مالیات اعمال شود
    let priceAfterDiscount = originalPrice - calculateDiscount(originalPrice, discountPercent);
    let tax = calculateTax(priceAfterDiscount, taxRate);
    let finalPrice = priceAfterDiscount + tax;
    
    // ذخیره محاسبه در تاریخچه (نمایش حوزه)
    calculationHistory.push({
        original: originalPrice,
        discount: discountPercent,
        tax: taxRate,
        final: finalPrice
    });
    
    return finalPrice;
}

// مرحله ۵: نمونه تابع مرتبه بالا
function applyCalculation(amount, calculatorFunction) {
    // منطق تابع مرتبه بالا شما اینجا
    return calculatorFunction(amount);
}

// توابع خود را تست کنید
console.log("تست ماشین‌حساب مالیات و تخفیف:");
console.log("=====================================");

const testPrice = 100;
const testDiscount = 15; // ۱۵%
const testTaxRate = 0.10; // ۱۰%

// فراخوانی‌های تست شما اینجا
```

## ✅ خروجی مورد انتظار

```
تست ماشین‌حساب مالیات و تخفیف:
=====================================

قیمت اصلی: $100.00
تخفیف (15%): $15.00
قیمت بعد از تخفیف: $85.00
مالیات (10%): $8.50
قیمت نهایی: $93.50

خلاصه محاسبه:
- جمع جزء: $85.00
- مالیات: $8.50
- مجموع: $93.50

نمایش انواع تابع:
- calculateTax (اعلان): $10.00
- calculateDiscount (عبارت): $15.00
- formatCurrency (پیکانی): $93.50

تست حوزه:
- نرخ مالیات سراسری: 8%
- محاسبه محلی: تکمیل شد
- ورودی‌های تاریخچه: 1
```

## 🎯 وظایف چالشی

1. **ترکیب توابع**: تابعی ایجاد کنید که چندین تابع محاسبه را ترکیب می‌کند
2. **توابع اعتبارسنجی**: توابعی برای اعتبارسنجی پارامترهای ورودی اضافه کنید
3. **ماشین‌حساب دسته‌جمعی**: توابعی ایجاد کنید که با آرایه‌ای از قیمت‌ها کار می‌کنند
4. **تولیدکننده رسید**: تابعی برای تولید رسید قالب‌بندی شده بسازید
5. **سیستم رده مالیاتی**: محاسبه مالیات پیشرونده پیاده‌سازی کنید

## 📝 ایده‌های پیاده‌سازی پیشرفته

```javascript
// تنوع‌های تابع پیکانی
const simpleCalculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : 0
};

// تابع با پارامترهای پیش‌فرض
function calculateWithOptions(
    price, 
    options = {
        discountPercent: 0,
        taxRate: DEFAULT_TAX_RATE,
        includeTip: false,
        tipPercent: 15
    }
) {
    let finalPrice = price;
    
    // اعمال تخفیف
    if (options.discountPercent > 0) {
        finalPrice -= calculateDiscount(finalPrice, options.discountPercent);
    }
    
    // اعمال مالیات
    finalPrice += calculateTax(finalPrice, options.taxRate);
    
    // اعمال انعام در صورت درخواست
    if (options.includeTip) {
        finalPrice += calculateTax(finalPrice, options.tipPercent / 100);
    }
    
    return finalPrice;
}

// تابع مرتبه بالا برای پردازش دسته‌جمعی
function processPrices(prices, processorFunction) {
    return prices.map(processorFunction);
}

// تابعی که تابع برمی‌گرداند (نمونه closure)
function createTaxCalculator(taxRate) {
    return function(amount) {
        return amount * taxRate;
    };
}

// نمونه‌های استفاده
const salesTaxCalc = createTaxCalculator(0.08);
const luxuryTaxCalc = createTaxCalculator(0.15);

// تابع اعتبارسنجی ورودی
function validatePrice(price) {
    if (typeof price !== 'number' || price < 0) {
        throw new Error('قیمت باید یک عدد مثبت باشد');
    }
    return true;
}

// تابع تولیدکننده رسید
function generateReceipt(items) {
    let receipt = "رسید\n";
    receipt += "="*20 + "\n";
    
    let subtotal = 0;
    items.forEach(item => {
        receipt += `${item.name}: ${formatCurrency(item.price)}\n`;
        subtotal += item.price;
    });
    
    receipt += "-"*20 + "\n";
    receipt += `جمع جزء: ${formatCurrency(subtotal)}\n`;
    
    return receipt;
}
```

## 🔍 مفاهیم کلیدی برای تمرین

- اعلان تابع در مقابل عبارت در مقابل توابع پیکانی
- پارامترها، آرگومان‌ها و پارامترهای پیش‌فرض
- عبارات return و مقادیر بازگشتی
- حوزه محلی در مقابل حوزه سراسری
- رفتار hoisting تابع
- توابع مرتبه بالا
- ترکیب تابع
- مدیریت خطا در توابع

## 💡 نکات

- اعلان‌های تابع hoist می‌شوند، اما عبارات تابع نمی‌شوند
- توابع پیکانی context `this` خودشان را ندارند
- از `const` برای عبارات تابع برای جلوگیری از تخصیص مجدد استفاده کنید
- پارامترهای پیش‌فرض در زمان فراخوانی ارزیابی می‌شوند، نه زمان اعلان
- توابع باید مسئولیت واحدی داشته باشند (یک کار را خوب انجام دهند)
- از نام‌های توصیفی تابع که توضیح می‌دهند تابع چه کاری انجام می‌دهد، استفاده کنید
- برای توابعی که نیاز به بازگرداندن چندین مقدار دارند، بازگرداندن اشیاء را در نظر بگیرید

## 🧪 موارد تست

```javascript
// سناریوهای مختلف را تست کنید
const testCases = [
    {
        description: "محاسبه پایه",
        price: 100,
        discount: 10,
        tax: 0.08,
        expected: 97.2
    },
    {
        description: "بدون تخفیف",
        price: 50,
        discount: 0,
        tax: 0.05,
        expected: 52.5
    },
    {
        description: "تخفیف بالا",
        price: 200,
        discount: 50,
        tax: 0.10,
        expected: 110
    },
    {
        description: "مورد خاص - قیمت صفر",
        price: 0,
        discount: 10,
        tax: 0.08,
        expected: 0
    }
];

// تابع برای اجرای همه تست‌ها
function runTests() {
    testCases.forEach((testCase, index) => {
        console.log(`تست ${index + 1}: ${testCase.description}`);
        const result = calculateFinalPrice(testCase.price, testCase.discount, testCase.tax);
        const passed = Math.abs(result - testCase.expected) < 0.01;
        console.log(`مورد انتظار: ${testCase.expected}، دریافت شده: ${result}، قبول شده: ${passed}`);
        console.log("---");
    });
}
```
