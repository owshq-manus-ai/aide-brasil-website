import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateVariation1() {
  console.log('🚀 Generating Variation 1 with overlap fix...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();

    // Set viewport to LinkedIn optimal size
    await page.setViewport({
      width: 1200,
      height: 627,
      deviceScaleFactor: 2 // Higher quality
    });

    // Read the HTML file
    const htmlPath = path.join(__dirname, 'linkedin-variation-1.html');
    let htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Read and encode the instructor image
    const imagePath = path.join(__dirname, '../../public/images/team/luan-moreno-3.png');
    const imageBuffer = fs.readFileSync(imagePath);
    const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

    // Replace the background URL with the base64 encoded image
    htmlContent = htmlContent.replace(
      "background: url('../../public/images/team/luan-moreno-3.png') center/cover;",
      `background: url('${base64Image}') center/cover;`
    );

    // Set content
    await page.setContent(htmlContent, {
      waitUntil: 'networkidle0'
    });

    // Wait for animations to settle
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate the PNG
    const outputPath = path.join(__dirname, 'variation-1-claude-code.png');
    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false
    });

    console.log('✅ Variation 1 regenerated successfully!');
    console.log(`📍 Location: ${outputPath}`);
    console.log('🔧 Fixed: Date/time element no longer overlaps with content');

  } catch (error) {
    console.error('❌ Error generating image:', error);
  } finally {
    await browser.close();
  }
}

// Run the generator
generateVariation1();