<!-- markdownlint-disable -->

# تمرین ۰۶: سیستم تورنمنت بازی‌های تعاملی

## 🎯 اهداف یادگیری

با تکمیل این تمرین، شما یاد خواهید گرفت:

- ساخت منطق بازی تعاملی پیچیده با کنترل جریان
- پیاده‌سازی جدول تورنمنت با استفاده از حلقه‌های تودرتو
- ایجاد مدیریت وضعیت بازی با منطق شرطی
- استفاده از دستورات `switch` برای انتخاب حالت بازی
- کنترل پیشرفته حلقه با `break` و `continue`
- شبیه‌سازی تعاملات کاربر و پیشرفت بازی
- مدیریت ساختارهای داده پیچیده با کنترل جریان

## 📋 توضیح تمرین

یک سیستم تورنمنت تعاملی بسازید که بازی‌های متعدد اجرا کند، امتیازات را پیگیری کند، رتبه‌بندی بازیکنان را مدیریت کند و برندگان تورنمنت را تعیین کند. این تمرین پیشرفته تمام مفاهیم کنترل جریان را ترکیب می‌کند تا یک تجربه کامل بازی با حالت‌های مختلف و پیشرفت تورنمنت بسازد.

## 🔧 الزامات

### الزامات پایه:
1. پیاده‌سازی چندین مینی‌بازی با قوانین مختلف
2. ایجاد سیستم جدول تورنمنت با دورهای حذفی
3. استفاده از حلقه‌ها برای شبیه‌سازی دورهای بازی و نوبت بازیکنان
4. پیاده‌سازی سیستم‌های پیچیده امتیازدهی و رتبه‌بندی
5. استفاده از منطق شرطی برای قوانین بازی و شرایط پیروزی
6. مدیریت اقدامات بازیکن و تبدیل وضعیت بازی

### الزامات پیشرفته:
1. ایجاد فرمت‌های مختلف تورنمنت (حذفی تک‌مرحله‌ای، همه با همه)
2. پیاده‌سازی قدرت‌های ویژه و مکانیک‌های خاص بازی
3. اضافه کردن تنظیم سختی و گیم‌پلی تطبیقی
4. ایجاد آمار تفصیلی بازی و تجزیه و تحلیل
5. مدیریت سناریوهای تساوی و دورهای پلی‌آف
6. تولید گزارش‌های تورنمنت و جشن قهرمانی

## 💻 ساختار کد نمونه

```javascript
// تنظیمات تورنمنت و داده‌های بازیکن
const players = [
    { name: "علی توفان", id: "P001", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "مریم برق", id: "P002", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "سام شعله", id: "P003", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "نیلا طوفان", id: "P004", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "رضا آتش", id: "P005", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "فاطمه جرقه", id: "P006", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "حسین رعد", id: "P007", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 },
    { name: "زهرا برق", id: "P008", wins: 0, losses: 0, totalScore: 0, gamesPlayed: 0 }
];

const games = ["دوئل اعداد", "تطبیق الگو", "ریاضی سریع", "چالش حافظه", "پازل منطق"];
let tournamentRound = 1;
let activePlayers = [...players]; // کپی از بازیکنان برای تورنمنت

console.log("🏆 به تورنمنت نهایی بازی‌های تعاملی خوش آمدید!");
console.log("=" .repeat(55));
console.log(`🎮 امکانات تورنمنت: ${games.length} بازی | ${players.length} بازیکن`);
console.log(`🎯 فرمت تورنمنت: حذفی تک‌مرحله‌ای با حالت‌های مختلف بازی`);

// مرحله ۱: انتخاب حالت تورنمنت
console.log("\\n🎲 انتخاب حالت تورنمنت:");
console.log("-".repeat(30));

let tournamentMode = 2; // انتخاب شبیه‌سازی شده (1=سریع، 2=استاندارد، 3=قهرمانی)

switch(tournamentMode) {
    case 1:
        console.log("⚡ تورنمنت سریع انتخاب شد!");
        console.log("   - بهترین از ۳ بازی در هر مسابقه");
        console.log("   - حذفی تک‌مرحله‌ای");
        console.log("   - تخمین زمان ۱۵ دقیقه");
        var gamesPerMatch = 3;
        var enablePowerUps = false;
        break;
        
    case 2:
        console.log("🎯 تورنمنت استاندارد انتخاب شد!");
        console.log("   - بهترین از ۵ بازی در هر مسابقه");
        console.log("   - حذفی تک‌مرحله‌ای با پلی‌آف");
        console.log("   - قدرت‌های ویژه فعال");
        console.log("   - تخمین زمان ۳۰ دقیقه");
        var gamesPerMatch = 5;
        var enablePowerUps = true;
        break;
        
    case 3:
        console.log("👑 تورنمنت قهرمانی انتخاب شد!");
        console.log("   - بهترین از ۷ بازی در هر مسابقه");
        console.log("   - حذفی دو مرحله‌ای");
        console.log("   - تمام امکانات فعال");
        console.log("   - تخمین زمان ۶۰ دقیقه");
        var gamesPerMatch = 7;
        var enablePowerUps = true;
        var doubleElimination = true;
        break;
        
    default:
        console.log("⚠️  حالت نامعتبر! به تورنمنت استاندارد تغییر یافت");
        var gamesPerMatch = 5;
        var enablePowerUps = true;
        break;
}

// مرحله ۲: تولید جدول تورنمنت
console.log("\\n\\n🏗️  تولید جدول تورنمنت:");
console.log("-".repeat(40));

// قاطی کردن بازیکنان برای جدول تصادفی
for (let i = activePlayers.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [activePlayers[i], activePlayers[randomIndex]] = [activePlayers[randomIndex], activePlayers[i]];
}

console.log("🎲 بازیکنان برای تولید جدول عادلانه قاطی شدند");
console.log("📋 جدول اولیه:");

for (let i = 0; i < activePlayers.length; i += 2) {
    if (i + 1 < activePlayers.length) {
        console.log(`   مسابقه ${(i/2) + 1}: ${activePlayers[i].name} در برابر ${activePlayers[i + 1].name}`);
    }
}

// مرحله ۳: دورهای تورنمنت با حذف
while (activePlayers.length > 1) {
    console.log(`\\n\\n🏆 دور ${tournamentRound} تورنمنت:`);
    console.log("=" .repeat(35));
    console.log(`👥 بازیکنان باقی‌مانده: ${activePlayers.length}`);
    console.log(`🎮 مسابقات برای انجام: ${Math.floor(activePlayers.length / 2)}`);
    
    let winners = [];
    let matchNumber = 1;
    
    // پردازش مسابقات به صورت جفت (حذفی تک‌مرحله‌ای)
    for (let i = 0; i < activePlayers.length; i += 2) {
        // رد شدن اگر تعداد بازیکنان فرد باشد (دور معاف)
        if (i + 1 >= activePlayers.length) {
            console.log(`\\n🎫 دور معاف: ${activePlayers[i].name} به صورت خودکار صعود کرد!`);
            winners.push(activePlayers[i]);
            continue;
        }
        
        const player1 = activePlayers[i];
        const player2 = activePlayers[i + 1];
        
        console.log(`\\n⚔️  مسابقه ${matchNumber}: ${player1.name} در برابر ${player2.name}`);
        console.log("-".repeat(40));
        
        let player1Wins = 0;
        let player2Wins = 0;
        const winsNeeded = Math.ceil(gamesPerMatch / 2);
        
        // بازی تا زمانی که یکی به برد مورد نیاز برسد
        let gameCount = 0;
        while (player1Wins < winsNeeded && player2Wins < winsNeeded && gameCount < gamesPerMatch) {
            gameCount++;
            
            // انتخاب بازی تصادفی برای این دور
            const currentGame = games[Math.floor(Math.random() * games.length)];
            console.log(`\\n  🎲 بازی ${gameCount}: ${currentGame}`);
            
            // شبیه‌سازی بازی بر اساس نوع
            let gameResult = simulateGame(currentGame, player1, player2, enablePowerUps);
            
            if (gameResult.winner === player1) {
                player1Wins++;
                console.log(`    🏆 ${player1.name} برنده شد! امتیاز: ${gameResult.score}`);
                if (gameResult.powerUpUsed) {
                    console.log(`    ⚡ قدرت ویژه استفاده شده: ${gameResult.powerUpUsed}`);
                }
            } else {
                player2Wins++;
                console.log(`    🏆 ${player2.name} برنده شد! امتیاز: ${gameResult.score}`);
                if (gameResult.powerUpUsed) {
                    console.log(`    ⚡ قدرت ویژه استفاده شده: ${gameResult.powerUpUsed}`);
                }
            }
            
            console.log(`    📊 سری: ${player1.name} ${player1Wins} - ${player2Wins} ${player2.name}`);
            
            // بررسی برای پیروزی زودهنگام
            if (player1Wins === winsNeeded || player2Wins === winsNeeded) {
                console.log(`    🎯 مسابقه تصمیم‌گیری شد! انتقال به مسابقه بعدی...`);
                break;
            }
        }
        
        // تعیین برنده مسابقه
        const matchWinner = player1Wins > player2Wins ? player1 : player2;
        const matchLoser = player1Wins > player2Wins ? player2 : player1;
        
        // به‌روزرسانی آمار
        matchWinner.wins++;
        matchWinner.gamesPlayed += gameCount;
        matchLoser.losses++;
        matchLoser.gamesPlayed += gameCount;
        
        console.log(`\\n  🎊 برنده مسابقه: ${matchWinner.name}!`);
        console.log(`     سری نهایی: ${player1Wins} - ${player2Wins}`);
        console.log(`     بازی‌های انجام شده: ${gameCount}`);
        
        winners.push(matchWinner);
        matchNumber++;
    }
    
    // به‌روزرسانی بازیکنان فعال برای دور بعد
    activePlayers = winners;
    tournamentRound++;
    
    // نمایش خلاصه دور
    console.log(`\\n📈 خلاصه دور ${tournamentRound - 1}:`);
    console.log(`   🏆 صعود به دور بعد: ${winners.length} بازیکن`);
    
    if (winners.length > 1) {
        console.log("   👥 بازیکنان باقی‌مانده:");
        for (let i = 0; i < winners.length; i++) {
            console.log(`      ${i + 1}. ${winners[i].name} (${winners[i].wins}ب-${winners[i].losses}ش)`);
        }
    }
    
    // مکث بین دورها (شبیه‌سازی شده)
    if (activePlayers.length > 1) {
        console.log("\\n⏳ آماده‌سازی برای دور بعد...");
    }
}

// مرحله ۴: تاج‌گذاری قهرمان
console.log("\\n\\n🎆 قهرمان تورنمنت تاج‌گذاری شد!");
console.log("=" .repeat(40));

const champion = activePlayers[0];
console.log(`👑 قهرمان: ${champion.name}!`);
console.log(`🏆 رکورد تورنمنت: ${champion.wins} برد - ${champion.losses} شکست`);
console.log(`🎮 کل بازی‌های انجام شده: ${champion.gamesPlayed}`);

// محاسبه درصد برد
const winPercentage = champion.gamesPlayed > 0 ? 
    ((champion.wins / (champion.wins + champion.losses)) * 100).toFixed(1) : 0;
console.log(`📊 درصد برد: ${winPercentage}%`);

// مرحله ۵: آمار نهایی تورنمنت
console.log("\\n\\n📈 آمار نهایی تورنمنت:");
console.log("-".repeat(45));

// مرتب‌سازی همه بازیکنان بر اساس عملکرد
players.sort((a, b) => {
    // ابتدا بر اساس برد، سپس بر اساس درصد برد مرتب کن
    if (b.wins !== a.wins) return b.wins - a.wins;
    
    const aWinRate = a.wins + a.losses > 0 ? a.wins / (a.wins + a.losses) : 0;
    const bWinRate = b.wins + b.losses > 0 ? b.wins / (b.wins + b.losses) : 0;
    return bWinRate - aWinRate;
});

console.log("🏅 جدول نهایی:");
for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const totalGames = player.wins + player.losses;
    const winRate = totalGames > 0 ? ((player.wins / totalGames) * 100).toFixed(1) : 0;
    
    let trophy = "";
    switch(i) {
        case 0:
            trophy = "🥇";
            break;
        case 1:
            trophy = "🥈";
            break;
        case 2:
            trophy = "🥉";
            break;
        default:
            trophy = `${i + 1}.`;
            break;
    }
    
    console.log(`${trophy} ${player.name}: ${player.wins}ب-${player.losses}ش (${winRate}% نرخ برد)`);
    
    // نمایش دستاوردهای ویژه
    if (player.wins > 0 && player.losses === 0) {
        console.log(`    🔥 رکورد کامل!`);
    } else if (player.wins >= 3) {
        console.log(`    ⭐ کهنه‌کار تورنمنت`);
    }
}

// آمار تکمیل تورنمنت
console.log("\\n📊 نگاه کلی تورنمنت:");
const totalMatches = Math.log2(players.length);
const totalGamesPlayed = players.reduce((sum, player) => sum + player.gamesPlayed, 0);

console.log(`   🎯 فرمت تورنمنت: ${gamesPerMatch} بازی در هر مسابقه`);
console.log(`   🏆 تعداد دورها: ${tournamentRound - 1}`);
console.log(`   ⚔️  کل مسابقات: ${Math.floor(totalMatches * players.length / 2)}`);
console.log(`   🎮 کل بازی‌ها: ${totalGamesPlayed}`);
console.log(`   ⚡ قدرت‌های ویژه فعال: ${enablePowerUps ? 'بله' : 'خیر'}`);

console.log("\\n🎊 از شرکت شما متشکریم!");
console.log("=" .repeat(30));

// تابع شبیه‌سازی بازی
function simulateGame(gameType, player1, player2, powerUpsEnabled) {
    let winner, score, powerUpUsed = null;
    
    // شبیه‌سازی مهارت پایه (تصادفی با تنوع کم بازیکن)
    const player1Skill = 0.4 + Math.random() * 0.2; // ۴۰-۶۰٪ مهارت پایه
    const player2Skill = 0.4 + Math.random() * 0.2; // ۴۰-۶۰٪ مهارت پایه
    
    // شانس قدرت ویژه (۱۰٪ اگر فعال باشد)
    const powerUpChance = powerUpsEnabled && Math.random() < 0.1;
    let skillModifier = 0;
    
    if (powerUpChance) {
        const powerUps = ["امتیاز دوبرابر", "توقف زمان", "ضربه خوش‌شانس", "تقویت تمرکز", "شانس دوم"];
        powerUpUsed = powerUps[Math.floor(Math.random() * powerUps.length)];
        skillModifier = 0.15; // ۱۵٪ تقویت
    }
    
    // شبیه‌سازی خاص بازی
    switch(gameType) {
        case "دوئل اعداد":
            // شبیه‌سازی بازی مبتنی بر ریاضی
            const mathResult1 = (player1Skill + (Math.random() * 0.3)) + skillModifier;
            const mathResult2 = (player2Skill + (Math.random() * 0.3));
            
            winner = mathResult1 > mathResult2 ? player1 : player2;
            score = `${Math.floor(mathResult1 * 100)} - ${Math.floor(mathResult2 * 100)}`;
            break;
            
        case "تطبیق الگو":
            // شبیه‌سازی تشخیص الگو
            const patternResult1 = (player1Skill + (Math.random() * 0.4)) + skillModifier;
            const patternResult2 = (player2Skill + (Math.random() * 0.4));
            
            winner = patternResult1 > patternResult2 ? player1 : player2;
            score = `${Math.floor(patternResult1 * 10)}/10 - ${Math.floor(patternResult2 * 10)}/10`;
            break;
            
        case "ریاضی سریع":
            // شبیه‌سازی بازی مبتنی بر سرعت
            const speedResult1 = (player1Skill + (Math.random() * 0.25)) + skillModifier;
            const speedResult2 = (player2Skill + (Math.random() * 0.25));
            
            winner = speedResult1 > speedResult2 ? player1 : player2;
            const time1 = (2 - speedResult1).toFixed(1);
            const time2 = (2 - speedResult2).toFixed(1);
            score = `${time1}ث - ${time2}ث`;
            break;
            
        case "چالش حافظه":
            // شبیه‌سازی بازی مبتنی بر حافظه
            const memoryResult1 = (player1Skill + (Math.random() * 0.35)) + skillModifier;
            const memoryResult2 = (player2Skill + (Math.random() * 0.35));
            
            winner = memoryResult1 > memoryResult2 ? player1 : player2;
            score = `${Math.floor(memoryResult1 * 15)} - ${Math.floor(memoryResult2 * 15)}`;
            break;
            
        case "پازل منطق":
            // شبیه‌سازی بازی مبتنی بر منطق
            const logicResult1 = (player1Skill + (Math.random() * 0.3)) + skillModifier;
            const logicResult2 = (player2Skill + (Math.random() * 0.3));
            
            winner = logicResult1 > logicResult2 ? player1 : player2;
            score = `${Math.floor(logicResult1 * 20)} - ${Math.floor(logicResult2 * 20)}`;
            break;
            
        default:
            // بازی تصادفی پیش‌فرض
            winner = Math.random() > 0.5 ? player1 : player2;
            score = "نتیجه تصادفی";
            break;
    }
    
    return { winner, score, powerUpUsed };
}
```

## 🚀 چالش‌های اضافی

اگر زودتر تمام کردید، این بهبودها را امتحان کنید:

1. **حذفی دو مرحله‌ای**: پیاده‌سازی جدول بازندگان که بازیکنان حذف شده شانس دومی داشته باشند
2. **تورنمنت تیمی**: ایجاد مسابقات مبتنی بر تیم با چندین بازیکن در هر تیم
3. **سیستم رتبه‌بندی مهارت**: پیاده‌سازی سیستم رتبه‌بندی به سبک ELO که عملکرد بلندمدت بازیکنان را پیگیری کند
4. **سازنده بازی سفارشی**: امکان ایجاد مینی‌بازی‌های جدید با قوانین سفارشی
5. **بازپخش تورنمنت**: ذخیره و بازپخش مسابقات تورنمنت با آمار تفصیلی
6. **حالت تماشاگر**: اضافه کردن گزارش و توضیحات لحظه‌به‌لحظه برای مسابقات
7. **قهرمانی فصلی**: ایجاد فصل‌های چند تورنمنته با رتبه‌بندی کلی
8. **سیستم دستاورد**: اضافه کردن دستاوردها و عناوین قابل باز کردن برای بازیکنان

## ✅ معیارهای موفقیت

سیستم تورنمنت شما باید:

- [ ] یک تورنمنت کامل از شروع تا پایان با موفقیت اجرا کند
- [ ] از انواع مختلف حلقه برای مکانیک‌های مختلف تورنمنت استفاده کند
- [ ] منطق شرطی پیچیده برای قوانین بازی و امتیازدهی پیاده‌سازی کند
- [ ] از دستورات `switch` به طور مؤثر برای انتخاب حالت و منطق بازی استفاده کند
- [ ] به درستی از `break` و `continue` برای کنترل جریان استفاده کند
- [ ] موارد استثنایی مانند دورهای معاف و تعادل امتیاز را مدیریت کند
- [ ] آمار جامع و جدول امتیازات تولید کند
- [ ] نتایج بازی واقع‌گرایانه با مکانیک‌های متنوع شبیه‌سازی کند
- [ ] پیشرفت جذاب تورنمنت و گزارش ارائه دهد
- [ ] قهرمان شایسته‌ای را بر اساس عملکرد تورنمنت تعیین کند

## 🎓 نتایج کلیدی یادگیری

پس از تکمیل این تمرین، شما خواهید داشت:

- تسلط بر کنترل جریان پیچیده در سناریوهای بازی تعاملی
- تجربه با منطق جدول تورنمنت و سیستم‌های حذفی
- درک مدیریت وضعیت بازی و پیگیری پیشرفت
- مهارت در شبیه‌سازی مسابقات واقع‌گرایانه و نتایج
- دانش تحلیل آماری و سیستم‌های رتبه‌بندی
- اعتماد به نفس در ساخت برنامه‌های تعاملی جذاب

---

**تخمین زمان:** ۶۰-۷۵ دقیقه  
**سطح دشواری:** پیشرفته  
**تمرکز:** سیستم‌های تعاملی، کنترل جریان پیچیده، منطق بازی
