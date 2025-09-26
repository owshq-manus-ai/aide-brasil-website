import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateVariation(browser, variationNumber, imagePath) {
  console.log(`  📸 Generating variation ${variationNumber}...`);

  const page = await browser.newPage();

  // Set viewport to LinkedIn optimal size
  await page.setViewport({
    width: 1200,
    height: 627,
    deviceScaleFactor: 2 // Higher quality
  });

  // Read the HTML file for this variation
  const htmlPath = path.join(__dirname, `linkedin-variation-${variationNumber}.html`);
  let htmlContent = fs.readFileSync(htmlPath, 'utf8');

  // Read and encode the instructor image
  const imageBuffer = fs.readFileSync(imagePath);
  const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

  // Replace the background URL with the base64 encoded image
  // For variation 1 and 3, use luan-moreno-3.png
  // For variation 2, use luan-moreno-4.png
  if (variationNumber === 1 || variationNumber === 3) {
    htmlContent = htmlContent.replace(
      "background: url('../../public/images/team/luan-moreno-3.png') center/cover;",
      `background: url('${base64Image}') center/cover;`
    );
  } else {
    htmlContent = htmlContent.replace(
      "background: url('../../public/images/team/luan-moreno-4.png') center/cover;",
      `background: url('${base64Image}') center/cover;`
    );
  }

  // Set content
  await page.setContent(htmlContent, {
    waitUntil: 'networkidle0'
  });

  // Wait for animations to settle
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Generate the PNG
  const outputPath = path.join(__dirname, `variation-${variationNumber}-claude-code.png`);
  await page.screenshot({
    path: outputPath,
    type: 'png',
    fullPage: false
  });

  await page.close();

  console.log(`  ✅ Variation ${variationNumber} saved as: variation-${variationNumber}-claude-code.png`);

  return outputPath;
}

async function generateAllVariations() {
  console.log('🚀 Starting batch image generation for 3 variations...\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // Define which image to use for each variation
    const variations = [
      { number: 1, image: path.join(__dirname, '../../public/images/team/luan-moreno-3.png') },
      { number: 2, image: path.join(__dirname, '../../public/images/team/luan-moreno-4.png') },
      { number: 3, image: path.join(__dirname, '../../public/images/team/luan-moreno-3.png') }
    ];

    const results = [];

    for (const variant of variations) {
      const outputPath = await generateVariation(browser, variant.number, variant.image);
      results.push(outputPath);
    }

    console.log('\n✨ All variations generated successfully!');
    console.log('📁 Files created:');
    results.forEach((path, index) => {
      console.log(`   ${index + 1}. ${path.split('/').pop()}`);
    });
    console.log('\n🎯 Variation themes:');
    console.log('   1. 300% Productivity Focus - Big numbers, speed lines');
    console.log('   2. Problem/Solution Split - Before/After contrast');
    console.log('   3. Transformation Journey - Step-by-step path');
    console.log('\n📱 All images are LinkedIn optimized (1200x627px)');

  } catch (error) {
    console.error('❌ Error generating images:', error);
  } finally {
    await browser.close();
  }
}

// Run the generator
generateAllVariations();