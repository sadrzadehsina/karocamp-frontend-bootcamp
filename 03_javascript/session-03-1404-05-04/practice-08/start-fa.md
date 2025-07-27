<!-- markdownlint-disable -->

# تمرین ۰۸: موتور تعاملی پردازش و تحلیل داده

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- ساخت سیستم‌های داده‌محور پیچیده با مدیریت داده پیشرفته
- درک مفاهیم تعاملی برنامه‌نویسی و پردازش رویداد
- پیاده‌سازی الگوهای پردازش داده پیشرفته و تابع‌های آماری
- ایجاد معماری مدولار با سیستم‌های افزونه و گروه‌بندی تابع
- کار با ساختارهای داده پیچیده شامل تو در تو و اعضای پویا
- ساخت سیستم‌های گزارش‌دهی تعاملی با رابط کاربری متنی
- درک پیشرفته ترین تکنیک‌های JavaScript برای پردازش داده

## 📋 توضیح تمرین

یک موتور جامع تحلیل داده بسازید که داده‌های مختلف را پردازش کند، آمار محاسبه کند، تحلیل‌های مقایسه‌ای انجام دهد و گزارش‌های تعاملی تولید کند. این تمرین نهایی تمام مفاهیم JavaScript از جمله توابع پیچیده، ساختارهای کنترل پیشرفته و مدیریت داده حرفه‌ای را ترکیب می‌کند.

## 🔧 الزامات

### الزامات پایه:
1. ساختارهای کنترل پیچیده شامل حلقه‌های تو در تو و شرط‌های پیچیده
2. توابع با رفتار پیشرفته و دامنه متغیر پیچیده
3. پردازش آرایه‌ها و اشیاء با چندین لایه داده
4. سیستم‌های پیش‌فرض و مدیریت خطای جامع
5. الگوهای ترکیب و زنجیره‌ای کردن تابع
6. ساخت رابط کاربری متنی کاملاً تعاملی

### الزامات پیشرفته:
1. سیستم چندمرحله‌ای برای پردازش انواع مختلف داده
2. الگوریتم‌های آماری پیشرفته و تحلیل‌های مقایسه‌ای
3. سیستم پلتفرم برای اضافه کردن انواع تحلیل جدید
4. ساخت سیستم داشبورد با گزارش‌دهی لحظه‌ای
5. مدیریت حافظه بهینه برای مجموعه‌های داده بزرگ
6. صادرات و واردات داده با فرمت‌های مختلف

## 💻 ساختار کد نمونه

```javascript
// تنظیمات سراسری و انواع داده
const DATA_TYPES = {
    NUMERIC: 'numeric',
    CATEGORICAL: 'categorical',
    TEMPORAL: 'temporal',
    BOOLEAN: 'boolean',
    MIXED: 'mixed'
};

const ANALYSIS_MODES = {
    BASIC: 'basic',
    STATISTICAL: 'statistical',
    COMPARATIVE: 'comparative',
    PREDICTIVE: 'predictive',
    COMPREHENSIVE: 'comprehensive'
};

// مخزن داده سراسری
let globalDataSets = new Map();
let analysisHistory = [];
let currentSession = {
    startTime: new Date(),
    datasetsProcessed: 0,
    analysesPerformed: 0,
    totalRecords: 0
};

console.log("📊 موتور تعاملی پردازش و تحلیل داده");
console.log("=" .repeat(60));
console.log("🚀 راه‌اندازی سیستم تحلیل داده پیشرفته...");

// مرحله ۱: توابع پردازش داده پایه

// اعلان تابع - تحلیل مجموعه داده
function analyzeDataSet(data, dataName = "مجموعه داده", analysisType = ANALYSIS_MODES.BASIC) {
    console.log(`\\n🔍 تحلیل مجموعه داده: "${dataName}"`);
    console.log(`   نوع تحلیل: "${analysisType}"`);
    console.log(`   تعداد رکورد: ${data.length}`);
    
    if (data.length === 0) {
        console.log("⚠️  داده‌ای برای تحلیل وجود ندارد");
        return null;
    }
    
    // تشخیص نوع داده
    const dataType = detectDataType(data);
    console.log(`   نوع داده: ${dataType}`);
    
    let analysis = {
        name: dataName,
        type: dataType,
        analysisMode: analysisType,
        recordCount: data.length,
        timestamp: new Date(),
        rawData: data
    };
    
    // انجام تحلیل‌های مختلف بر اساس نوع داده
    if (dataType === DATA_TYPES.NUMERIC) {
        analysis = {...analysis, ...performNumericAnalysis(data)};
    } else if (dataType === DATA_TYPES.CATEGORICAL) {
        analysis = {...analysis, ...performCategoricalAnalysis(data)};
    } else if (dataType === DATA_TYPES.TEMPORAL) {
        analysis = {...analysis, ...performTemporalAnalysis(data)};
    } else if (dataType === DATA_TYPES.MIXED) {
        analysis = {...analysis, ...performMixedAnalysis(data)};
    }
    
    // تحلیل‌های پیشرفته برای حالت‌های خاص
    if (analysisType === ANALYSIS_MODES.STATISTICAL || analysisType === ANALYSIS_MODES.COMPREHENSIVE) {
        analysis = {...analysis, ...performAdvancedStatistics(data)};
    }
    
    // ذخیره در مخزن سراسری
    globalDataSets.set(dataName, analysis);
    analysisHistory.push(analysis);
    currentSession.datasetsProcessed++;
    currentSession.totalRecords += data.length;
    currentSession.analysesPerformed++;
    
    console.log(`✅ تحلیل "${dataName}" تکمیل شد`);
    return analysis;
}

// تابع تشخیص نوع داده
function detectDataType(data) {
    let numericCount = 0;
    let categoricalCount = 0;
    let temporalCount = 0;
    let booleanCount = 0;
    
    // بررسی نمونه‌ای از داده‌ها
    const sampleSize = Math.min(50, data.length);
    for (let i = 0; i < sampleSize; i++) {
        const item = data[i];
        
        if (typeof item === 'number' && !isNaN(item)) {
            numericCount++;
        } else if (typeof item === 'boolean') {
            booleanCount++;
        } else if (typeof item === 'string') {
            // بررسی اینکه آیا تاریخ است یا نه
            if (!isNaN(Date.parse(item))) {
                temporalCount++;
            } else {
                categoricalCount++;
            }
        } else if (item instanceof Date) {
            temporalCount++;
        }
    }
    
    // تعیین نوع غالب
    const total = sampleSize;
    if (numericCount / total > 0.8) return DATA_TYPES.NUMERIC;
    if (categoricalCount / total > 0.8) return DATA_TYPES.CATEGORICAL;
    if (temporalCount / total > 0.8) return DATA_TYPES.TEMPORAL;
    if (booleanCount / total > 0.8) return DATA_TYPES.BOOLEAN;
    
    return DATA_TYPES.MIXED;
}

// عبارت تابع - تحلیل عددی
const performNumericAnalysis = function(data) {
    console.log("   📊 انجام تحلیل عددی...");
    
    // محاسبات آماری پایه
    const sortedData = [...data].sort((a, b) => a - b);
    const sum = data.reduce((acc, val) => acc + val, 0);
    const mean = sum / data.length;
    
    // میانه
    const median = data.length % 2 === 0 
        ? (sortedData[data.length / 2 - 1] + sortedData[data.length / 2]) / 2
        : sortedData[Math.floor(data.length / 2)];
    
    // نما (Mode)
    const frequency = {};
    let maxFreq = 0;
    let mode = null;
    
    for (let value of data) {
        frequency[value] = (frequency[value] || 0) + 1;
        if (frequency[value] > maxFreq) {
            maxFreq = frequency[value];
            mode = value;
        }
    }
    
    // انحراف معیار
    const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
    const standardDeviation = Math.sqrt(variance);
    
    // چارک‌ها
    const q1Index = Math.floor(data.length * 0.25);
    const q3Index = Math.floor(data.length * 0.75);
    const q1 = sortedData[q1Index];
    const q3 = sortedData[q3Index];
    const iqr = q3 - q1;
    
    // آماره‌های توصیفی
    const range = Math.max(...data) - Math.min(...data);
    const coefficientOfVariation = (standardDeviation / mean) * 100;
    
    console.log(`      میانگین: ${mean.toFixed(2)}`);
    console.log(`      میانه: ${median.toFixed(2)}`);
    console.log(`      نما: ${mode}`);
    console.log(`      انحراف معیار: ${standardDeviation.toFixed(2)}`);
    console.log(`      دامنه: ${range.toFixed(2)}`);
    
    return {
        statistics: {
            count: data.length,
            sum: sum,
            mean: mean,
            median: median,
            mode: mode,
            min: Math.min(...data),
            max: Math.max(...data),
            range: range,
            variance: variance,
            standardDeviation: standardDeviation,
            coefficientOfVariation: coefficientOfVariation,
            quartiles: { q1, median, q3, iqr },
            frequency: frequency
        }
    };
};

// تابع پیکانی - تحلیل دسته‌ای
const performCategoricalAnalysis = (data) => {
    console.log("   📋 انجام تحلیل دسته‌ای...");
    
    const frequency = {};
    const uniqueValues = new Set();
    
    // محاسبه فراوانی
    for (let item of data) {
        const value = String(item).trim();
        frequency[value] = (frequency[value] || 0) + 1;
        uniqueValues.add(value);
    }
    
    // مرتب‌سازی بر اساس فراوانی
    const sortedByFrequency = Object.entries(frequency)
        .sort(([,a], [,b]) => b - a)
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
    
    // یافتن رایج‌ترین و کمیاب‌ترین مقادیر
    const mostCommon = Object.keys(sortedByFrequency)[0];
    const leastCommon = Object.keys(sortedByFrequency)[Object.keys(sortedByFrequency).length - 1];
    
    // محاسبه آنتروپی (اندازه‌گیری تنوع)
    let entropy = 0;
    for (let freq of Object.values(frequency)) {
        const probability = freq / data.length;
        if (probability > 0) {
            entropy -= probability * Math.log2(probability);
        }
    }
    
    console.log(`      دسته‌های منحصربه‌فرد: ${uniqueValues.size}`);
    console.log(`      رایج‌ترین: "${mostCommon}" (${frequency[mostCommon]} بار)`);
    console.log(`      آنتروپی: ${entropy.toFixed(2)}`);
    
    return {
        categories: {
            uniqueCount: uniqueValues.size,
            frequency: frequency,
            sortedByFrequency: sortedByFrequency,
            mostCommon: { value: mostCommon, count: frequency[mostCommon] },
            leastCommon: { value: leastCommon, count: frequency[leastCommon] },
            entropy: entropy,
            diversity: entropy / Math.log2(uniqueValues.size) // شاخص تنوع نرمال‌شده
        }
    };
};

// مرحله ۲: توابع تحلیل پیشرفته

// تابع تحلیل زمانی
function performTemporalAnalysis(data) {
    console.log("   📅 انجام تحلیل زمانی...");
    
    // تبدیل به تاریخ
    const dates = data.map(item => new Date(item)).filter(date => !isNaN(date));
    
    if (dates.length === 0) {
        return { temporal: { error: "داده‌های زمانی معتبر یافت نشد" } };
    }
    
    dates.sort((a, b) => a - b);
    
    const earliestDate = dates[0];
    const latestDate = dates[dates.length - 1];
    const timeSpan = latestDate - earliestDate;
    const timeSpanDays = timeSpan / (1000 * 60 * 60 * 24);
    
    // تحلیل الگوهای زمانی
    const monthlyDistribution = {};
    const weekdayDistribution = {};
    const hourlyDistribution = {};
    
    for (let date of dates) {
        const month = date.getMonth() + 1;
        const weekday = date.getDay();
        const hour = date.getHours();
        
        monthlyDistribution[month] = (monthlyDistribution[month] || 0) + 1;
        weekdayDistribution[weekday] = (weekdayDistribution[weekday] || 0) + 1;
        hourlyDistribution[hour] = (hourlyDistribution[hour] || 0) + 1;
    }
    
    console.log(`      بازه زمانی: ${timeSpanDays.toFixed(0)} روز`);
    console.log(`      اولین تاریخ: ${earliestDate.toLocaleDateString('fa-IR')}`);
    console.log(`      آخرین تاریخ: ${latestDate.toLocaleDateString('fa-IR')}`);
    
    return {
        temporal: {
            count: dates.length,
            timeSpan: timeSpanDays,
            earliest: earliestDate,
            latest: latestDate,
            distributions: {
                monthly: monthlyDistribution,
                weekday: weekdayDistribution,
                hourly: hourlyDistribution
            }
        }
    };
}

// تابع تحلیل ترکیبی
function performMixedAnalysis(data) {
    console.log("   🔀 انجام تحلیل ترکیبی...");
    
    // تفکیک داده‌ها بر اساس نوع
    const numericData = [];
    const categoricalData = [];
    const temporalData = [];
    const booleanData = [];
    
    for (let item of data) {
        if (typeof item === 'number' && !isNaN(item)) {
            numericData.push(item);
        } else if (typeof item === 'boolean') {
            booleanData.push(item);
        } else if (typeof item === 'string') {
            if (!isNaN(Date.parse(item))) {
                temporalData.push(item);
            } else {
                categoricalData.push(item);
            }
        } else if (item instanceof Date) {
            temporalData.push(item);
        }
    }
    
    console.log(`      داده عددی: ${numericData.length}`);
    console.log(`      داده دسته‌ای: ${categoricalData.length}`);
    console.log(`      داده زمانی: ${temporalData.length}`);
    console.log(`      داده بولی: ${booleanData.length}`);
    
    let mixedAnalysis = {
        composition: {
            numeric: numericData.length,
            categorical: categoricalData.length,
            temporal: temporalData.length,
            boolean: booleanData.length
        }
    };
    
    // تحلیل هر نوع داده جداگانه
    if (numericData.length > 0) {
        mixedAnalysis.numericAnalysis = performNumericAnalysis(numericData).statistics;
    }
    
    if (categoricalData.length > 0) {
        mixedAnalysis.categoricalAnalysis = performCategoricalAnalysis(categoricalData).categories;
    }
    
    if (temporalData.length > 0) {
        mixedAnalysis.temporalAnalysis = performTemporalAnalysis(temporalData).temporal;
    }
    
    if (booleanData.length > 0) {
        const trueCount = booleanData.filter(b => b === true).length;
        const falseCount = booleanData.length - trueCount;
        mixedAnalysis.booleanAnalysis = {
            trueCount: trueCount,
            falseCount: falseCount,
            truePercentage: (trueCount / booleanData.length) * 100
        };
    }
    
    return { mixed: mixedAnalysis };
}

// مرحله ۳: توابع مرتبه بالا و ترکیب تحلیل

// تابع اعمال تحلیل‌های متعدد
function performMultipleAnalyses(datasets, analysisTypes, resultProcessor) {
    console.log(`\\n🔬 انجام تحلیل‌های متعدد:`);
    console.log(`   مجموعه‌های داده: ${datasets.length}`);
    console.log(`   انواع تحلیل: ${analysisTypes.length}`);
    
    const results = [];
    
    for (let datasetInfo of datasets) {
        const { data, name } = datasetInfo;
        console.log(`\\n   📊 پردازش "${name}":`);
        
        const datasetResults = {
            name: name,
            analyses: {}
        };
        
        for (let analysisType of analysisTypes) {
            console.log(`      🔍 انجام تحلیل: ${analysisType}`);
            const analysis = analyzeDataSet(data, name, analysisType);
            datasetResults.analyses[analysisType] = analysis;
        }
        
        results.push(datasetResults);
    }
    
    // پردازش نتایج با تابع ارائه شده
    if (resultProcessor && typeof resultProcessor === 'function') {
        return resultProcessor(results);
    }
    
    return results;
}

// کارخانه تابع برای ایجاد تحلیل‌گرهای تخصصی
function createSpecializedAnalyzer(domain, defaultParams = {}) {
    console.log(`\\n🏭 ایجاد تحلیل‌گر تخصصی برای حوزه: "${domain}"`);
    
    const analyzers = {
        'فروش': (data, params) => {
            const { targetRevenue = 1000000000, period = 'ماهانه' } = { ...defaultParams, ...params };
            
            console.log(`   💰 تحلیل داده‌های فروش (هدف: ${targetRevenue.toLocaleString()} تومان)`);
            
            const totalSales = data.reduce((sum, sale) => sum + sale, 0);
            const averageSale = totalSales / data.length;
            const achievementRate = (totalSales / targetRevenue) * 100;
            
            // پیش‌بینی فروش
            const trend = calculateTrend(data);
            const projection = averageSale * (1 + trend) * data.length;
            
            return {
                domain: 'فروش',
                metrics: {
                    totalSales: totalSales,
                    averageSale: averageSale,
                    targetRevenue: targetRevenue,
                    achievementRate: achievementRate,
                    trend: trend,
                    projection: projection,
                    period: period
                }
            };
        },
        
        'کیفیت': (data, params) => {
            const { thresholds = [60, 80] } = { ...defaultParams, ...params };
            
            console.log(`   ⭐ تحلیل داده‌های کیفیت (آستانه‌ها: ${thresholds.join('، ')})`);
            
            const avgQuality = data.reduce((sum, score) => sum + score, 0) / data.length;
            const belowThreshold = data.filter(score => score < thresholds[0]).length;
            const acceptableRange = data.filter(score => score >= thresholds[0] && score < thresholds[1]).length;
            const excellent = data.filter(score => score >= thresholds[1]).length;
            
            return {
                domain: 'کیفیت',
                metrics: {
                    averageQuality: avgQuality,
                    qualityDistribution: {
                        poor: belowThreshold,
                        acceptable: acceptableRange,
                        excellent: excellent
                    },
                    qualityPercentages: {
                        poor: (belowThreshold / data.length) * 100,
                        acceptable: (acceptableRange / data.length) * 100,
                        excellent: (excellent / data.length) * 100
                    }
                }
            };
        },
        
        'عملکرد': (data, params) => {
            const { benchmarks = [70, 85, 95] } = { ...defaultParams, ...params };
            
            console.log(`   📈 تحلیل داده‌های عملکرد (معیارها: ${benchmarks.join('، ')})`);
            
            const performance = performNumericAnalysis(data).statistics;
            const benchmarkAnalysis = {};
            
            for (let i = 0; i < benchmarks.length; i++) {
                const benchmark = benchmarks[i];
                const meetingBenchmark = data.filter(value => value >= benchmark).length;
                benchmarkAnalysis[`benchmark_${benchmark}`] = {
                    threshold: benchmark,
                    count: meetingBenchmark,
                    percentage: (meetingBenchmark / data.length) * 100
                };
            }
            
            return {
                domain: 'عملکرد',
                metrics: {
                    ...performance,
                    benchmarkAnalysis: benchmarkAnalysis,
                    overallGrade: performance.mean >= benchmarks[2] ? 'عالی' :
                                  performance.mean >= benchmarks[1] ? 'خوب' :
                                  performance.mean >= benchmarks[0] ? 'قابل قبول' : 'نیاز به بهبود'
                }
            };
        }
    };
    
    const selectedAnalyzer = analyzers[domain];
    if (!selectedAnalyzer) {
        console.log(`   ⚠️  تحلیل‌گر برای حوزه "${domain}" یافت نشد`);
        return null;
    }
    
    return selectedAnalyzer;
}

// تابع محاسبه روند
function calculateTrend(data) {
    if (data.length < 2) return 0;
    
    // محاسبه شیب خط روند با استفاده از رگرسیون خطی ساده
    const n = data.length;
    const xSum = n * (n + 1) / 2; // مجموع اعداد از ۱ تا n
    const ySum = data.reduce((sum, val) => sum + val, 0);
    const xySum = data.reduce((sum, val, index) => sum + val * (index + 1), 0);
    const x2Sum = n * (n + 1) * (2 * n + 1) / 6; // مجموع مربعات از ۱ تا n
    
    const slope = (n * xySum - xSum * ySum) / (n * x2Sum - xSum * xSum);
    return slope / (ySum / n); // نرمال‌سازی به درصد تغییر
}

// مرحله ۴: سیستم گزارش‌دهی پیشرفته

function generateComprehensiveReport(analysisResults) {
    console.log(`\\n\\n📊 گزارش جامع تحلیل داده:`);
    console.log("=" .repeat(65));
    
    if (!analysisResults || analysisResults.length === 0) {
        console.log("⚠️  نتایج تحلیلی برای گزارش‌دهی در دسترس نیست");
        return;
    }
    
    // خلاصه اجرایی
    console.log(`\\n📈 خلاصه اجرایی:`);
    console.log(`   مجموعه‌های داده تحلیل شده: ${analysisResults.length}`);
    
    let totalRecords = 0;
    let dataTypes = new Set();
    
    for (let result of analysisResults) {
        if (result.analyses) {
            for (let [analysisType, analysis] of Object.entries(result.analyses)) {
                if (analysis && analysis.recordCount) {
                    totalRecords += analysis.recordCount;
                    dataTypes.add(analysis.type);
                }
            }
        }
    }
    
    console.log(`   کل رکوردهای پردازش شده: ${totalRecords.toLocaleString()}`);
    console.log(`   انواع داده شناسایی شده: ${Array.from(dataTypes).join('، ')}`);
    
    // تحلیل تفصیلی هر مجموعه داده
    console.log(`\\n🔍 تحلیل تفصیلی:`);
    
    for (let i = 0; i < analysisResults.length; i++) {
        const result = analysisResults[i];
        console.log(`\\n   ${i + 1}. "${result.name}":`);
        
        if (result.analyses) {
            for (let [analysisType, analysis] of Object.entries(result.analyses)) {
                if (analysis) {
                    console.log(`\\n      📊 ${analysisType}:`);
                    
                    // نمایش آمار اصلی
                    if (analysis.statistics) {
                        const stats = analysis.statistics;
                        console.log(`         میانگین: ${stats.mean?.toFixed(2)}`);
                        console.log(`         میانه: ${stats.median?.toFixed(2)}`);
                        console.log(`         انحراف معیار: ${stats.standardDeviation?.toFixed(2)}`);
                        console.log(`         دامنه: ${stats.min?.toFixed(2)} - ${stats.max?.toFixed(2)}`);
                    }
                    
                    if (analysis.categories) {
                        const cats = analysis.categories;
                        console.log(`         دسته‌های منحصربه‌فرد: ${cats.uniqueCount}`);
                        console.log(`         رایج‌ترین: "${cats.mostCommon?.value}" (${cats.mostCommon?.count})`);
                        console.log(`         شاخص تنوع: ${cats.diversity?.toFixed(2)}`);
                    }
                    
                    if (analysis.temporal) {
                        const temp = analysis.temporal;
                        console.log(`         بازه زمانی: ${temp.timeSpan?.toFixed(0)} روز`);
                        console.log(`         از ${temp.earliest?.toLocaleDateString('fa-IR')} تا ${temp.latest?.toLocaleDateString('fa-IR')}`);
                    }
                    
                    if (analysis.mixed) {
                        const mixed = analysis.mixed;
                        console.log(`         ترکیب داده:`);
                        console.log(`           عددی: ${mixed.composition?.numeric}`);
                        console.log(`           دسته‌ای: ${mixed.composition?.categorical}`);
                        console.log(`           زمانی: ${mixed.composition?.temporal}`);
                    }
                    
                    // نمایش تحلیل‌های تخصصی
                    if (analysis.metrics) {
                        console.log(`         تحلیل تخصصی (${analysis.domain}):`);
                        const metrics = analysis.metrics;
                        
                        for (let [key, value] of Object.entries(metrics)) {
                            if (typeof value === 'number') {
                                console.log(`           ${key}: ${value.toFixed(2)}`);
                            } else if (typeof value === 'string') {
                                console.log(`           ${key}: ${value}`);
                            }
                        }
                    }
                }
            }
        }
    }
    
    // توصیه‌ها و بینش‌ها
    console.log(`\\n💡 بینش‌ها و توصیه‌ها:`);
    
    const insights = generateInsights(analysisResults);
    for (let insight of insights) {
        console.log(`   • ${insight}`);
    }
    
    // آمار جلسه
    console.log(`\\n⏱️  آمار جلسه:`);
    console.log(`   مدت جلسه: ${((new Date() - currentSession.startTime) / 1000).toFixed(2)} ثانیه`);
    console.log(`   مجموعه‌های داده پردازش شده: ${currentSession.datasetsProcessed}`);
    console.log(`   تحلیل‌های انجام شده: ${currentSession.analysesPerformed}`);
    console.log(`   کل رکوردهای پردازش شده: ${currentSession.totalRecords.toLocaleString()}`);
}

function generateInsights(analysisResults) {
    const insights = [];
    
    for (let result of analysisResults) {
        if (result.analyses) {
            for (let [analysisType, analysis] of Object.entries(result.analyses)) {
                if (analysis && analysis.statistics) {
                    const stats = analysis.statistics;
                    
                    // بررسی تغییرات
                    if (stats.coefficientOfVariation > 50) {
                        insights.push(`داده‌های "${result.name}" تغییرات زیادی دارند (CV: ${stats.coefficientOfVariation.toFixed(1)}%)`);
                    }
                    
                    // بررسی توزیع
                    if (Math.abs(stats.mean - stats.median) > stats.standardDeviation * 0.5) {
                        insights.push(`توزیع "${result.name}" نامتقارن است - احتمال وجود مقادیر پرت`);
                    }
                    
                    // بررسی کیفیت داده
                    if (stats.count < 30) {
                        insights.push(`حجم نمونه "${result.name}" کوچک است - نتایج ممکن است قابل اعتماد نباشند`);
                    }
                }
                
                if (analysis && analysis.categories) {
                    const cats = analysis.categories;
                    
                    if (cats.diversity < 0.5) {
                        insights.push(`تنوع "${result.name}" پایین است - غالباً یک دسته غالب دارد`);
                    }
                    
                    if (cats.uniqueCount > analysis.recordCount * 0.8) {
                        insights.push(`"${result.name}" مقادیر زیادی منحصربه‌فرد دارد - ممکن است نیاز به گروه‌بندی داشته باشد`);
                    }
                }
                
                if (analysis && analysis.metrics) {
                    const metrics = analysis.metrics;
                    
                    // توصیه‌های حوزه‌ای
                    if (analysis.domain === 'فروش' && metrics.achievementRate < 80) {
                        insights.push(`عملکرد فروش زیر هدف است (${metrics.achievementRate.toFixed(1)}%) - نیاز به بررسی استراتژی`);
                    }
                    
                    if (analysis.domain === 'کیفیت' && metrics.qualityPercentages?.excellent < 50) {
                        insights.push(`کیفیت عالی کمتر از ۵۰٪ است - فرصت بهبود وجود دارد`);
                    }
                    
                    if (analysis.domain === 'عملکرد' && metrics.overallGrade === 'نیاز به بهبود') {
                        insights.push(`عملکرد کلی نیاز به بهبود فوری دارد`);
                    }
                }
            }
        }
    }
    
    return insights.length > 0 ? insights : ['تمام تحلیل‌ها در محدوده انتظار قرار دارند'];
}

// مرحله ۵: نمایش قابلیت‌های موتور تحلیل

console.log("\\n\\n🎯 نمایش قابلیت‌های موتور تحلیل:");
console.log("-".repeat(70));

// نمونه داده‌های تست
const sampleDatasets = [
    {
        name: "فروش فروشگاه آنلاین",
        data: [
            2500000, 3200000, 1800000, 4100000, 2900000, 3700000, 2200000,
            3800000, 4500000, 2100000, 3300000, 2800000, 4200000, 3900000,
            2600000, 3100000, 2400000, 3600000, 4000000, 2300000
        ]
    },
    {
        name: "امتیاز رضایت مشتری",
        data: [85, 72, 90, 68, 91, 78, 85, 92, 76, 88, 73, 89, 84, 79, 86, 93, 71, 87, 82, 94]
    },
    {
        name: "دسته‌بندی محصولات",
        data: [
            "لپ‌تاپ", "موبایل", "تبلت", "موبایل", "لپ‌تاپ", "هدفون", "موبایل",
            "تبلت", "لپ‌تاپ", "هدفون", "موبایل", "ساعت هوشمند", "لپ‌تاپ", "موبایل",
            "تبلت", "هدفون", "موبایل", "لپ‌تاپ", "ساعت هوشمند", "موبایل"
        ]
    },
    {
        name: "زمان خرید",
        data: [
            "2024-01-15T10:30:00", "2024-01-16T14:20:00", "2024-01-17T09:45:00",
            "2024-01-18T16:15:00", "2024-01-19T11:30:00", "2024-01-20T13:45:00",
            "2024-01-21T08:20:00", "2024-01-22T15:30:00", "2024-01-23T12:15:00",
            "2024-01-24T17:45:00", "2024-01-25T10:15:00", "2024-01-26T14:30:00"
        ]
    },
    {
        name: "داده ترکیبی نمونه",
        data: [
            1500, "فعال", "2024-01-15", true, 2300, "غیرفعال", "2024-01-16", false,
            1800, "فعال", "2024-01-17", true, 2100, "فعال", "2024-01-18", true
        ]
    }
];

// مثال ۱: تحلیل پایه
console.log("\\n1️⃣  تحلیل‌های پایه:");
for (let dataset of sampleDatasets.slice(0, 3)) {
    analyzeDataSet(dataset.data, dataset.name, ANALYSIS_MODES.COMPREHENSIVE);
}

// مثال ۲: تحلیل‌های تخصصی
console.log("\\n\\n2️⃣  تحلیل‌های تخصصی:");

const salesAnalyzer = createSpecializedAnalyzer('فروش', { targetRevenue: 70000000, period: 'ماهانه' });
const qualityAnalyzer = createSpecializedAnalyzer('کیفیت', { thresholds: [70, 85] });
const performanceAnalyzer = createSpecializedAnalyzer('عملکرد', { benchmarks: [70, 80, 90] });

if (salesAnalyzer) {
    const salesResult = salesAnalyzer(sampleDatasets[0].data, {});
    console.log(`\\n   💰 نتیجه تحلیل فروش:`);
    console.log(`      کل فروش: ${salesResult.metrics.totalSales.toLocaleString()} تومان`);
    console.log(`      درصد دستیابی به هدف: ${salesResult.metrics.achievementRate.toFixed(1)}%`);
    console.log(`      پیش‌بینی دوره بعد: ${salesResult.metrics.projection.toFixed(0)} تومان`);
}

if (qualityAnalyzer) {
    const qualityResult = qualityAnalyzer(sampleDatasets[1].data, {});
    console.log(`\\n   ⭐ نتیجه تحلیل کیفیت:`);
    console.log(`      میانگین کیفیت: ${qualityResult.metrics.averageQuality.toFixed(1)}`);
    console.log(`      عالی: ${qualityResult.metrics.qualityPercentages.excellent.toFixed(1)}%`);
    console.log(`      قابل قبول: ${qualityResult.metrics.qualityPercentages.acceptable.toFixed(1)}%`);
}

// مثال ۳: تحلیل چندگانه
console.log("\\n\\n3️⃣  تحلیل چندگانه:");

const multiAnalysisResults = performMultipleAnalyses(
    sampleDatasets.slice(0, 2),
    [ANALYSIS_MODES.BASIC, ANALYSIS_MODES.STATISTICAL],
    (results) => {
        console.log(`\\n   🔬 پردازش ${results.length} مجموعه داده تکمیل شد`);
        return results;
    }
);

// مثال ۴: گزارش جامع
console.log("\\n\\n4️⃣  تولید گزارش جامع:");
generateComprehensiveReport(multiAnalysisResults);

// مثال ۵: مقایسه مجموعه‌های داده
console.log("\\n\\n5️⃣  مقایسه عملکرد:");

function compareDatasets(dataset1, dataset2, name1, name2) {
    console.log(`\\n   ⚖️  مقایسه "${name1}" با "${name2}":`);
    
    const analysis1 = analyzeDataSet(dataset1, name1, ANALYSIS_MODES.STATISTICAL);
    const analysis2 = analyzeDataSet(dataset2, name2, ANALYSIS_MODES.STATISTICAL);
    
    if (analysis1.statistics && analysis2.statistics) {
        const meanDiff = analysis1.statistics.mean - analysis2.statistics.mean;
        const stdDiff = analysis1.statistics.standardDeviation - analysis2.statistics.standardDeviation;
        
        console.log(`      تفاوت میانگین: ${meanDiff.toFixed(2)}`);
        console.log(`      ${meanDiff > 0 ? name1 : name2} میانگین بالاتری دارد`);
        console.log(`      تفاوت انحراف معیار: ${stdDiff.toFixed(2)}`);
        console.log(`      ${stdDiff > 0 ? name1 : name2} پایدارتر است`);
    }
}

compareDatasets(
    sampleDatasets[0].data,
    sampleDatasets[1].data.map(x => x * 50000), // تبدیل امتیاز به مبلغ برای مقایسه
    "فروش واقعی",
    "فروش بر اساس رضایت"
);

console.log("\\n\\n✅ نمایش کامل موتور تحلیل داده تکمیل شد!");
console.log(`📊 کل محاسبات انجام شده: ${currentSession.analysesPerformed}`);
console.log(`⏱️  زمان کل اجرا: ${((new Date() - currentSession.startTime) / 1000).toFixed(2)} ثانیه`);
```

## 🚀 چالش‌های اضافی

اگر زودتر تمام کردید، این بهبودها را امتحان کنید:

1. **سیستم پیش‌بینی**: اضافه کردن الگوریتم‌های رگرسیون خطی و تحلیل روند برای پیش‌بینی آینده
2. **تشخیص ناهنجاری**: ایجاد توابع تشخیص مقادیر پرت و الگوهای غیرعادی
3. **تحلیل همبستگی**: پیاده‌سازی تحلیل روابط بین متغیرهای مختلف
4. **خوشه‌بندی داده**: ساخت الگوریتم‌های گروه‌بندی خودکار برای یافتن الگوها
5. **واردات/صادرات**: اضافه کردن قابلیت خواندن از فایل‌های CSV و JSON
6. **داشبورد تعاملی**: ایجاد رابط کاربری پیشرفته‌تر با منوهای تعاملی
7. **بهینه‌سازی عملکرد**: پیاده‌سازی پردازش موازی برای مجموعه‌های داده بزرگ
8. **ذخیره‌سازی نتایج**: ساخت سیستم کش برای ذخیره نتایج تحلیل‌های قبلی

## ✅ معیارهای موفقیت

موتور تحلیل داده شما باید:

- [ ] حداقل ۶ نوع تحلیل مختلف (عددی، دسته‌ای، زمانی، ترکیبی، تخصصی، مقایسه‌ای) پیاده‌سازی کند
- [ ] ساختارهای کنترل پیچیده شامل حلقه‌های تو در تو و شرط‌های چندلایه استفاده کند
- [ ] حداقل ۱۰ تابع با انواع مختلف نحو (اعلان، عبارت، پیکانی) داشته باشد
- [ ] ۳ کارخانه تابع برای ایجاد تحلیل‌گرهای تخصصی پیاده‌سازی کند
- [ ] سیستم گزارش‌دهی جامع با چندین سطح جزئیات ارائه دهد
- [ ] قابلیت پردازش همزمان چندین مجموعه داده داشته باشد
- [ ] حداقل ۱۵ محاسبه آماری مختلف انجام دهد
- [ ] سیستم تولید بینش خودکار از داده‌ها داشته باشد
- [ ] مدیریت خطای پیشرفته و اعتبارسنجی ورودی کند
- [ ] پیگیری کامل عملیات و آمار جلسه حفظ کند

## 🎓 نتایج کلیدی یادگیری

پس از تکمیل این تمرین، شما خواهید داشت:

- تسلط کامل بر تمام مفاهیم JavaScript تدریس شده
- تجربه ساخت سیستم‌های پیچیده و کاملاً کاربردی
- درک عمیق از الگوهای طراحی نرم‌افزار و معماری مدولار
- مهارت در پردازش و تحلیل انواع مختلف داده
- توانایی ترکیب ساختارهای کنترل و توابع در پروژه‌های واقعی
- آشنایی با مفاهیم علم داده و تحلیل آماری
- اعتماد به نفس برای حل مسائل پیچیده برنامه‌نویسی

---

**تخمین زمان:** ۹۰-۱۲۰ دقیقه  
**سطح دشواری:** تسلط (Mastery)  
**تمرکز:** ترکیب جامع تمام مفاهیم، سیستم‌های پیچیده، تحلیل داده
