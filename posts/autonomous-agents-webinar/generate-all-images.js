import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateVariation(browser, variationName, imagePath) {
  console.log(`  📸 Generating ${variationName}...`);

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
  // Try both image references
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-3.png') center/cover;",
    `background: url('${base64Image}') center/cover;`
  );
  htmlContent = htmlContent.replace(
    "background: url('../../public/images/team/luan-moreno-4.png') center/cover;",
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

async function generateAllImages() {
  console.log('🚀 Starting batch generation for Autonomous Agents webinar images...\n');
  console.log('🎯 Theme: Purple/Violet - Autonomous Code Agents');
  console.log('📅 Event: 22 de Outubro às 20:00 BRT\n');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    // Define which image to use for each variation
    const variations = [
      {
        name: 'variation-1-comparison',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-4.png'),
        description: '4 Agents VS Battle - Comparison Grid'
      },
      {
        name: 'variation-2-productivity',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-3.png'),
        description: '10X Productivity - Big Numbers Focus'
      },
      {
        name: 'variation-3-decision-matrix',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-4.png'),
        description: 'Decision Matrix - When to Use Each'
      },
      {
        name: 'variation-4-problem-solution',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-3.png'),
        description: 'Problem/Solution - Split Screen'
      },
      {
        name: 'variation-5-journey',
        image: path.join(__dirname, '../../public/images/team/luan-moreno-4.png'),
        description: 'Learning Journey - Step by Step'
      }
    ];

    const results = [];

    console.log('📸 Generating 5 variations:\n');

    for (const variant of variations) {
      console.log(`Variation ${variations.indexOf(variant) + 1}: ${variant.description}`);
      const outputPath = await generateVariation(browser, variant.name, variant.image);
      results.push(outputPath);
    }

    console.log('\n✨ All images generated successfully!');
    console.log('\n📁 Files created:');
    results.forEach((path, index) => {
      console.log(`   ${index + 1}. ${path.split('/').pop()}`);
    });

    console.log('\n🎯 Variation themes:');
    console.log('   1. Comparison Grid - 4 agents side by side');
    console.log('   2. 10X Productivity - Performance metrics focus');
    console.log('   3. Decision Matrix - Framework for choosing');
    console.log('   4. Problem/Solution - Before and after approach');
    console.log('   5. Learning Journey - Progressive mastery path');

    console.log('\n🎨 Visual details:');
    console.log('   • Purple/Violet color scheme (#8b5cf6, #a855f7)');
    console.log('   • LinkedIn optimized (1200x627px)');
    console.log('   • High resolution (2x device scale)');
    console.log('   • Alternating instructor photos for variety');

    console.log('\n📝 Ready for LinkedIn A/B testing!');

  } catch (error) {
    console.error('❌ Error generating images:', error);
  } finally {
    await browser.close();
  }
}

// Run the generator
generateAllImages();