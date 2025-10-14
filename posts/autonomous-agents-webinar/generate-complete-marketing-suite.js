import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// LinkedIn variations generator
async function generateLinkedInVariation(browser, variationName, imagePath) {
  console.log(`  📸 Generating LinkedIn: ${variationName}...`);

  const page = await browser.newPage();

  // Set viewport to LinkedIn optimal size
  await page.setViewport({
    width: 1200,
    height: 627,
    deviceScaleFactor: 2 // Higher quality
  });

  // Read the HTML file for this variation
  const htmlPath = path.join(__dirname, `${variationName}.html`);
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Read and encode the instructor image
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  // Replace the background URL with the base64 encoded image
  // Try all image references (old and new photos)
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-3.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-4.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-5.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-6.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-7.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );

  // Set content
  await page.setContent(htmlContent, {
    waitUntil: 'networkidle0'
  });

  // Wait for animations to settle
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Generate the PNG
  const outputName = variationName.replace('variation-', 'agents-v');
  const outputPath = path.join(__dirname, `${outputName}.png`);
  await page.screenshot({
    path: outputPath,
    type: 'png',
    fullPage: false
  });

  await page.close();

  console.log(`  ✅ Saved as: ${outputName}.png`);

  return outputPath;
}

// Instagram variations generator
async function generateInstagramVariation(browser, variationNumber, imagePath) {
  console.log(`  📸 Generating Instagram: variation ${variationNumber}...`);

  const page = await browser.newPage();

  // Set viewport to Instagram square size
  await page.setViewport({
    width: 1080,
    height: 1080,
    deviceScaleFactor: 2 // Higher quality for retina displays
  });

  // Read the HTML file for this variation
  const htmlPath = path.join(__dirname, `instagram-variation-${variationNumber}.html`);
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Read and encode the instructor image
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  // Replace the background URL with the base64 encoded image
  // Replace ALL possible photo references
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-3.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-4.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-5.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-6.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-7.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );

  // Set content
  await page.setContent(htmlContent, {
    waitUntil: 'networkidle0'
  });

  // Wait for animations to settle
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Generate the PNG
  const outputPath = path.join(__dirname, `instagram-variation-${variationNumber}-agents.png`);
  await page.screenshot({
    path: outputPath,
    type: 'png',
    fullPage: false
  });

  await page.close();

  console.log(`  ✅ Saved as: instagram-variation-${variationNumber}-agents.png`);

  return outputPath;
}

async function generateCompleteMarketingSuite() {
  console.log('╔═══════════════════════════════════════════════════════════════╗');
  console.log('║  🚀 AUTONOMOUS AGENTS WEBINAR - COMPLETE MARKETING SUITE  🚀  ║');
  console.log('╚═══════════════════════════════════════════════════════════════╝\n');

  console.log('🎨 Theme: Purple/Violet - Autonomous Code Agents');
  console.log('📅 Event: 22 de Outubro às 20:00 BRT');
  console.log('🎯 Platforms: LinkedIn (1200x627) + Instagram (1080x1080)\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const allResults = {
      linkedin: [],
      instagram: []
    };

    // ==================== LINKEDIN VARIATIONS ====================
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 GENERATING LINKEDIN IMAGES (1200x627px)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    const linkedinVariations = [
      {
        name: 'variation-1-comparison',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-5.png'),
        description: '4 Agents VS Battle - Comparison Grid'
      },
      {
        name: 'variation-2-productivity',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-6.png'),
        description: '10X Productivity - Big Numbers Focus'
      },
      {
        name: 'variation-3-decision-matrix',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-5.png'),
        description: 'Decision Matrix - When to Use Each'
      },
      {
        name: 'variation-4-problem-solution',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-6.png'),
        description: 'Problem/Solution - Split Screen'
      },
      {
        name: 'variation-5-journey',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-7.png'),
        description: 'Learning Journey - Step by Step'
      }
    ];

    for (const variant of linkedinVariations) {
      console.log(`📌 ${variant.description}`);
      const outputPath = await generateLinkedInVariation(browser, variant.name, variant.image);
      allResults.linkedin.push(outputPath);
      console.log('');
    }

    // ==================== INSTAGRAM VARIATIONS ====================
    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📱 GENERATING INSTAGRAM IMAGES (1080x1080px)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    const instagramVariations = [
      {
        number: 1,
        image: path.join(__dirname, '../../public/images/team/luan-moreno-5.png'),
        description: '10X Productivity Focus'
      },
      {
        number: 2,
        image: path.join(__dirname, '../../public/images/team/luan-moreno-6.png'),
        description: 'Problem/Solution Split'
      },
      {
        number: 3,
        image: path.join(__dirname, '../../public/images/team/luan-moreno-7.png'),
        description: '4 Agents Grid'
      }
    ];

    for (const variant of instagramVariations) {
      console.log(`📌 ${variant.description}`);
      const outputPath = await generateInstagramVariation(browser, variant.number, variant.image);
      allResults.instagram.push(outputPath);
      console.log('');
    }

    // ==================== SUMMARY ====================
    console.log('\n╔═══════════════════════════════════════════════════════════════╗');
    console.log('║                    ✨ GENERATION COMPLETE! ✨                  ║');
    console.log('╚═══════════════════════════════════════════════════════════════╝\n');

    console.log('📁 FILES CREATED:\n');

    console.log('🔹 LinkedIn Images (1200x627px):');
    allResults.linkedin.forEach((path, index) => {
      console.log(`   ${index + 1}. ${path.split('/').pop()}`);
    });

    console.log('\n🔹 Instagram Images (1080x1080px):');
    allResults.instagram.forEach((path, index) => {
      console.log(`   ${index + 1}. ${path.split('/').pop()}`);
    });

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 STATISTICS');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`✓ Total images generated: ${allResults.linkedin.length + allResults.instagram.length}`);
    console.log(`✓ LinkedIn variations: ${allResults.linkedin.length}`);
    console.log(`✓ Instagram variations: ${allResults.instagram.length}`);
    console.log('✓ Color scheme: Purple/Violet (#8b5cf6, #a855f7)');
    console.log('✓ High resolution: 2x device scale factor');
    console.log('✓ Format: PNG with transparency support');

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('🎯 MARKETING STRATEGY');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('LinkedIn Variations:');
    console.log('  • V1 (Comparison) - Best for tech leads evaluating options');
    console.log('  • V2 (10X Productivity) - Best for developers seeking efficiency');
    console.log('  • V3 (Decision Matrix) - Best for strategic decision makers');
    console.log('  • V4 (Problem/Solution) - Best for pain-point driven audience');
    console.log('  • V5 (Journey) - Best for learning-focused professionals');
    console.log('\nInstagram Variations:');
    console.log('  • V1 (10X Focus) - Bold stats for immediate impact');
    console.log('  • V2 (Split) - Visual before/after storytelling');
    console.log('  • V3 (Grid) - Comprehensive overview for feed posts');

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📈 RECOMMENDED A/B TESTING');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Week 1: Test V1 (Comparison) vs V2 (Productivity) on LinkedIn');
    console.log('Week 2: Use top performer + test V3 (Decision) on LinkedIn');
    console.log('Instagram: Rotate all 3 variations throughout campaign');

    console.log('\n✅ All marketing materials ready for deployment!\n');

  } catch (error) {
    console.error('❌ Error generating marketing suite:', error);
  } finally {
    await browser.close();
  }
}

// Run the complete generator
generateCompleteMarketingSuite();
