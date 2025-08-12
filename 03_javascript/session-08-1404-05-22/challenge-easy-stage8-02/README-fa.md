# 🎯 چالش آسان مرحله ۸-۰۲: سبد خرید مدرن (مرحله ۸ - جاوااسکریپت مدرن)

## 📝 توضیحات

یک سیستم سبد خرید با استفاده از ویژگی‌های ES6+ مانند متدهای آرایه، destructuring، عملگر spread و optional chaining بسازید.

## 🎯 اهداف

- استفاده از تکنیک‌های مدرن آرایه
- تمرین destructuring با ساختارهای داده پیچیده
- پیاده‌سازی optional chaining برای دسترسی ایمن
- استفاده از spread برای مدیریت وضعیت
- به‌کارگیری الگوهای مدرن جاوااسکریپت

## 📋 الزامات

۱. ساختار داده محصول و سبد:

   ```javascript
   const products = [
     {
       id: 1,
       name: 'لپ‌تاپ',
       price: ۹۹۹,
       category: 'الکترونیک',
       specs: { brand: 'Dell', ram: '16GB', storage: '512GB SSD' }
     },
     {
       id: 2,
       name: 'تی‌شرت',
       price: ۲۵,
       category: 'پوشاک',
       specs: { size: 'M', color: 'آبی', material: 'پنبه' }
     }
   ];
   ```

۲. عملکرد سبد با سینتکس مدرن:
   - افزودن آیتم با تعداد و انتخاب ویژگی
   - به‌روزرسانی تعداد با spread
   - حذف آیتم با حفظ immutability
   - محاسبه مجموع با متدهای آرایه
   - اعمال تخفیف و مالیات

۳. الزامات جاوااسکریپت مدرن:
   - استفاده مناسب از `const` و `let`
   - destructuring پارامترها
   - استفاده از optional chaining برای پراپرتی‌های تو در تو
   - پارامتر پیش‌فرض
   - template literal برای فرمت‌دهی

## 💡 توابع نمونه

```javascript
function addToCart(cart, { id, quantity = 1, variant = {} }) {
  const existingItemIndex = cart.findIndex(item => 
    item.id === id && JSON.stringify(item.variant) === JSON.stringify(variant)
  );
  if (existingItemIndex !== -1) {
    return cart.map((item, index) => 
      index === existingItemIndex 
        ? { ...item, quantity: item.quantity + quantity }
        : item
    );
  }
  return [...cart, { id, quantity, variant }];
}

function calculateCartSummary(cart, products, { taxRate = 0.1, discountCode } = {}) {
  const cartWithDetails = cart.map(cartItem => {
    const product = products.find(p => p.id === cartItem.id);
    const { name, price, specs = {} } = product || {};
    return {
      ...cartItem,
      name,
      price,
      subtotal: (price || 0) * cartItem.quantity,
      specs
    };
  });
  const subtotal = cartWithDetails.reduce((sum, item) => sum + item.subtotal, 0);
  const discount = calculateDiscount(subtotal, discountCode);
  const tax = (subtotal - discount) * taxRate;
  return {
    items: cartWithDetails,
    subtotal,
    discount,
    tax,
    total: subtotal - discount + tax
  };
}

function mergeCartItems(...carts) {
  const allItems = carts.flat();
  const mergedItems = [];
  for (const item of allItems) {
    const existingIndex = mergedItems.findIndex(existing => 
      existing.id === item.id && 
      JSON.stringify(existing.variant) === JSON.stringify(item.variant)
    );
    if (existingIndex !== -1) {
      mergedItems[existingIndex] = {
        ...mergedItems[existingIndex],
        quantity: mergedItems[existingIndex].quantity + item.quantity
      };
    } else {
      mergedItems.push({ ...item });
    }
  }
  return mergedItems;
}
```

## 🚀 ویژگی‌های مورد انتظار

۱. **عملیات سبد**:
   - افزودن محصول با ویژگی (سایز، رنگ و ...)
   - به‌روزرسانی تعداد به صورت immutably
   - حذف آیتم ایمن
   - پاک‌کردن کل سبد

۲. **محاسبات**:
   - محاسبه مجموع هر آیتم
   - اعمال تخفیف درصدی
   - محاسبه مالیات
   - فرمت‌دهی قیمت و تعداد

۳. **نمایش داده**:
   - نمایش خلاصه سبد با template literal
   - نمایش جزئیات محصول با optional chaining
   - فرمت‌دهی قیمت و تعداد

## ✅ سینتکس مدرن مورد انتظار

- destructuring: `const { name, price } = product`
- destructuring آرایه: `const [first, ...rest] = items`
- spread در آرایه: `[...cart, newItem]`
- spread در آبجکت: `{ ...item, quantity: newQty }`
- optional chaining: `product?.specs?.brand`
- پارامتر پیش‌فرض: `function calc(rate = 0.1)`
- template literal: `` `جمع کل: $${total.toFixed(2)}` ``
- short-circuit: `price || 0`

## 🌟 نکته تکمیلی

- ذخیره سبد در localStorage
- جستجوی محصول با destructuring
- استفاده از Map برای مدیریت بهتر آیتم‌ها
- گروه‌بندی آیتم‌ها بر اساس دسته‌بندی
- افزودن لیست علاقه‌مندی با سینتکس مدرن
