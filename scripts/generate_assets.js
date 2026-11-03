const fs = require('fs');
const path = require('path');

const imgDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

function makeAvatar(initials, bg1, bg2, filename) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="200" height="200">
    <defs>
      <linearGradient id="g_${initials}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bg1}"/>
        <stop offset="100%" stop-color="${bg2}"/>
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="95" fill="url(#g_${initials})" stroke="#d4af37" stroke-width="4"/>
    <text x="100" y="125" text-anchor="middle" font-family="'Cairo', sans-serif" font-weight="900" font-size="55" fill="#ffffff">${initials}</text>
  </svg>`;
  fs.writeFileSync(path.join(imgDir, filename), svg, 'utf-8');
}

function makeThumb(title, creator, tag, filename) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 450" width="800" height="450">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#181824"/>
        <stop offset="100%" stop-color="#0a0a0e"/>
      </linearGradient>
      <linearGradient id="goldLinear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFF099"/>
        <stop offset="100%" stop-color="#D4AF37"/>
      </linearGradient>
    </defs>
    <rect width="800" height="450" fill="url(#bgGrad)" stroke="#d4af37" stroke-width="3"/>
    <circle cx="400" cy="190" r="50" fill="rgba(212, 175, 55, 0.2)" stroke="#d4af37" stroke-width="3"/>
    <polygon points="388,168 424,190 388,212" fill="#d4af37"/>
    <rect x="40" y="35" width="160" height="36" rx="8" fill="#d4af37"/>
    <text x="120" y="60" text-anchor="middle" font-family="'Cairo', sans-serif" font-weight="800" font-size="15" fill="#0a0a0f">${tag}</text>
    <text x="400" y="315" text-anchor="middle" font-family="'Cairo', sans-serif" font-weight="800" font-size="28" fill="#ffffff">${title}</text>
    <text x="400" y="365" text-anchor="middle" font-family="'Cairo', sans-serif" font-weight="600" font-size="20" fill="#d4af37">مع النجم: ${creator}</text>
  </svg>`;
  fs.writeFileSync(path.join(imgDir, filename), svg, 'utf-8');
}

makeAvatar('3AF', '#d4af37', '#1a1a24', 'tiktok-avatar.svg');
makeAvatar('M', '#2563eb', '#1e293b', 'avatar-1.svg');
makeAvatar('O', '#d97706', '#1e293b', 'avatar-2.svg');
makeAvatar('F', '#059669', '#1e293b', 'avatar-3.svg');

makeThumb('وساطة حسابات ببجي موبايل', 'الكابتن ماجد', '3AFRET VIP', 'video-thumb-1.svg');
makeThumb('شحن فوري لجواهر فري فاير', 'عمر القيصر', 'شحن رسمي', 'video-thumb-2.svg');
makeThumb('توثيق وضمان فيسبوك الرسمي', 'الأسطورة فوكس', 'ضمان معتمد', 'video-thumb-3.svg');

console.log('All SVGs generated successfully in public/images');
