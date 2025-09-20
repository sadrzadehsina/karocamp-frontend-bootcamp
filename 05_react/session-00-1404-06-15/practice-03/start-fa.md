# تمرین ۰۳: استفاده از عملگر اسپرد با پراپ‌ها

## هدف
تسلط بر استفاده از عملگر اسپرد (`...`) برای ارسال پراپ‌ها به صورت بهینه.

## وظیفه
یک سیستم مدیریت کاربران بسازید که روش‌های مختلف ارسال پراپ با عملگر اسپرد را نمایش دهد.

## الزامات
1. یک کامپوننت `UserProfile` بسازید که پراپ‌های زیر را دریافت کند:
   - `id` (عدد)
   - `name` (رشته)
   - `email` (رشته)
   - `avatar` (رشته، آدرس عکس)
   - `role` (رشته)
   - `isActive` (بولین)

2. یک کامپوننت `UserList` بسازید که:
   - یک آرایه از آبجکت‌های کاربر دریافت کند
   - روی کاربران map بزند و کامپوننت `UserProfile` را رندر کند
   - با استفاده از عملگر اسپرد تمام ویژگی‌های کاربر را به عنوان پراپ ارسال کند

3. سه روش مختلف ارسال پراپ را نمایش دهید:
   - ارسال پراپ به صورت تکی: `<UserProfile name={user.name} email={user.email} .../>`
   - ارسال آبجکت: `<UserProfile user={user} />`
   - استفاده از اسپرد: `<UserProfile {...user} />`

## کد شروع
```html
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تمرین ۰۳: استفاده از اسپرد با پراپ‌ها</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // داده نمونه کاربران
        const users = [
            {
                id: 1,
                name: "Alice Johnson",
                email: "alice@example.com",
                avatar: "https://via.placeholder.com/100x100?text=A",
                role: "Admin",
                isActive: true
            },
            {
                id: 2,
                name: "Bob Smith",
                email: "bob@example.com",
                avatar: "https://via.placeholder.com/100x100?text=B",
                role: "User",
                isActive: false
            },
            {
                id: 3,
                name: "Carol Williams",
                email: "carol@example.com",
                avatar: "https://via.placeholder.com/100x100?text=C",
                role: "Moderator",
                isActive: true
            }
        ];

        // روش ۱: پراپ‌های تکی
        function UserProfileMethod1({ name, email, avatar, role, isActive }) {
            return (
                <div style={{
                    border: '2px solid #007bff',
                    borderRadius: '10px',
                    padding: '15px',
                    margin: '10px',
                    backgroundColor: isActive ? '#f0f8ff' : '#f5f5f5'
                }}>
                    <h3>روش ۱: پراپ‌های تکی</h3>
                    {/* نمایش پروفایل کاربر را اینجا پیاده‌سازی کنید */}
                </div>
            );
        }

        // روش ۲: پراپ آبجکت
        function UserProfileMethod2({ user }) {
            return (
                <div style={{
                    border: '2px solid #28a745',
                    borderRadius: '10px',
                    padding: '15px',
                    margin: '10px',
                    backgroundColor: user.isActive ? '#f0fff0' : '#f5f5f5'
                }}>
                    <h3>روش ۲: پراپ آبجکت</h3>
                    {/* نمایش پروفایل کاربر با استفاده از user.property */}
                </div>
            );
        }

        // روش ۳: عملگر اسپرد
        function UserProfileMethod3({ id, name, email, avatar, role, isActive }) {
            return (
                <div style={{
                    border: '2px solid #dc3545',
                    borderRadius: '10px',
                    padding: '15px',
                    margin: '10px',
                    backgroundColor: isActive ? '#fff0f0' : '#f5f5f5'
                }}>
                    <h3>روش ۳: عملگر اسپرد</h3>
                    {/* نمایش پروفایل کاربر را پیاده‌سازی کنید */}
                </div>
            );
        }

        function App() {
            return (
                <div style={{ padding: '20px' }}>
                    <h1>مدیریت کاربران - روش‌های ارسال پراپ</h1>
                    
                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/* روش ۱: map و ارسال پراپ‌های تکی */}
                        {users.map(user => (
                            <UserProfileMethod1 
                                key={`method1-${user.id}`}
                                // پراپ‌های تکی را اینجا ارسال کنید
                            />
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/* روش ۲: map و ارسال کل آبجکت کاربر */}
                        {users.map(user => (
                            <UserProfileMethod2 
                                key={`method2-${user.id}`}
                                // آبجکت کاربر را اینجا ارسال کنید
                            />
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {/* روش ۳: map و استفاده از عملگر اسپرد */}
                        {users.map(user => (
                            <UserProfileMethod3 
                                key={`method3-${user.id}`}
                                // از عملگر اسپرد اینجا استفاده کنید
                            />
                        ))}
                    </div>
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
- درک روش‌های مختلف ارسال پراپ
- تسلط بر سینتکس عملگر اسپرد (`...`)
- مقایسه مزایا و معایب هر روش
- کار با آرایه‌هایی از آبجکت‌ها

## نکات بحث
پس از تکمیل این تمرین، درباره موارد زیر فکر کنید:
1. کدام روش خوانایی بیشتری دارد؟
2. کدام روش قابلیت نگهداری بیشتری دارد؟
3. چه زمانی از هر روش استفاده خواهید کرد؟
