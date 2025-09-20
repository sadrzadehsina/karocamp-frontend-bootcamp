# تمرین ۰۲: دساخت پراپ‌ها و مقادیر پیش‌فرض

## هدف
یادگیری استفاده از دساخت (destructuring) با مقادیر پیش‌فرض برای پراپ‌ها.

## وظیفه
یک کامپوننت به نام `ProductCard` بسازید که روش‌های مختلف مدیریت پراپ‌ها با دساخت و مقادیر پیش‌فرض را نمایش دهد.

## الزامات
1. یک کامپوننت `ProductCard` با پراپ‌های زیر بسازید:
   - `name` (رشته، اجباری)
   - `price` (عدد، اجباری)
   - `discount` (عدد، پیش‌فرض: ۰)
   - `currency` (رشته، پیش‌فرض: "USD")
   - `inStock` (بولین، پیش‌فرض: true)

2. از دساخت برای استخراج پراپ‌ها استفاده کنید
3. برای پراپ‌های اختیاری مقدار پیش‌فرض قرار دهید
4. اگر تخفیف > ۰ بود، قیمت اصلی و قیمت با تخفیف را نمایش دهید
5. وضعیت موجودی را نمایش دهید
6. چند کارت محصول با ترکیب‌های مختلف پراپ بسازید

## ویژگی‌های مورد انتظار
- اگر تخفیف > ۰ بود، نشان "تخفیف ویژه!" نمایش داده شود
- اگر inStock برابر false بود، "ناموجود" نمایش داده شود
- قیمت با تخفیف محاسبه و نمایش داده شود
- از ارزهای مختلف استفاده شود

## کد شروع
```html
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تمرین ۰۲: دساخت پراپ‌ها و مقادیر پیش‌فرض</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // کامپوننت ProductCard خود را اینجا بسازید
        function ProductCard({ /* پراپ‌ها را با دساخت و مقدار پیش‌فرض اینجا قرار دهید */ }) {
            // قیمت با تخفیف را محاسبه کنید
            const discountedPrice = // محاسبه شما اینجا
            
            return (
                <div style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '16px',
                    margin: '10px',
                    width: '250px',
                    display: 'inline-block'
                }}>
                    {/* JSX شما اینجا */}
                </div>
            );
        }

        function App() {
            return (
                <div style={{ padding: '20px' }}>
                    <h1>فروشگاه محصولات</h1>
                    {/* کارت‌های مختلف محصول بسازید:
                        1. محصول ساده (فقط نام و قیمت)
                        2. محصول با تخفیف
                        3. محصول با ارز متفاوت
                        4. محصول ناموجود
                        5. محصول با تمام پراپ‌ها
                    */}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<App />);
    </script>
</body>
</html>
```

## اهداف یادگیری
- درک destructuring assignment در پارامترهای تابع
- تنظیم مقادیر پیش‌فرض برای پراپ‌ها
- رندر شرطی بر اساس مقادیر پراپ
- انجام محاسبات با پراپ‌ها
