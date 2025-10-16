# Hazem Ashraf Portfolio with Firebase Admin System

## المميزات الجديدة

### 🔥 Firebase Integration
- **Firestore Database**: لتخزين المشاريع والحملات
- **Authentication**: نظام تسجيل دخول آمن للإدارة
- **Real-time Updates**: تحديث فوري للمحتوى

### 🎯 Multi-Page Structure
- **الصفحة الرئيسية** (`/`): عرض شامل للأعمال
- **UI/UX Designer** (`/ui-ux`): متخصص في تصميم واجهات المستخدم
- **Creative Media** (`/creative-media`): متخصص في الإعلام الإبداعي
- **Admin Dashboard** (`/admin`): لوحة تحكم كاملة
- **Admin Login** (`/admin/login`): صفحة تسجيل الدخول

### 🛠️ Admin Dashboard Features
- ✅ إضافة/تعديل/حذف المشاريع والحملات
- ✅ رفع الصور عبر الرابط المباشر
- ✅ تحكم في ظهور/إخفاء الأزرار
- ✅ ترتيب المشاريع والحملات
- ✅ تحكم في المحتوى المميز (Featured)
- ✅ إدارة النصوص والوصف
- ✅ إضافة أزرار مخصصة مع روابط

## إعداد Firebase

### 1. إنشاء مشروع Firebase
1. اذهب إلى [Firebase Console](https://console.firebase.google.com/)
2. أنشئ مشروع جديد
3. فعّل **Authentication** و **Firestore Database**

### 2. إعداد Authentication
```bash
# في Firebase Console -> Authentication -> Users
# أضف مستخدم جديد للإدارة
```

### 3. إعداد Firestore
```javascript
// في Firebase Console -> Firestore Database
// أنشئ Collections:
- projects
- campaigns
- users

// لكل مستخدم إداري في users collection:
{
  email: "admin@example.com",
  role: "admin",
  displayName: "Admin Name"
}
```

### 4. قواعد Firestore Security
```javascript
// في Firestore Rules:
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to projects and campaigns for everyone
    match /projects/{document} {
      allow read: if true;
      allow write: if request.auth != null && 
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    match /campaigns/{document} {
      allow read: if true;
      allow write: if request.auth != null && 
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## هيكل البيانات

### Project Document
```typescript
{
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  tags?: string[];
  demoUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  order?: number;
  showButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
```

### Campaign Document
```typescript
{
  id?: string;
  title: string;
  description: string;
  imageUrl: string;
  category?: string;
  tags?: string[];
  campaignUrl?: string;
  featured?: boolean;
  order?: number;
  showButton?: boolean;
  buttonText?: string;
  buttonUrl?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
```

## التشغيل

### Development
```bash
npm install
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## الوصول للوحة التحكم

1. **تسجيل الدخول**: `/admin/login`
2. **لوحة التحكم**: `/admin`

### بيانات الدخول التجريبية
قم بإنشاء مستخدم في Firebase Authentication وأضف وثيقة في users collection:
```javascript
{
  email: "your-email@example.com",
  role: "admin",
  displayName: "Your Name"
}
```

## المميزات المتقدمة

### 🎨 إدارة المحتوى
- إضافة مشاريع جديدة مع صور
- تحرير النصوص والأوصاف
- ترتيب العناصر بالأرقام
- تحكم في العرض (مميز أم لا)

### 🔗 إدارة الروابط
- أزرار مخصصة لكل مشروع
- روابط خارجية للمشاريع
- إخفاء/إظهار الأزرار حسب الحاجة

### 📱 Responsive Design
- تصميم متجاوب لجميع الأجهزة
- محسن للموبايل والتابلت
- تجربة مستخدم سلسة

### ⚡ Performance
- تحميل سريع للصور
- تحديث فوري للبيانات
- تحسين Firebase queries

## الملفات المهمة

```
├── firebase.ts              # إعداد Firebase
├── services/
│   ├── firebaseService.ts   # خدمات Firestore
│   └── authService.ts       # خدمات المصادقة
├── pages/
│   ├── HomePage.tsx         # الصفحة الرئيسية
│   ├── UIUXDesignerPage.tsx # صفحة UI/UX
│   ├── CreativeMediaPage.tsx# صفحة Creative Media
│   ├── AdminDashboard.tsx   # لوحة التحكم
│   └── AdminLogin.tsx       # تسجيل الدخول
├── components/
│   └── common.tsx           # المكونات المشتركة
└── types.ts                 # تعريف الأنواع
```

## الدعم والمساعدة

للحصول على المساعدة أو الإبلاغ عن مشاكل:
- تواصل مع المطور: سامح رضا
- WhatsApp: 01023160657
- Facebook: [SAME7.REDAA](https://www.facebook.com/SAME7.REDAA)
- Website: [doc-digital.online](https://www.doc-digital.online/)

---

**تم التصميم والتطوير بواسطة: سامح رضا**
*Order Your Website Now*