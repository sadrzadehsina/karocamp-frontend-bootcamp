<!-- markdownlint-disable -->

# تمرین ۰۵: سیستم مدیریت پیشرفته نمرات دانشجویان

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- منطق شرطی پیچیده با دستورات تودرتوی `if`/`else`
- استفاده پیشرفته از دستورات `switch` با حالت‌های انتقالی
- پیاده‌سازی انواع مختلف حلقه برای سناریوهای متفاوت
- استفاده استراتژیک از `break` و `continue` در حلقه‌های تودرتو
- ترکیب ساختارهای کنترل جریان برای منطق پیچیده
- کار با آرایه‌ها و کنترل جریان به صورت همزمان
- ساخت سیستم‌های جامع پردازش داده

## 📋 توضیح تمرین

یک سیستم جامع مدیریت نمرات دانشجویان بسازید که نمرات چندین دانشجو را پردازش کند، آمار محاسبه کند، نمرات حروفی تعیین کند و گزارش‌های تفصیلی تولید کند. این تمرین چالش‌برانگیز تمام مفاهیم کنترل جریان مرحله ۳ را در یک سناریوی واقعی ترکیب می‌کند.

## 🔧 الزامات

### الزامات پایه:
1. پردازش چندین دانشجو با چندین درس برای هر کدام
2. محاسبه میانگین هر دانشجو و آمار کلی کلاس
3. تعیین نمرات حروفی با استفاده از منطق شرطی پیچیده
4. استفاده از انواع مختلف حلقه برای کارهای پردازشی متفاوت
5. پیاده‌سازی اعتبارسنجی نمرات با دستورات `continue`
6. استفاده از `break` برای مدیریت موارد خاص و خروج زودهنگام

### الزامات پیشرفته:
1. ایجاد مقیاس نمره‌دهی جامع با نمرات مثبت/منفی
2. پیاده‌سازی نمرات وزن‌دار برای انواع مختلف تکالیف
3. اضافه کردن تحلیل آماری (میانه، نما، انحراف معیار)
4. ایجاد فهرست تقدیر و هشدار بر اساس معیارهای متعدد
5. تولید گزارش‌های تفصیلی پیشرفت با قالب‌بندی شرطی
6. مدیریت موارد استثنایی و اعتبارسنجی داده‌ها

## 💻 ساختار کد نمونه

```javascript
// ساختار داده دانشجویان
const students = [
    {
        name: "علی احمدی",
        id: "ST001",
        grades: {
            math: [85, 92, 78, 88, 95],
            science: [90, 87, 92, 85, 89],
            persian: [88, 91, 85, 87, 90],
            history: [92, 88, 90, 85, 87]
        }
    },
    {
        name: "فاطمه محمدی",
        id: "ST002", 
        grades: {
            math: [78, 82, 75, 80, 85],
            science: [85, 88, 82, 90, 87],
            persian: [82, 85, 88, 84, 86],
            history: [90, 92, 88, 85, 89]
        }
    },
    {
        name: "حسین رضایی",
        id: "ST003",
        grades: {
            math: [95, 98, 92, 96, 94],
            science: [96, 94, 98, 95, 97],
            persian: [94, 96, 92, 98, 95],
            history: [98, 95, 96, 94, 97]
        }
    },
    {
        name: "زهرا کریمی",
        id: "ST004",
        grades: {
            math: [65, 70, 68, 72, 75],
            science: [72, 75, 70, 78, 74],
            persian: [75, 78, 72, 76, 80],
            history: [80, 82, 78, 75, 77]
        }
    },
    {
        name: "محمد حسینی",
        id: "ST005",
        grades: {
            math: [88, 85, 90, 87, 92],
            science: [85, 90, 88, 92, 89],
            persian: [90, 92, 88, 89, 91],
            history: [87, 89, 85, 90, 88]
        }
    }
];

console.log("🎓 سیستم مدیریت پیشرفته نمرات دانشجویان");
console.log("=" .repeat(50));

// مرحله ۱: پردازش نمرات هر دانشجو
console.log("\\n📊 تحلیل دانشجویان به صورت جداگانه:");
console.log("-".repeat(40));

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`\\n👤 دانشجو: ${student.name} (شناسه: ${student.id})`);
    
    let totalPoints = 0;
    let totalGrades = 0;
    let subjectAverages = {};
    
    // پردازش هر درس با استفاده از حلقه for...in
    for (let subject in student.grades) {
        let subjectTotal = 0;
        let validGrades = 0;
        
        // اعتبارسنجی و جمع نمرات این درس
        for (let j = 0; j < student.grades[subject].length; j++) {
            let grade = student.grades[subject][j];
            
            // رد کردن نمرات نامعتبر (دستور continue)
            if (grade < 0 || grade > 100) {
                console.log(`   ⚠️  نمره نامعتبر ${grade} برای درس ${subject} رد شد`);
                continue;
            }
            
            subjectTotal += grade;
            validGrades++;
        }
        
        // محاسبه میانگین درس
        if (validGrades > 0) {
            const subjectAverage = subjectTotal / validGrades;
            subjectAverages[subject] = subjectAverage;
            totalPoints += subjectTotal;
            totalGrades += validGrades;
            
            const persianSubject = {
                math: "ریاضی",
                science: "علوم",
                persian: "فارسی", 
                history: "تاریخ"
            };
            
            console.log(`   📚 ${persianSubject[subject]}: ${subjectAverage.toFixed(1)}% (${validGrades} نمره)`);
        }
    }
    
    // محاسبه میانگین کلی
    const overallAverage = totalGrades > 0 ? totalPoints / totalGrades : 0;
    console.log(`   🎯 میانگین کلی: ${overallAverage.toFixed(1)}%`);
    
    // تعیین نمره حروفی با استفاده از منطق شرطی پیچیده
    let letterGrade;
    let gradeStatus;
    
    if (overallAverage >= 97) {
        letterGrade = "عالی+";
        gradeStatus = "فوق‌العاده";
    } else if (overallAverage >= 93) {
        letterGrade = "عالی";
        gradeStatus = "بسیار خوب";
    } else if (overallAverage >= 90) {
        letterGrade = "عالی-";
        gradeStatus = "خوب";
    } else if (overallAverage >= 87) {
        letterGrade = "خوب+";
        gradeStatus = "مناسب";
    } else if (overallAverage >= 83) {
        letterGrade = "خوب";
        gradeStatus = "بالای متوسط";
    } else if (overallAverage >= 80) {
        letterGrade = "خوب-";
        gradeStatus = "رضایت‌بخش";
    } else if (overallAverage >= 77) {
        letterGrade = "متوسط+";
        gradeStatus = "قابل قبول";
    } else if (overallAverage >= 73) {
        letterGrade = "متوسط";
        gradeStatus = "قبولی";
    } else if (overallAverage >= 70) {
        letterGrade = "متوسط-";
        gradeStatus = "زیر متوسط";
    } else if (overallAverage >= 60) {
        letterGrade = "ضعیف";
        gradeStatus = "نیاز به بهبود";
    } else {
        letterGrade = "مردود";
        gradeStatus = "ناکام";
    }
    
    console.log(`   📝 نمره حروفی: ${letterGrade} (${gradeStatus})`);
    
    // اضافه کردن خلاصه دانشجو به پردازش
    student.overallAverage = overallAverage;
    student.letterGrade = letterGrade;
    student.gradeStatus = gradeStatus;
    student.subjectAverages = subjectAverages;
}

// مرحله ۲: آمار کل کلاس با استفاده از انواع مختلف حلقه
console.log("\\n\\n📈 آمار کل کلاس:");
console.log("-".repeat(40));

let classTotal = 0;
let highestAverage = 0;
let lowestAverage = 100;
let topStudent = "";
let strugglingStudent = "";
let honorRollStudents = [];
let warningListStudents = [];

// استفاده از حلقه while برای آمار کلاس
let studentIndex = 0;
while (studentIndex < students.length) {
    const student = students[studentIndex];
    const average = student.overallAverage;
    
    classTotal += average;
    
    // پیگیری بهترین و ضعیف‌ترین دانشجو
    if (average > highestAverage) {
        highestAverage = average;
        topStudent = student.name;
    }
    
    if (average < lowestAverage) {
        lowestAverage = average;
        strugglingStudent = student.name;
    }
    
    // دسته‌بندی دانشجویان بر اساس عملکرد
    if (average >= 90) {
        honorRollStudents.push(student.name);
    } else if (average < 75) {
        warningListStudents.push(student.name);
    }
    
    studentIndex++;
}

const classAverage = classTotal / students.length;

console.log(`📊 میانگین کلاس: ${classAverage.toFixed(1)}%`);
console.log(`🏆 بهترین دانشجو: ${topStudent} (${highestAverage.toFixed(1)}%)`);
console.log(`📉 نیاز به حمایت: ${strugglingStudent} (${lowestAverage.toFixed(1)}%)`);
console.log(`🎖️  دانشجویان تقدیرشده: ${honorRollStudents.length}`);
console.log(`⚠️  دانشجویان در معرض خطر: ${warningListStudents.length}`);

// مرحله ۳: تولید گزارش‌های تفصیلی با استفاده از دستورات switch
console.log("\\n\\n📋 گزارش‌های تفصیلی عملکرد:");
console.log("-".repeat(50));

for (let i = 0; i < students.length; i++) {
    const student = students[i];
    console.log(`\\n📄 کارنامه: ${student.name}`);
    console.log("=".repeat(30));
    
    // دسته‌بندی عملکرد با استفاده از switch با انتقال
    let performanceCategory;
    let recommendedActions = [];
    
    switch(true) {
        case (student.overallAverage >= 95):
            performanceCategory = "استثنایی";
            recommendedActions.push("🌟 در نظر گیری برای دروس پیشرفته");
            recommendedActions.push("🎯 کشف فرصت‌های رهبری");
            // انتقال به مورد بعدی
        case (student.overallAverage >= 90):
            if (performanceCategory !== "استثنایی") {
                performanceCategory = "عالی";
            }
            recommendedActions.push("📚 حفظ عادات مطالعه فعلی");
            break;
            
        case (student.overallAverage >= 85):
            performanceCategory = "بسیار خوب";
            recommendedActions.push("📈 تمرکز بر ثبات در تمام دروس");
            recommendedActions.push("🎯 تعیین اهداف بالاتر برای ترم بعد");
            break;
            
        case (student.overallAverage >= 80):
            performanceCategory = "خوب";
            recommendedActions.push("📖 بازبینی استراتژی‌های مطالعه");
            recommendedActions.push("👥 در نظر گیری گروه‌های مطالعه");
            break;
            
        case (student.overallAverage >= 75):
            performanceCategory = "رضایت‌بخش";
            recommendedActions.push("⏰ بهبود مدیریت زمان");
            recommendedActions.push("📝 جستجوی منابع تمرین اضافی");
            break;
            
        case (student.overallAverage >= 70):
            performanceCategory = "نیاز به بهبود";
            recommendedActions.push("👨‍🏫 زمان‌بندی جلسات با معلم");
            recommendedActions.push("📚 در نظر گیری کمک تدریس");
            break;
            
        default:
            performanceCategory = "نیاز به توجه فوری";
            recommendedActions.push("🚨 حمایت تحصیلی اجباری");
            recommendedActions.push("👪 جلسه والدین-معلم ضروری");
            recommendedActions.push("📋 توسعه برنامه بهبود");
            break;
    }
    
    console.log(`سطح عملکرد: ${performanceCategory}`);
    console.log(`نمره کلی: ${student.letterGrade} (${student.overallAverage.toFixed(1)}%)`);
    
    // تفکیک درس‌ها
    console.log("\\nعملکرد در دروس:");
    for (let subject in student.subjectAverages) {
        const avg = student.subjectAverages[subject];
        let trend = "";
        
        const persianSubjects = {
            math: "ریاضی",
            science: "علوم",
            persian: "فارسی",
            history: "تاریخ"
        };
        
        // تعیین روند با استفاده از شرطی‌های تودرتو
        if (avg >= 90) {
            trend = "🔥 فوق‌العاده";
        } else if (avg >= 80) {
            trend = "✅ قوی";
        } else if (avg >= 70) {
            trend = "📊 متوسط";
        } else {
            trend = "❗ نیاز به تمرکز";
        }
        
        console.log(`  ${persianSubjects[subject]}: ${avg.toFixed(1)}% ${trend}`);
    }
    
    // پیشنهادات
    console.log("\\nاقدامات پیشنهادی:");
    for (let j = 0; j < recommendedActions.length; j++) {
        console.log(`  ${j + 1}. ${recommendedActions[j]}`);
    }
}

// مرحله ۴: تقدیرات ویژه و هشدارها
console.log("\\n\\n🏅 تقدیرات ویژه و هشدارها:");
console.log("-".repeat(45));

// فهرست تقدیر (استفاده از حلقه for...of)
if (honorRollStudents.length > 0) {
    console.log("\\n🎖️  دانشجویان تقدیرشده:");
    let honorIndex = 1;
    for (const studentName of honorRollStudents) {
        console.log(`  ${honorIndex}. ${studentName}`);
        honorIndex++;
    }
}

// فهرست هشدار
if (warningListStudents.length > 0) {
    console.log("\\n⚠️  فهرست هشدار تحصیلی:");
    let warningIndex = 1;
    for (const studentName of warningListStudents) {
        console.log(`  ${warningIndex}. ${studentName}`);
        warningIndex++;
    }
}

// جوایز حضور کامل (شبیه‌سازی شده)
console.log("\\n🏆 دستاوردهای اضافی:");
const perfectAttendanceStudents = ["علی احمدی", "محمد حسینی"];
let achievementCount = 0;

do {
    if (achievementCount < perfectAttendanceStudents.length) {
        console.log(`  📅 حضور کامل: ${perfectAttendanceStudents[achievementCount]}`);
    }
    achievementCount++;
} while (achievementCount < perfectAttendanceStudents.length);

// خلاصه نهایی
console.log("\\n\\n📊 خلاصه نهایی:");
console.log("=".repeat(25));
console.log(`تعداد دانשجویان پردازش شده: ${students.length}`);
console.log(`میانگین کلاس: ${classAverage.toFixed(1)}%`);
console.log(`دانشجویان بالای میانگین: ${students.filter(s => s.overallAverage > classAverage).length}`);
console.log(`دانشجویان زیر میانگین: ${students.filter(s => s.overallAverage < classAverage).length}`);
console.log("\\n✅ پردازش نمرات تکمیل شد!");
```

## 🚀 چالش‌های اضافی

اگر زودتر تمام کردید، این بهبودها را امتحان کنید:

1. **آمار پیشرفته**: محاسبه میانه، نما و انحراف معیار برای کلاس
2. **نمرات وزن‌دار**: پیاده‌سازی وزن‌های مختلف برای انواع تکالیف (امتحان ۴۰٪، تکلیف ۳۰٪، پروژه ۳۰٪)
3. **روند نمرات**: پیگیری بهبود یا افت با مقایسه با داده‌های ترم قبل
4. **تحلیل درس‌ها**: شناسایی دروسی که کلاس بیشتر با آن مشکل دارد
5. **اطلاع‌رسانی والدین**: تولید پیام‌های خودکار برای والدین بر اساس عملکرد دانشجو
6. **منحنی نمرات**: پیاده‌سازی سیستم منحنی که نمرات را بر اساس عملکرد کلاس تنظیم کند
7. **تأثیر حضور**: در نظر گیری حضور در محاسبه نمرات نهایی
8. **امتیاز اضافی**: مدیریت تکالیف امتیاز اضافی که می‌تواند نمرات را بالای ۱۰۰ برساند

## ✅ معیارهای موفقیت

سیستم مدیریت نمرات شما باید:

- [ ] تمام داده‌های دانشجویان را بدون خطا پردازش کند
- [ ] حداقل ۳ نوع مختلف حلقه استفاده کند (`for`, `while`, `do...while`, `for...in`, `for...of`)
- [ ] منطق شرطی پیچیده با دستورات تودرتوی `if`/`else` پیاده‌سازی کند
- [ ] از دستورات `switch` با حالت‌های انتقالی استفاده کند
- [ ] به درستی از دستورات `break` و `continue` استفاده کند
- [ ] میانگین‌ها و آمار دقیق محاسبه کند
- [ ] نمرات حروفی صحیح را بر اساس معیارهای جامع تعیین کند
- [ ] گزارش‌های تفصیلی و قالب‌بندی شده برای هر دانشجو تولید کند
- [ ] موارد استثنایی و داده‌های نامعتبر را با ظرافت مدیریت کند
- [ ] پیشنهادات معنادار بر اساس عملکرد ارائه دهد

## 🎓 نتایج کلیدی یادگیری

پس از تکمیل این تمرین، شما خواهید داشت:

- تسلط بر منطق کنترل جریان پیچیده در سناریوهای واقعی
- تجربه با حلقه‌های تودرتو و دستورات شرطی
- درک اعتبارسنجی داده‌ها و مدیریت خطا
- مهارت در پردازش و تحلیل داده‌های ساختاریافته
- آگاهی از سیستم‌های نمره‌دهی آموزشی و تحلیل آماری
- اعتماد به نفس در ساخت برنامه‌های جامع پردازش داده

---

**تخمین زمان:** ۴۵-۶۰ دقیقه  
**سطح دشواری:** پیشرفته  
**تمرکز:** کنترل جریان پیچیده، پردازش داده، منطق شرطی
