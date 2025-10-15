import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Instructor photo path
const INSTRUCTOR_PHOTO_PATH = path.join(__dirname, '../../public/images/team/luan-moreno-4.png');

// Convert image to base64
function getBase64Image(imagePath) {
  try {
    if (fs.existsSync(imagePath)) {
      const imageBuffer = fs.readFileSync(imagePath);
      const base64Image = imageBuffer.toString('base64');
      const ext = path.extname(imagePath).toLowerCase();
      let mimeType = 'image/png';

      if (ext === '.jpg' || ext === '.jpeg') {
        mimeType = 'image/jpeg';
      } else if (ext === '.webp') {
        mimeType = 'image/webp';
      }

      return `data:${mimeType};base64,${base64Image}`;
    } else {
      console.warn(`⚠️  Photo not found at ${imagePath}, using gradient placeholder`);
      return null;
    }
  } catch (error) {
    console.warn(`⚠️  Error reading photo: ${error.message}`);
    return null;
  }
}

// LinkedIn Image Generation (1200x627px)
async function generateLinkedInImage(browser, htmlFile, outputFile) {
  const page = await browser.newPage();

  try {
    // Set viewport for LinkedIn specs
    await page.setViewport({
      width: 1200,
      height: 627,
      deviceScaleFactor: 2 // Retina quality
    });

    // Load HTML file
    const htmlPath = path.join(__dirname, htmlFile);
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Replace instructor photo placeholder with base64
    const base64Photo = getBase64Image(INSTRUCTOR_PHOTO_PATH);
    const modifiedHtml = base64Photo
      ? htmlContent.replace('INSTRUCTOR_PHOTO_PLACEHOLDER', base64Photo)
      : htmlContent.replace('src="INSTRUCTOR_PHOTO_PLACEHOLDER"',
          'style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)"');

    // Set content
    await page.setContent(modifiedHtml, { waitUntil: 'networkidle0' });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');

    // Additional wait for rendering
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take screenshot
    const outputPath = path.join(__dirname, outputFile);
    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false
    });

    console.log(`✅ Generated: ${outputFile}`);

    // Get file size
    const stats = fs.statSync(outputPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`   Size: ${fileSizeInMB} MB`);

  } catch (error) {
    console.error(`❌ Error generating ${outputFile}:`, error.message);
  } finally {
    await page.close();
  }
}

// Instagram Image Generation (1080x1080px)
async function generateInstagramImage(browser, htmlFile, outputFile) {
  const page = await browser.newPage();

  try {
    // Set viewport for Instagram specs (square)
    await page.setViewport({
      width: 1080,
      height: 1080,
      deviceScaleFactor: 2 // Retina quality
    });

    // Load HTML file
    const htmlPath = path.join(__dirname, htmlFile);
    const htmlContent = fs.readFileSync(htmlPath, 'utf8');

    // Replace instructor photo placeholder with base64
    const base64Photo = getBase64Image(INSTRUCTOR_PHOTO_PATH);
    const modifiedHtml = base64Photo
      ? htmlContent.replace('INSTRUCTOR_PHOTO_PLACEHOLDER', base64Photo)
      : htmlContent.replace('src="INSTRUCTOR_PHOTO_PLACEHOLDER"',
          'style="background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)"');

    // Set content
    await page.setContent(modifiedHtml, { waitUntil: 'networkidle0' });

    // Wait for fonts to load
    await page.evaluateHandle('document.fonts.ready');

    // Additional wait for rendering
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Take screenshot
    const outputPath = path.join(__dirname, outputFile);
    await page.screenshot({
      path: outputPath,
      type: 'png',
      fullPage: false
    });

    console.log(`✅ Generated: ${outputFile}`);

    // Get file size
    const stats = fs.statSync(outputPath);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`   Size: ${fileSizeInMB} MB`);

  } catch (error) {
    console.error(`❌ Error generating ${outputFile}:`, error.message);
  } finally {
    await page.close();
  }
}

// Main generation function
async function generateCompleteMarketingSuite() {
  console.log('🚀 Starting Autonomous Agents Webinar Marketing Suite Generation\n');
  console.log('📁 Output Directory:', __dirname);
  console.log('📸 Instructor Photo:', INSTRUCTOR_PHOTO_PATH);
  console.log('');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📊 LINKEDIN IMAGES (1200x627px)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // LinkedIn Variations
    await generateLinkedInImage(
      browser,
      'linkedin-variation-1-comparison.html',
      'linkedin-v1-comparison.png'
    );

    await generateLinkedInImage(
      browser,
      'linkedin-variation-2-productivity.html',
      'linkedin-v2-productivity.png'
    );

    await generateLinkedInImage(
      browser,
      'linkedin-variation-3-decision-matrix.html',
      'linkedin-v3-decision-matrix.png'
    );

    await generateLinkedInImage(
      browser,
      'linkedin-variation-4-problem-solution.html',
      'linkedin-v4-problem-solution.png'
    );

    await generateLinkedInImage(
      browser,
      'linkedin-variation-5-journey.html',
      'linkedin-v5-journey.png'
    );

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('📱 INSTAGRAM IMAGES (1080x1080px)');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Instagram Variations
    await generateInstagramImage(
      browser,
      'instagram-variation-1-bold-stats.html',
      'instagram-v1-bold-stats.png'
    );

    await generateInstagramImage(
      browser,
      'instagram-variation-2-split-screen.html',
      'instagram-v2-split-screen.png'
    );

    await generateInstagramImage(
      browser,
      'instagram-variation-3-grid.html',
      'instagram-v3-grid.png'
    );

    console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('✅ GENERATION COMPLETE!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Summary statistics
    const outputDir = __dirname;
    const pngFiles = fs.readdirSync(outputDir).filter(f => f.endsWith('.png'));

    let totalSize = 0;
    pngFiles.forEach(file => {
      const stats = fs.statSync(path.join(outputDir, file));
      totalSize += stats.size;
    });

    console.log('📊 SUMMARY STATISTICS:');
    console.log(`   Total Images: ${pngFiles.length}`);
    console.log(`   Total Size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`   Theme: Purple/Violet (#8b5cf6, #a855f7)`);
    console.log(`   Resolution: 2x (Retina)`);
    console.log(`   Format: PNG\n`);

    console.log('🎯 RECOMMENDED USAGE:');
    console.log('   LinkedIn:');
    console.log('   • V1 (Comparison) - Tech leads evaluating tools');
    console.log('   • V2 (Productivity) - Developers seeking efficiency');
    console.log('   • V3 (Decision Matrix) - Strategic thinkers');
    console.log('   • V4 (Problem/Solution) - Pain-point driven users');
    console.log('   • V5 (Journey) - Learning-focused professionals\n');
    console.log('   Instagram:');
    console.log('   • V1 (Bold Stats) - Feed posts, high visibility');
    console.log('   • V2 (Split Screen) - Story-driven posts');
    console.log('   • V3 (Grid) - Educational content\n');

    console.log('📁 Files location:');
    console.log(`   ${outputDir}\n`);

  } catch (error) {
    console.error('❌ Fatal error:', error);
  } finally {
    await browser.close();
    console.log('🔒 Browser closed successfully');
  }
}

// Run the generation
generateCompleteMarketingSuite().catch(console.error);
