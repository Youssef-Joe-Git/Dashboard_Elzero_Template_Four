# نشر مشروع Angular على GitHub Pages

## الخطوات

### 1. بناء المشروع مع تحديد base-href

```sh
ng build --base-href "https://youssef-joe-git.github.io/Dashboard_Elzero_Template_Four/"
```

> إذا كان الناتج في مجلد مثل: `dist/Dashboard/browser`، استخدم هذا المسار في الخطوة التالية.

### 2. تثبيت أداة النشر (مرة واحدة فقط)

```sh
npm install -g angular-cli-ghpages
```

### 3. نشر ملفات البناء على gh-pages

```sh
npx angular-cli-ghpages --dir=dist/Dashboard/browser
```

### 4. زيارة الموقع

بعد دقائق، سيكون موقعك متاحاً على:

```
https://youssef-joe-git.github.io/Dashboard_Elzero_Template_Four/
```

---

**ملاحظات:**

- إذا غيرت اسم المشروع أو إعدادات البناء، تأكد من تحديث المسار في أمر النشر.
- إذا واجهت مشاكل في CSS budget، يمكنك زيادة الحد في ملف `angular.json` كما تم شرحه أعلاه.
