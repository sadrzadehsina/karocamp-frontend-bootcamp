# تمرین ۰۵: کامپوننت‌های تو در تو و پراپ دریلیگ

## هدف
درک نحوه جریان پراپ‌ها در کامپوننت‌های تو در تو و تمرین "پراپ دریلیگ".

## وظیفه
یک سیستم وبلاگ با کامپوننت‌های تو در تو بسازید که داده‌ها از والد به فرزندهای عمیق منتقل شوند.

## الزامات
1. ساختار کامپوننت‌ها:
   - `BlogApp` (ریشه)
   - `BlogList` (دریافت آرایه پست‌ها)
   - `BlogPost` (دریافت داده هر پست)
   - `PostHeader` (دریافت عنوان، نویسنده، تاریخ)
   - `PostContent` (دریافت محتوا و تگ‌ها)
   - `PostFooter` (دریافت تعداد لایک و کامنت)

2. پراپ دریلیگ را نمایش دهید که داده وبلاگ از چند سطح عبور کند
3. هر کامپوننت فقط پراپ‌هایی را دریافت کند که نیاز دارد

## ساختار کامپوننت‌ها
```
BlogApp
  └── BlogList
      └── BlogPost (چندتا)
          ├── PostHeader
          ├── PostContent  
          └── PostFooter
```

## کد شروع
```html
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تمرین ۰۵: کامپوننت‌های تو در تو و پراپ دریلیگ</title>
    <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app"></div>

    <script type="text/babel">
        // داده نمونه وبلاگ
        const blogPosts = [
            {
                id: 1,
                title: "شروع کار با ری‌اکت",
                author: "Jane Doe",
                date: "۲۵ دی ۱۴۰۲",
                content: "ری‌اکت یک کتابخانه قدرتمند برای ساخت رابط‌های کاربری است. در این پست، مبانی کامپوننت‌های ری‌اکت و نحوه همکاری آن‌ها برای ایجاد اپلیکیشن‌های وب پویا را بررسی خواهیم کرد.",
                tags: ["React", "JavaScript", "Frontend"],
                likes: 42,
                comments: 8
            },
            {
                id: 2,
                title: "درک پراپ‌ها در ری‌اکت",
                author: "John Smith",
                date: "۲۸ دی ۱۴۰۲",
                content: "پراپ‌ها روشی هستند که ما از آن‌ها برای انتقال داده بین کامپوننت‌های ری‌اکت استفاده می‌کنیم. آن‌ها به ما امکان ایجاد کامپوننت‌هایی قابل استفاده مجدد که می‌توانند بر اساس داده‌هایی که به آن‌ها می‌دهیم، اطلاعات مختلفی نمایش دهند.",
                tags: ["React", "Props", "Components"],
                likes: 38,
                comments: 12
            },
            {
                id: 3,
                title: "استایل‌دهی CSS در اپلیکیشن‌های ری‌اکت",
                author: "Alice Johnson",
                date: "۱ بهمن ۱۴۰۲",
                content: "روش‌های مختلفی برای استایل‌دهی کامپوننت‌های ری‌اکت وجود دارد. از استایل‌های خطی تا CSS modules، هر روش مزایا و موارد استفاده خاص خود را دارد. بیایید محبوب‌ترین روش‌ها را بررسی کنیم.",
                tags: ["React", "CSS", "Styling"],
                likes: 29,
                comments: 5
            }
        ];

        // کامپوننت تو در تو ۴: PostHeader
        function PostHeader({ title, author, date }) {
            return (
                <div style={{
                    borderBottom: '1px solid #eee',
                    paddingBottom: '10px',
                    marginBottom: '15px'
                }}>
                    <h2 style={{ 
                        margin: '0 0 8px 0', 
                        color: '#333',
                        fontSize: '24px'
                    }}>
                        {/* عنوان را اینجا رندر کنید */}
                    </h2>
                    <div style={{ 
                        color: '#666', 
                        fontSize: '14px',
                        display: 'flex',
                        gap: '15px'
                    }}>
                        <span>نویسنده: {/* نویسنده را اینجا رندر کنید */}</span>
                        <span>{/* تاریخ را اینجا رندر کنید */}</span>
                    </div>
                </div>
            );
        }

        // کامپوننت تو در تو ۵: PostContent
        function PostContent({ content, tags }) {
            return (
                <div style={{ marginBottom: '15px' }}>
                    <p style={{ 
                        lineHeight: '1.6', 
                        color: '#444',
                        marginBottom: '15px'
                    }}>
                        {/* محتوا را اینجا رندر کنید */}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {/* روی تگ‌ها map بزنید و هر کدام را رندر کنید */}
                        {tags.map(tag => (
                            <span 
                                key={tag}
                                style={{
                                    backgroundColor: '#e3f2fd',
                                    color: '#1976d2',
                                    padding: '4px 8px',
                                    borderRadius: '12px',
                                    fontSize: '12px'
                                }}
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            );
        }

        // کامپوننت تو در تو ۶: PostFooter
        function PostFooter({ likes, comments }) {
            return (
                <div style={{
                    borderTop: '1px solid #eee',
                    paddingTop: '10px',
                    display: 'flex',
                    gap: '20px',
                    color: '#666',
                    fontSize: '14px'
                }}>
                    <span>👍 {/* لایک‌ها را اینجا رندر کنید */} لایک</span>
                    <span>💬 {/* کامنت‌ها را اینجا رندر کنید */} نظر</span>
                </div>
            );
        }

        // کامپوننت تو در تو ۳: BlogPost
        function BlogPost({ post }) {
            return (
                <article style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '20px',
                    margin: '20px 0',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}>
                    {/* پراپ‌های مناسب را به PostHeader ارسال کنید */}
                    <PostHeader 
                        // پراپ‌ها را اینجا اضافه کنید
                    />
                    
                    {/* پراپ‌های مناسب را به PostContent ارسال کنید */}
                    <PostContent 
                        // پراپ‌ها را اینجا اضافه کنید
                    />
                    
                    {/* پراپ‌های مناسب را به PostFooter ارسال کنید */}
                    <PostFooter 
                        // پراپ‌ها را اینجا اضافه کنید
                    />
                </article>
            );
        }

        // کامپوننت تو در تو ۲: BlogList
        function BlogList({ posts }) {
            return (
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {/* روی پست‌ها map بزنید و کامپوننت‌های BlogPost را رندر کنید */}
                    {posts.map(post => (
                        <BlogPost 
                            key={post.id}
                            // داده پست را اینجا ارسال کنید
                        />
                    ))}
                </div>
            );
        }

        // کامپوننت ریشه ۱: BlogApp
        function BlogApp() {
            return (
                <div style={{ 
                    padding: '20px',
                    backgroundColor: '#f5f5f5',
                    minHeight: '100vh',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    <header style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h1 style={{ 
                            color: '#333', 
                            fontSize: '36px',
                            margin: '0 0 10px 0'
                        }}>
                            وبلاگ تکنولوژی من
                        </h1>
                        <p style={{ color: '#666', fontSize: '18px' }}>
                            آخرین پست‌ها درباره توسعه وب
                        </p>
                    </header>
                    
                    {/* پست‌های وبلاگ را به BlogList ارسال کنید */}
                    <BlogList 
                        // داده پست‌ها را اینجا ارسال کنید
                    />
                </div>
            );
        }

        const root = ReactDOM.createRoot(document.getElementById('app'));
        root.render(<BlogApp />);
    </script>
</body>
</html>
```

## وظایف شما
1. ارسال پراپ در هر کامپوننت را تکمیل کنید
2. داده‌ها را در PostHeader، PostContent، و PostFooter رندر کنید
3. مطمئن شوید که داده‌ها به درستی از همه سطوح کامپوننت عبور می‌کنند
4. تست کنید که همه پست‌های وبلاگ به درستی نمایش داده می‌شوند

## اهداف یادگیری
- درک ترکیب کامپوننت
- تمرین پراپ دریلیگ (ارسال پراپ از چند سطح)
- ایجاد ساختار واضح کامپوننت
- جدا کردن نگرانی‌ها بین کامپوننت‌ها

## سوالات بحث
1. مزایای تقسیم کامپوننت‌ها به قطعات کوچک‌تر چیست؟
2. مشکلات احتمالی پراپ دریلیگ چیست؟
3. اگر بخواهید سطوح تو در تو بیشتری اضافه کنید، این ساختار را چگونه تغییر می‌دهید؟

## چالش
یک کامپوننت `BlogStats` اضافه کنید که کل پست‌ها، کل لایک‌ها، و کل نظرات را نمایش دهد. این باید در کنار `BlogList` در کامپوننت `BlogApp` قرار گیرد.
