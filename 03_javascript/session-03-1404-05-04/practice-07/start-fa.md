<!-- markdownlint-disable -->

# تمرین ۰۷: کتابخانه پیشرفته تحلیل مالی

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- ساخت کتابخانه‌های جامع تابع با چندین تابع مرتبط
- درک مدیریت پیشرفته پارامترها و مقادیر پیش‌فرض
- پیاده‌سازی توابع مرتبه بالا که توابع دیگر را به عنوان پارامتر می‌پذیرند
- ایجاد الگوهای ترکیب و زنجیره‌ای تابع
- کار با مقادیر بازگشتی پیچیده شامل اشیاء و آرایه‌ها
- درک مفاهیم پیشرفته دامنه و الگوهای بسته
- ساخت کد مدولار و قابل استفاده مجدد با سازماندهی مناسب تابع

## 📋 توضیح تمرین

یک کتابخانه جامع تحلیل مالی بسازید که توابع محاسباتی مختلف برای امور مالی شخصی، تحلیل کسب‌وکار و برنامه‌ریزی سرمایه‌گذاری ارائه دهد. این تمرین پیشرفته طراحی تابع در سطح حرفه‌ای را با محاسبات ریاضی پیچیده، پردازش داده و قابلیت‌های گزارش‌دهی نشان می‌دهد.

## 🔧 الزامات

### الزامات پایه:
1. ایجاد توابع با استفاده از نحو اعلان، عبارت و تابع پیکانی
2. پیاده‌سازی توابع با چندین پارامتر و مقادیر پیش‌فرض
3. ساخت توابع که اشیاء و آرایه‌های پیچیده بازمی‌گردانند
4. استفاده از توابع مرتبه بالا که توابع پاسخ تماس می‌پذیرند
5. نمایش دامنه محلی و سراسری با مثال‌های عملی
6. ایجاد ترکیب تابع برای محاسبات پیچیده

### الزامات پیشرفته:
1. پیاده‌سازی کارخانه‌های تابع که توابع محاسباتی تخصصی می‌سازند
2. ساخت سیستم افزونه که توابع به صورت پویا اضافه شوند
3. ایجاد مدیریت خطای پیشرفته و اعتبارسنجی ورودی
4. پیاده‌سازی حافظه‌سازی برای بهینه‌سازی عملکرد
5. ساخت سیستم گزارش‌دهی جامع با چندین فرمت خروجی
6. ایجاد توابع ابزاری که توابع محاسباتی اصلی را بهبود می‌بخشند

## 💻 ساختار کد نمونه

```javascript
// تنظیمات و ثابت‌های سراسری
const FINANCIAL_CONSTANTS = {
    MONTHS_PER_YEAR: 12,
    WEEKS_PER_YEAR: 52,
    DAYS_PER_YEAR: 365,
    DEFAULT_TAX_RATE: 0.25,
    DEFAULT_INFLATION_RATE: 0.03
};

// تاریخچه محاسبات سراسری برای پیگیری
let calculationHistory = [];
let currentSession = {
    startTime: new Date(),
    calculationsPerformed: 0,
    totalProcessingTime: 0
};

console.log("💰 کتابخانه پیشرفته تحلیل مالی");
console.log("=" .repeat(50));
console.log("🚀 راه‌اندازی سیستم جامع محاسبات مالی...");

// مرحله ۱: توابع مالی پایه

// اعلان تابع - محاسبه‌گر پرداخت وام
function calculateLoanPayment(principal, annualRate, termInMonths, downPayment = 0) {
    console.log(`\\n📊 محاسبه پرداخت وام:`);
    console.log(`   اصل وام: ${principal.toLocaleString()} تومان`);
    console.log(`   پیش پرداخت: ${downPayment.toLocaleString()} تومان`);
    console.log(`   نرخ سالانه: ${(annualRate * 100).toFixed(2)}%`);
    console.log(`   مدت: ${termInMonths} ماه`);
    
    const loanAmount = principal - downPayment;
    const monthlyRate = annualRate / FINANCIAL_CONSTANTS.MONTHS_PER_YEAR;
    
    let monthlyPayment;
    if (monthlyRate === 0) {
        monthlyPayment = loanAmount / termInMonths;
    } else {
        monthlyPayment = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) /
                        (Math.pow(1 + monthlyRate, termInMonths) - 1);
    }
    
    const totalPaid = monthlyPayment * termInMonths;
    const totalInterest = totalPaid - loanAmount;
    
    const result = {
        monthlyPayment: monthlyPayment,
        totalPaid: totalPaid,
        totalInterest: totalInterest,
        loanAmount: loanAmount,
        interestRate: annualRate
    };
    
    console.log(`   💳 پرداخت ماهانه: ${monthlyPayment.toFixed(0)} تومان`);
    console.log(`   💰 کل سود: ${totalInterest.toFixed(0)} تومان`);
    console.log(`   📈 کل هزینه: ${totalPaid.toFixed(0)} تومان`);
    
    // پیگیری محاسبه در تاریخچه
    trackCalculation('loan_payment', result);
    
    return result;
}

// عبارت تابع - محاسبه‌گر سود مرکب
const calculateCompoundInterest = function(principal, rate, timeYears, compoundingFreq = 12) {
    console.log(`\\n📈 محاسبه سود مرکب:`);
    console.log(`   سرمایه اولیه: ${principal.toLocaleString()} تومان`);
    console.log(`   نرخ سالانه: ${(rate * 100).toFixed(2)}%`);
    console.log(`   دوره زمانی: ${timeYears} سال`);
    console.log(`   ترکیب: ${compoundingFreq} بار در سال`);
    
    const compoundedAmount = principal * Math.pow(1 + (rate / compoundingFreq), compoundingFreq * timeYears);
    const interestEarned = compoundedAmount - principal;
    const effectiveRate = Math.pow(1 + (rate / compoundingFreq), compoundingFreq) - 1;
    
    const result = {
        principal: principal,
        finalAmount: compoundedAmount,
        interestEarned: interestEarned,
        effectiveAnnualRate: effectiveRate,
        totalReturn: (interestEarned / principal) * 100
    };
    
    console.log(`   🎯 مبلغ نهایی: ${compoundedAmount.toFixed(0)} تومان`);
    console.log(`   💵 سود کسب شده: ${interestEarned.toFixed(0)} تومان`);
    console.log(`   📊 کل بازده: ${result.totalReturn.toFixed(2)}%`);
    
    trackCalculation('compound_interest', result);
    
    return result;
};

// تابع پیکانی - محاسبه مالیات
const calculateTaxes = (income, taxBrackets = null, deductions = 0) => {
    console.log(`\\n🏛️  محاسبه مالیات:`);
    console.log(`   درآمد ناخالص: ${income.toLocaleString()} تومان`);
    console.log(`   کسورات: ${deductions.toLocaleString()} تومان`);
    
    const taxableIncome = Math.max(0, income - deductions);
    
    // پله‌های مالیاتی پیش‌فرض اگر ارائه نشده باشد
    const defaultBrackets = [
        { min: 0, max: 60000000, rate: 0.00 },
        { min: 60000000, max: 300000000, rate: 0.10 },
        { min: 300000000, max: 750000000, rate: 0.15 },
        { min: 750000000, max: 1500000000, rate: 0.20 },
        { min: 1500000000, max: Infinity, rate: 0.25 }
    ];
    
    const brackets = taxBrackets || defaultBrackets;
    let totalTax = 0;
    let taxBreakdown = [];
    
    for (let bracket of brackets) {
        if (taxableIncome > bracket.min) {
            const taxableInThisBracket = Math.min(taxableIncome - bracket.min, bracket.max - bracket.min);
            const taxInThisBracket = taxableInThisBracket * bracket.rate;
            totalTax += taxInThisBracket;
            
            if (taxableInThisBracket > 0) {
                taxBreakdown.push({
                    bracket: `${bracket.rate * 100}%`,
                    income: taxableInThisBracket,
                    tax: taxInThisBracket
                });
            }
        }
    }
    
    const effectiveRate = totalTax / income;
    const marginalRate = brackets.find(b => taxableIncome > b.min && taxableIncome <= b.max)?.rate || 0;
    const afterTaxIncome = income - totalTax;
    
    console.log(`   📋 درآمد مشمول: ${taxableIncome.toLocaleString()} تومان`);
    console.log(`   💸 کل مالیات: ${totalTax.toFixed(0)} تومان`);
    console.log(`   📊 نرخ مؤثر: ${(effectiveRate * 100).toFixed(2)}%`);
    console.log(`   📈 نرخ حاشیه‌ای: ${(marginalRate * 100).toFixed(2)}%`);
    
    const result = {
        grossIncome: income,
        taxableIncome: taxableIncome,
        totalTax: totalTax,
        afterTaxIncome: afterTaxIncome,
        effectiveRate: effectiveRate,
        marginalRate: marginalRate,
        taxBreakdown: taxBreakdown
    };
    
    trackCalculation('tax_calculation', result);
    
    return result;
};

// مرحله ۲: توابع مرتبه بالا

// تابع که توابع دیگر را به عنوان پارامتر می‌پذیرد
function performFinancialAnalysis(scenarios, calculationFunction, reportFunction) {
    console.log(`\\n🔍 انجام تحلیل مالی:`);
    console.log(`   سناریوهای مورد تحلیل: ${scenarios.length}`);
    console.log(`   استفاده از تابع محاسباتی: ${calculationFunction.name}`);
    
    const results = [];
    
    for (let i = 0; i < scenarios.length; i++) {
        const scenario = scenarios[i];
        console.log(`\\n   📋 سناریو ${i + 1}: ${scenario.name}`);
        
        // فراخوانی تابع محاسباتی ارائه شده با داده‌های سناریو
        const result = calculationFunction(...scenario.parameters);
        result.scenarioName = scenario.name;
        results.push(result);
    }
    
    // تولید گزارش با استفاده از تابع گزارش ارائه شده
    if (reportFunction) {
        reportFunction(results);
    }
    
    return results;
}

// تابع که توابع دیگر بازمی‌گرداند (کارخانه تابع)
function createInvestmentCalculator(defaultRate, defaultYears) {
    console.log(`\\n🏭 ایجاد محاسبه‌گر سرمایه‌گذاری:`);
    console.log(`   نرخ پیش‌فرض: ${(defaultRate * 100).toFixed(2)}%`);
    console.log(`   سال‌های پیش‌فرض: ${defaultYears}`);
    
    // بازگشت تابع سفارشی شده با پیش‌فرض‌های از پیش تنظیم شده
    return function(principal, customRate = null, customYears = null) {
        const rate = customRate !== null ? customRate : defaultRate;
        const years = customYears !== null ? customYears : defaultYears;
        
        console.log(`\\n   🎯 استفاده از محاسبه‌گر سرمایه‌گذاری:`);
        console.log(`      اصل سرمایه: ${principal.toLocaleString()} تومان`);
        console.log(`      نرخ: ${(rate * 100).toFixed(2)}%`);
        console.log(`      سال‌ها: ${years}`);
        
        const futureValue = principal * Math.pow(1 + rate, years);
        const growth = futureValue - principal;
        
        return {
            principal: principal,
            rate: rate,
            years: years,
            futureValue: futureValue,
            growth: growth,
            annualizedReturn: Math.pow(futureValue / principal, 1 / years) - 1
        };
    };
}

// مرحله ۳: ترکیب پیچیده تابع

// تابع ابزاری برای زنجیره‌ای کردن محاسبات
const composeCalculations = (...functions) => {
    return (initialValue) => {
        return functions.reduce((result, func) => {
            if (typeof func === 'function') {
                return func(result);
            }
            return result;
        }, initialValue);
    };
};

// توابع محاسباتی تخصصی برای ترکیب
const addInflationAdjustment = (calculation) => {
    const inflationRate = FINANCIAL_CONSTANTS.DEFAULT_INFLATION_RATE;
    const years = calculation.years || 10;
    
    calculation.inflationAdjustedValue = calculation.futureValue / Math.pow(1 + inflationRate, years);
    calculation.realGrowth = calculation.inflationAdjustedValue - calculation.principal;
    calculation.realReturn = (calculation.realGrowth / calculation.principal) * 100;
    
    console.log(`   🎈 تعدیل تورم اعمال شد (${(inflationRate * 100).toFixed(1)}%)`);
    console.log(`      ارزش واقعی آینده: ${calculation.inflationAdjustedValue.toFixed(0)} تومان`);
    console.log(`      بازده واقعی: ${calculation.realReturn.toFixed(2)}%`);
    
    return calculation;
};

const addTaxImpact = (calculation) => {
    const taxRate = FINANCIAL_CONSTANTS.DEFAULT_TAX_RATE;
    
    if (calculation.growth > 0) {
        calculation.capitalGainsTax = calculation.growth * taxRate;
        calculation.afterTaxValue = calculation.futureValue - calculation.capitalGainsTax;
        calculation.afterTaxReturn = ((calculation.afterTaxValue - calculation.principal) / calculation.principal) * 100;
        
        console.log(`   🏛️  تأثیر مالیات اعمال شد (${(taxRate * 100).toFixed(1)}%)`);
        console.log(`      مالیات سود سرمایه: ${calculation.capitalGainsTax.toFixed(0)} تومان`);
        console.log(`      ارزش پس از مالیات: ${calculation.afterTaxValue.toFixed(0)} تومان`);
        console.log(`      بازده پس از مالیات: ${calculation.afterTaxReturn.toFixed(2)}%`);
    }
    
    return calculation;
};

// مرحله ۴: توابع گزارش‌دهی پیشرفته

function generateInvestmentReport(results) {
    console.log(`\\n\\n📊 گزارش جامع سرمایه‌گذاری:`);
    console.log("=" .repeat(55));
    
    if (!results || results.length === 0) {
        console.log("⚠️  داده‌ای برای تولید گزارش در دسترس نیست");
        return;
    }
    
    // آمار خلاصه
    const totalInvestment = results.reduce((sum, r) => sum + (r.principal || 0), 0);
    const totalFutureValue = results.reduce((sum, r) => sum + (r.futureValue || r.finalAmount || 0), 0);
    const totalGrowth = totalFutureValue - totalInvestment;
    const averageReturn = results.reduce((sum, r) => sum + (r.totalReturn || 0), 0) / results.length;
    
    console.log(`📈 خلاصه پرتفوی:`);
    console.log(`   کل سرمایه‌گذاری: ${totalInvestment.toLocaleString()} تومان`);
    console.log(`   ارزش پیش‌بینی شده: ${totalFutureValue.toLocaleString()} تومان`);
    console.log(`   رشد مورد انتظار: ${totalGrowth.toLocaleString()} تومان`);
    console.log(`   میانگین بازده: ${averageReturn.toFixed(2)}%`);
    
    // تحلیل سناریوهای جداگانه
    console.log(`\\n📋 تفکیک سناریو:`);
    for (let i = 0; i < results.length; i++) {
        const result = results[i];
        console.log(`\\n   ${i + 1}. ${result.scenarioName || `سناریو ${i + 1}`}:`);
        
        if (result.monthlyPayment) {
            // سناریو وام
            console.log(`      پرداخت ماهانه: ${result.monthlyPayment.toFixed(0)} تومان`);
            console.log(`      کل سود: ${result.totalInterest.toFixed(0)} تومان`);
        } else if (result.futureValue || result.finalAmount) {
            // سناریو سرمایه‌گذاری
            const value = result.futureValue || result.finalAmount;
            const principal = result.principal;
            const growth = value - principal;
            
            console.log(`      سرمایه‌گذاری: ${principal.toLocaleString()} تومان`);
            console.log(`      ارزش آینده: ${value.toFixed(0)} تومان`);
            console.log(`      رشد: ${growth.toFixed(0)} تومان`);
            
            if (result.inflationAdjustedValue) {
                console.log(`      ارزش واقعی: ${result.inflationAdjustedValue.toFixed(0)} تومان`);
            }
            
            if (result.afterTaxValue) {
                console.log(`      ارزش پس از مالیات: ${result.afterTaxValue.toFixed(0)} تومان`);
            }
        }
    }
    
    // ارزیابی ریسک
    console.log(`\\n⚠️  ارزیابی ریسک:`);
    console.log(`   📊 تنوع پرتفوی: ${results.length > 1 ? 'خوب' : 'تنوع بیشتر را در نظر بگیرید'}`);
    console.log(`   🎯 سطح بازده میانگین: ${averageReturn > 8 ? 'بالا' : averageReturn > 5 ? 'متوسط' : 'محافظه‌کارانه'}`);
    console.log(`   📈 پتانسیل رشد: ${totalGrowth > totalInvestment * 0.5 ? 'بالا' : 'متوسط'}`);
}

function trackCalculation(type, result) {
    const calculation = {
        type: type,
        timestamp: new Date(),
        result: result,
        sessionId: currentSession.startTime.getTime()
    };
    
    calculationHistory.push(calculation);
    currentSession.calculationsPerformed++;
}

// مرحله ۵: نمایش قابلیت‌های کتابخانه مالی

console.log("\\n\\n🎯 نمایش قابلیت‌های کتابخانه مالی:");
console.log("-".repeat(60));

// مثال ۱: استفاده تابع پایه
console.log("\\n1️⃣  محاسبات پایه:");
const loanResult = calculateLoanPayment(3000000000, 0.18, 360, 600000000); // وام ۳۰ ساله
const investmentResult = calculateCompoundInterest(500000000, 0.15, 20, 12); // سرمایه‌گذاری ۲۰ ساله
const taxResult = calculateTaxes(850000000, null, 120000000); // محاسبه مالیات

// مثال ۲: استفاده کارخانه تابع
console.log("\\n\\n2️⃣  محاسبه‌گرهای سرمایه‌گذاری سفارشی:");
const conservativeCalculator = createInvestmentCalculator(0.08, 10); // ۸٪ برای ۱۰ سال
const aggressiveCalculator = createInvestmentCalculator(0.20, 15); // ۲۰٪ برای ۱۵ سال

const conservativeResult = conservativeCalculator(250000000);
const aggressiveResult = aggressiveCalculator(250000000);

console.log(`\\n   📊 سرمایه‌گذاری محافظه‌کارانه: ${conservativeResult.futureValue.toFixed(0)} تومان`);
console.log(`   📊 سرمایه‌گذاری تهاجمی: ${aggressiveResult.futureValue.toFixed(0)} تومان`);

// مثال ۳: استفاده تابع مرتبه بالا
console.log("\\n\\n3️⃣  تحلیل سناریو:");
const investmentScenarios = [
    {
        name: "پرتفوی محافظه‌کارانه",
        parameters: [1000000000, 0.10, 25, 1] // ۱ میلیارد تومان، ۱۰٪، ۲۵ سال، ترکیب سالانه
    },
    {
        name: "پرتفوی متعادل", 
        parameters: [1000000000, 0.15, 25, 12] // ۱ میلیارد تومان، ۱۵٪، ۲۵ سال، ترکیب ماهانه
    },
    {
        name: "پرتفوی تهاجمی",
        parameters: [1000000000, 0.22, 25, 12] // ۱ میلیارد تومان، ۲۲٪، ۲۵ سال، ترکیب ماهانه
    }
];

const scenarioResults = performFinancialAnalysis(
    investmentScenarios,
    calculateCompoundInterest,
    generateInvestmentReport
);

// مثال ۴: ترکیب تابع
console.log("\\n\\n4️⃣  تحلیل پیشرفته با ترکیب:");
const comprehensiveAnalysis = composeCalculations(
    addInflationAdjustment,
    addTaxImpact
);

const detailedResult = comprehensiveAnalysis({
    principal: 750000000,
    futureValue: 1500000000,
    years: 15,
    growth: 750000000
});

console.log(`\\n   🎯 تحلیل جامع تکمیل شد`);
console.log(`      ارزش نهایی پس از مالیات واقعی: ${detailedResult.afterTaxValue.toFixed(0)} تومان`);

// مثال ۵: خلاصه جلسه
console.log("\\n\\n5️⃣  خلاصه جلسه:");
console.log("-".repeat(30));
console.log(`⏱️  مدت جلسه: ${((new Date() - currentSession.startTime) / 1000).toFixed(2)} ثانیه`);
console.log(`🧮 محاسبات انجام شده: ${currentSession.calculationsPerformed}`);
console.log(`📚 تاریخچه محاسبات: ${calculationHistory.length} ورودی`);

// نمایش انواع محاسبات انجام شده
const calculationTypes = [...new Set(calculationHistory.map(c => c.type))];
const persianTypes = {
    'loan_payment': 'پرداخت وام',
    'compound_interest': 'سود مرکب',
    'tax_calculation': 'محاسبه مالیات'
};

const persianTypesList = calculationTypes.map(type => persianTypes[type] || type).join('، ');
console.log(`🔧 انواع محاسبات استفاده شده: ${persianTypesList}`);

console.log("\\n✅ نمایش کتابخانه تحلیل مالی تکمیل شد!");
```

## 🚀 چالش‌های اضافی

اگر زودتر تمام کردید، این بهبودها را امتحان کنید:

1. **محاسبه‌گر برنامه‌ریزی بازنشستگی**: ایجاد توابع که نیازهای پس‌انداز بازنشستگی و استراتژی‌های برداشت محاسبه کنند
2. **شبیه‌سازی مونت کارلو**: پیاده‌سازی مدل‌سازی نتایج سرمایه‌گذاری مبتنی بر احتمال
3. **بهره کوبی در برابر گلوله برفی**: ایجاد توابع برای مقایسه استراتژی‌های پرداخت بدهی
4. **تحلیل املاک**: ساخت توابع برای تحلیل سرمایه‌گذاری املاک شامل جریان نقدی و ROI
5. **تبدیل ارز**: اضافه کردن توابع امور مالی بین‌المللی با نرخ‌های ارز لحظه‌ای
6. **ارزیابی ریسک**: ایجاد توابع که معیارهای ریسک پرتفوی مانند نسبت شارپ و بتا محاسبه کنند
7. **برنامه‌ریز هدف مالی**: ساخت سیستم که به کاربران کمک کند برای چندین هدف مالی همزمان برنامه‌ریزی کنند
8. **معیارسنجی عملکرد**: مقایسه عملکرد سرمایه‌گذاری با شاخص‌های بازار

## ✅ معیارهای موفقیت

کتابخانه تحلیل مالی شما باید:

- [ ] حداقل ۸ تابع محاسباتی مختلف با استفاده از انواع تابع مختلف داشته باشد
- [ ] نحو اعلان، عبارت و تابع پیکانی را نمایش دهد
- [ ] حداقل ۲ تابع مرتبه بالا که پاسخ تماس می‌پذیرند پیاده‌سازی کند
- [ ] حداقل ۱ کارخانه تابع که توابع سفارشی بازمی‌گرداند ایجاد کند
- [ ] از ترکیب تابع برای ترکیب چندین محاسبه استفاده کند
- [ ] سناریوهای پیچیده پارامتر را با مقادیر پیش‌فرض مدیریت کند
- [ ] گزارش‌های جامع با تحلیل تفصیلی تولید کند
- [ ] تاریخچه محاسبات و پیگیری جلسه حفظ کند
- [ ] مدیریت خطای مناسب و اعتبارسنجی ورودی داشته باشد
- [ ] مفاهیم پیشرفته دامنه و مدیریت متغیر را نمایش دهد

## 🎓 نتایج کلیدی یادگیری

پس از تکمیل این تمرین، شما خواهید داشت:

- تسلط بر تمام انواع نحو تابع و موارد استفاده مناسب آن‌ها
- تجربه با سازماندهی تابع در سطح حرفه‌ای و طراحی مدولار
- درک توابع مرتبه بالا و مفاهیم برنامه‌نویسی تابعی
- مهارت در ساخت کتابخانه‌های محاسباتی جامع
- دانش ریاضیات مالی و کاربردهای دنیای واقعی
- اعتماد به نفس در ایجاد سیستم‌های پیچیده و قابل استفاده مجدد تابع

---

**تخمین زمان:** ۶۰-۹۰ دقیقه  
**سطح دشواری:** پیشرفته  
**تمرکز:** توابع پیچیده، توابع مرتبه بالا، سازماندهی کد حرفه‌ای
