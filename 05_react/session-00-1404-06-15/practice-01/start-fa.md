# تمرین ۰۱: پراپ‌های پایه‌ای

## هدف
یادگیری ارسال و دریافت پراپ‌های ساده در کامپوننت‌های ری‌اکت.

## وظیفه
یک کامپوننت به نام `PersonCard` بسازید که پراپ‌های زیر را دریافت کند:
- `name` (رشته)
- `age` (عدد)
- `city` (رشته)

## الزامات
1. یک کامپوننت `PersonCard` بسازید که سه پراپ بالا را دریافت کند
2. اطلاعات را به صورت کارت با استایل نمایش دهید
3. حداقل ۳ نمونه مختلف از `PersonCard` با داده‌های متفاوت بسازید
4. از استایل‌های خطی یا آبجکت‌های استایل برای زیباتر کردن کارت‌ها استفاده کنید

## خروجی مورد انتظار
هر کارت باید این اطلاعات را نمایش دهد:
```
نام: John Doe
سن: ۲۵
شهر: New York
```

## کد شروع
```html
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تمرین ۰۱: پراپ‌های پایه‌ای</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // کامپوننت PersonCard خود را اینجا بسازید
        function PersonCard(/* پراپ‌های شما اینجا */) {
            return (
                // JSX شما اینجا
            );
        }

        function App() {
            return (
                <div style={{ padding: '20px' }}>
                    <h1>کارت‌های اشخاص</h1>
                    {/* ۳ نمونه PersonCard اینجا بسازید */}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<App />);
    </script>
</body>
</html>
```

## نکات
- برای تزریق عبارات جاوااسکریپت در JSX از آکولادهای `{}` استفاده کنید
- می‌توانید به پراپ‌ها مستقیماً مثل `props.name` دسترسی پیدا کنید یا از destructuring `{name, age, city}` استفاده کنید
- هر دو روش را امتحان کنید تا تفاوت آن‌ها را درک کنید
