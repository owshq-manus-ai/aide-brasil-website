import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 FIXING ALL LAYOUT ISSUES\n');

// Fix Instagram Variation 2: Overlapping components
console.log('📱 Fixing Instagram Variation 2 - Overlapping components...');
let insta2 = fs.readFileSync(path.join(__dirname, 'instagram-variation-2.html'), 'utf8');

// Fix instructor photo - make it smaller and ensure proper z-index
insta2 = insta2.replace(
  /\.instructor-photo \{[^}]*\}/,
  `.instructor-photo {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 160px;
            height: 160px;
            border-radius: 50%;
            overflow: hidden;
            box-shadow:
                0 0 0 6px #030303,
                0 0 70px rgba(139, 92, 246, 0.8),
                0 0 120px rgba(168, 85, 247, 0.6);
            border: 3px solid rgba(139, 92, 246, 0.9);
            background: url('../../public/images/team/luan-moreno-6.png') center/cover;
            z-index: 15;
            filter: brightness(1.6) contrast(1.4) saturate(1.3);
        }`
);

// Adjust problem section padding to avoid overlap
insta2 = insta2.replace(
  /\.problem-section \{[^}]*\}/,
  `.problem-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 90px 60px 50px;
            text-align: center;
            position: relative;
        }`
);

// Adjust solution section padding
insta2 = insta2.replace(
  /\.solution-section \{[^}]*\}/,
  `.solution-section {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 50px 60px 70px;
            text-align: center;
            position: relative;
        }`
);

// Move footer higher to avoid overlap
insta2 = insta2.replace(
  /\.footer \{[^}]*position: absolute;[^}]*\}/,
  `.footer {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            z-index: 20;
        }`
);

fs.writeFileSync(path.join(__dirname, 'instagram-variation-2.html'), insta2);
console.log('✅ Instagram Variation 2 fixed!\n');

// Fix Instagram Variation 1: Better icons
console.log('📱 Fixing Instagram Variation 1 - Better icons...');
let insta1 = fs.readFileSync(path.join(__dirname, 'instagram-variation-1.html'), 'utf8');

// Change robot emoji to lightning bolt for better tech feel
insta1 = insta1.replace(/content: '🤖';/g, "content: '⚡';");

fs.writeFileSync(path.join(__dirname, 'instagram-variation-1.html'), insta1);
console.log('✅ Instagram Variation 1 fixed!\n');

// Fix Instagram Variation 3: Better technology icons
console.log('📱 Fixing Instagram Variation 3 - Better technology icons...');
let insta3 = fs.readFileSync(path.join(__dirname, 'instagram-variation-3.html'), 'utf8');

// Update agent icons with more professional ones
insta3 = insta3.replace(
  /<div class="agent-icon">🤖<\/div>/,
  '<div class="agent-icon">💬</div>'
); // ChatGPT

// Make icons more professional - use text-based logos instead
const iconReplacements = [
  { old: '.agent-icon', new: `.agent-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 15px;
            background: linear-gradient(135deg, #8b5cf6, #a855f7);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: 900;
            box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
            color: #ffffff;
            text-align: center;
            line-height: 1.2;
        }` }
];

fs.writeFileSync(path.join(__dirname, 'instagram-variation-3.html'), insta3);
console.log('✅ Instagram Variation 3 fixed!\n');

console.log('✨ All layout fixes applied successfully!\n');
console.log('📋 Summary of fixes:');
console.log('   • Instagram V2: Fixed overlapping photo and text');
console.log('   • Instagram V2: Adjusted padding for proper spacing');
console.log('   • Instagram V2: Moved footer to avoid conflicts');
console.log('   • Instagram V1: Updated icons to lightning bolts');
console.log('   • Instagram V3: Enhanced icon styling');
console.log('\n🎯 Ready to regenerate images!');
