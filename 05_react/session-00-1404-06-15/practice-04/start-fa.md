# تمرین ۰۴: رندر شرطی با پراپ‌ها

## هدف
یادگیری استفاده از پراپ‌ها برای رندر شرطی و نمایش محتوای پویا.

## وظیفه
یک سیستم اعلان بسازید که انواع مختلف اعلان را بر اساس پراپ‌ها رندر کند.

## الزامات
1. یک کامپوننت `Notification` بسازید که پراپ‌های زیر را دریافت کند:
   - `type` (رشته: "success"، "warning"، "error"، "info")
   - `message` (رشته)
   - `title` (رشته، اختیاری)
   - `showIcon` (بولین، پیش‌فرض: true)
   - `dismissible` (بولین، پیش‌فرض: false)
   - `autoHide` (بولین، پیش‌فرض: false)

2. رندر شرطی را برای موارد زیر پیاده‌سازی کنید:
   - رنگ‌ها و آیکون‌های مختلف بر اساس نوع اعلان
   - نمایش اختیاری عنوان
   - دکمه بستن اختیاری
   - استایل متفاوت برای اعلان‌های auto-hide

3. یک لیست اعلان بسازید که همه انواع را نمایش دهد

## ویژگی‌های مورد انتظار
- رنگ پس‌زمینه متفاوت برای هر نوع
- آیکون‌هایی متناسب با نوع اعلان (از آیکون‌های متنی مانند ✓، ⚠، ✗، ℹ استفاده کنید)
- نمایش اختیاری عنوان
- دکمه بستن اختیاری (×)
- استایل مرز متفاوت برای اعلان‌های auto-hide

## کد شروع
```html
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تمرین ۰۴: رندر شرطی با پراپ‌ها</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        function Notification({ 
            type, 
            message, 
            title = null, 
            showIcon = true, 
            dismissible = false, 
            autoHide = false 
        }) {
            // تعریف استایل‌ها و آیکون‌های اعلان بر اساس نوع
            const notificationStyles = {
                success: {
                    backgroundColor: '#d4edda',
                    borderColor: '#c3e6cb',
                    color: '#155724',
                    icon: '✓'
                },
                warning: {
                    backgroundColor: '#fff3cd',
                    borderColor: '#ffeaa7',
                    color: '#856404',
                    icon: '⚠'
                },
                error: {
                    backgroundColor: '#f8d7da',
                    borderColor: '#f5c6cb',
                    color: '#721c24',
                    icon: '✗'
                },
                info: {
                    backgroundColor: '#d1ecf1',
                    borderColor: '#bee5eb',
                    color: '#0c5460',
                    icon: 'ℹ'
                }
            };

            // گرفتن استایل اعلان فعلی
            const currentStyle = notificationStyles[type] || notificationStyles.info;

            // استایل پایه اعلان
            const baseStyle = {
                border: `1px solid ${currentStyle.borderColor}`,
                borderRadius: '4px',
                padding: '12px 16px',
                margin: '8px 0',
                backgroundColor: currentStyle.backgroundColor,
                color: currentStyle.color,
                position: 'relative',
                borderLeft: autoHide ? `4px solid ${currentStyle.borderColor}` : undefined
            };

            return (
                <div style={baseStyle}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                            {/* رندر شرطی آیکون */}
                            {showIcon && (
                                <span style={{ marginRight: '8px', fontSize: '16px' }}>
                                    {currentStyle.icon}
                                </span>
                            )}
                            
                            <div>
                                {/* رندر شرطی عنوان */}
                                {title && (
                                    <div style={{ 
                                        fontWeight: 'bold', 
                                        marginBottom: '4px',
                                        fontSize: '14px'
                                    }}>
                                        {/* عنوان را اینجا رندر کنید */}
                                    </div>
                                )}
                                
                                <div style={{ fontSize: '14px' }}>
                                    {/* پیام را اینجا رندر کنید */}
                                </div>
                            </div>
                        </div>

                        {/* رندر شرطی دکمه بستن */}
                        {dismissible && (
                            <button 
                                style={{ 
                                    background: 'none', 
                                    border: 'none', 
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    color: currentStyle.color,
                                    padding: '0',
                                    marginLeft: '8px'
                                }}
                                onClick={() => alert('اعلان بسته شد!')}
                            >
                                ×
                            </button>
                        )}
                    </div>
                    
                    {/* نمایش شرطی نشانگر auto-hide */}
                    {autoHide && (
                        <div style={{ 
                            fontSize: '11px', 
                            marginTop: '4px', 
                            opacity: 0.7,
                            fontStyle: 'italic'
                        }}>
                            {/* پیام auto-hide را نمایش دهید */}
                        </div>
                    )}
                </div>
            );
        }

        function App() {
            const notifications = [
                {
                    type: "success",
                    title: "موفقیت!",
                    message: "تغییرات شما با موفقیت ذخیره شد.",
                    dismissible: true
                },
                {
                    type: "warning",
                    message: "لطفاً اتصال اینترنت خود را بررسی کنید.",
                    showIcon: true,
                    autoHide: true
                },
                {
                    type: "error",
                    title: "خطا",
                    message: "بارگذاری فایل با شکست مواجه شد. لطفاً دوباره تلاش کنید.",
                    dismissible: true,
                    showIcon: true
                },
                {
                    type: "info",
                    message: "ویژگی‌های جدید در آخرین به‌روزرسانی موجود است.",
                    autoHide: true
                },
                {
                    type: "success",
                    message: "عملیات بدون هیچ عنوانی تکمیل شد.",
                    showIcon: false,
                    dismissible: true
                }
            ];

            return (
                <div style={{ 
                    padding: '20px', 
                    maxWidth: '600px', 
                    margin: '0 auto',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    <h1>سیستم اعلان</h1>
                    <p>انواع مختلف اعلان با رندر شرطی:</p>
                    
                    {/* رندر همه اعلان‌ها */}
                    {notifications.map((notification, index) => (
                        <Notification 
                            key={index}
                            {...notification}
                        />
                    ))}
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<App />);
    </script>
</body>
</html>
```

## وظایف شما
1. رندر شرطی عنوان را تکمیل کنید
2. پیام را به درستی رندر کنید
3. متن نشانگر auto-hide را اضافه کنید
4. با ترکیب‌های مختلف پراپ تست کنید

## اهداف یادگیری
- استفاده از پراپ‌ها برای رندر شرطی با عملگر `&&`
- استفاده از عملگر سه‌گانه برای مقادیر شرطی
- تنظیم مقادیر پیش‌فرض پراپ
- ایجاد کامپوننت‌های قابل استفاده مجدد با رفتار انعطاف‌پذیر

## چالش
یک پراپ `size` با مقادیر "small"، "medium"، "large" اضافه کنید که padding و اندازه فونت اعلان را تغییر دهد!
