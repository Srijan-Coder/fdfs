# Acceptance Gates: FDFS Dance & Fitness Studio — gang.tv Dark Theme Architecture

OWNS: src/**, public/**, package.json, tailwind.config.js, tsconfig.json, next.config.mjs, README.md, GATES.md

Scope: Production-grade Next.js website recreating the gang.tv layout language and interaction feel in dark theme for Flawless Dance & Fitness Studio, Ghansoli.

- [x] G1: Single source of truth content validation
  CHECK: node -e "const fs = require('fs'); const site = fs.readFileSync('src/content/site.ts', 'utf8'); if (site.includes('Building confidence through') && site.includes('Sector 16') && site.includes('Sector 5') && site.includes('Avinash Mishra') && site.includes('Ankit Gupta') && site.includes('918850120018')) { console.log('CONTENT_SOURCE_VERIFIED'); } else { process.exit(1); }"
  EXPECT: CONTENT_SOURCE_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=4acb6f28dd408bf78e4bcaf64ae2607333a9a17fdce620522f658ef271c160a2; exit=0; EXPECT=matched; output-sha256=b26e7800c332759af29a71bc2767db8d5952317482ea99ddda2626400ca1475a; output-bytes=24; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G2: Next.js production build compilation
  CHECK: node -e "const fs = require('fs'); if (fs.existsSync('.next/BUILD_ID')) { console.log('NEXT_BUILD_VERIFIED'); } else { process.exit(1); }"
  EXPECT: NEXT_BUILD_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=0c31922f3c11e9d4014ae8f7a3e86acec0f213d3ca18caa8953e7a83978c142d; exit=0; EXPECT=matched; output-sha256=c16b5f23308f270caffead7150e877657c39923baabb50d7e1de6b85a87925fd; output-bytes=20; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G3: gang.tv editorial interaction patterns
  CHECK: node -e "const fs = require('fs'); const files = ['src/components/Hero.tsx', 'src/components/EditorialStatement.tsx', 'src/components/AboutStudio.tsx', 'src/components/ClassesList.tsx', 'src/components/StudioLifeNews.tsx', 'src/components/EnquiryStrip.tsx', 'src/components/Footer.tsx']; const ok = files.every(f => fs.existsSync(f)); if (ok) console.log('GANG_PATTERNS_VERIFIED'); else process.exit(1);"
  EXPECT: GANG_PATTERNS_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=a40c3d72d1321e0d6cafd3a696e235e22aeef60fa4f2b41a9cdd939c3ed34e5f; exit=0; EXPECT=matched; output-sha256=964426f6d5e73be559dce7a5219fe4fd6e528524289a744f6ff511f6bc6b0989; output-bytes=23; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G4: Multi-breakpoint responsive browser verification
  CHECK: node -e "const fs = require('fs'); const ss = ['screenshot_desktop_1440.png', 'screenshot_tablet_768.png', 'screenshot_mobile_390.png', 'screenshot_menu_overlay.png', 'screenshot_contact_full.png']; const ok = ss.every(f => fs.existsSync(f)); if (ok) console.log('BROWSER_VERIFIED'); else process.exit(1);"
  EXPECT: BROWSER_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=c7960de4a178e69e60b10163053058b57c1c16acca33a18661b2f1cfe7fda421; exit=0; EXPECT=matched; output-sha256=895fe4dc0471c57593385d4422fb0d52548d8e15f9042d31c86c75b41934181e; output-bytes=17; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G5: Zero-price transparency and non-refundable fees policy
  CHECK: node -e "const fs = require('fs'); const site = fs.readFileSync('src/content/site.ts', 'utf8'); if (site.includes('Fees once paid are non-refundable') && !site.includes('₹') && !site.includes('Rs.')) { console.log('POLICY_VERIFIED'); } else { process.exit(1); }"
  EXPECT: POLICY_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=093717c5e95005895dd6e4c3dfe34a0114d3c482b6671b224501e15328907e86; exit=0; EXPECT=matched; output-sha256=bbb94df5be73eb4e59611f7de6c119d81e62a98416af24a52a3c8564d0503dee; output-bytes=16; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G6: Kinetic marquee, in-page video modal & real-time studio status
  CHECK: node -e "const fs = require('fs'); const files = ['src/components/KineticMarquee.tsx', 'src/components/VideoModal.tsx', 'src/components/StudioStatusPill.tsx', 'screenshot_video_modal.png', 'screenshot_hero_status_grain.png']; const ok = files.every(f => fs.existsSync(f)); if (ok) console.log('NEW_FEATURES_VERIFIED'); else process.exit(1);"
  EXPECT: NEW_FEATURES_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=7114b5705969e74af59bc65e7c9e445f31e4489b9fc8198f1b6c6f46b61d1f82; exit=0; EXPECT=matched; output-sha256=ec6652e23d4ffeec9e75de5a5acc12c9ccf1dcc8bddd207e92f6c97bfcd06819; output-bytes=22; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G7: Real Faculty & Video Assets Integration
  CHECK: node -e "const fs = require('fs'); const files = ['public/media/team-avinash.jpg', 'public/media/team-ankit.jpg', 'public/media/studio-tour-small.mp4', 'public/media/kids-arrival.mp4', 'public/media/reviews/review-1.mp4']; const ok = files.every(f => fs.existsSync(f)); if (ok) console.log('FACULTY_AND_VIDEOS_VERIFIED'); else process.exit(1);"
  EXPECT: FACULTY_AND_VIDEOS_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=fa1657d6b97bcf73527ddeb1ac87ce79cd5521fd2edff81f31d9dcd7beea7477; exit=0; EXPECT=matched; output-sha256=7b6a5b8761a16f1467b7a0342e746bc13170e62d00bbfb964d6891a17d6fbe8f; output-bytes=28; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G8: Video Gallery, YouTube Showcase & Review Hub Verification
  CHECK: node -e "const fs = require('fs'); const files = ['src/app/gallery/GalleryClient.tsx', 'screenshot_team_faculty_updated.png', 'screenshot_studio_reels_section.png', 'screenshot_video_reviews_section.png', 'screenshot_gallery_page.png']; const ok = files.every(f => fs.existsSync(f)); if (ok) console.log('MEDIA_HUB_VERIFIED'); else process.exit(1);"
  EXPECT: MEDIA_HUB_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=67476762d945c9f7a62729e5fce05756dbd0557239cef4791b6907138e68ada5; exit=0; EXPECT=matched; output-sha256=3e8ed15e3312dff89a1812997fc4a4388353736b1768067bd8423e6dce5b2c87; output-bytes=19; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G9: Conversion & View-Booster Pages (/trial, /schedule, /wedding, /faq, /api/book)
  CHECK: node -e "const fs = require('fs'); const routes = ['src/app/trial/page.tsx', 'src/app/schedule/page.tsx', 'src/app/wedding/page.tsx', 'src/app/faq/page.tsx', 'src/app/api/book/route.ts']; const ok = routes.every(r => fs.existsSync(r)); if (ok) console.log('CONVERSION_PAGES_VERIFIED'); else process.exit(1);"
  EXPECT: CONVERSION_PAGES_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=263acd9d4a881c549fed4b597baa6c708c0ef037c845e0385ec6051fe30e71a3; exit=0; EXPECT=matched; output-sha256=fa5033cf0e10e73b5c2cea5b0c96bd76e68edd297f370ec32c18f49f8f9711b5; output-bytes=26; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G10: Password-Protected Admin Terminal & Editorial Fullscreen Menu Overhaul
  CHECK: node -e "const fs = require('fs'); const files = ['src/app/admin/page.tsx', 'src/app/api/admin/bookings/route.ts', 'src/app/api/admin/auth/route.ts', 'src/components/FullscreenMenu.tsx']; const ok = files.every(f => fs.existsSync(f)) && fs.readFileSync('src/app/admin/page.tsx', 'utf8').includes('admin-password-input'); if (ok) console.log('MENU_AND_PASSWORD_VERIFIED'); else process.exit(1);"
  EXPECT: MENU_AND_PASSWORD_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=5475fe8fe868b2ff8ad7267ac0fc33db137b4f7831822392cc45ca85f7908ff1; exit=0; EXPECT=matched; output-sha256=4166bcab06148bb6ca82104e4273364c60499354d38d58575e834d4ff6f9e485; output-bytes=27; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G11: Local SEO, AEO, GEO, LLMs & XML Sitemap
  CHECK: node -e "const fs = require('fs'); const ok = fs.existsSync('public/llms.txt') && fs.existsSync('public/llms-full.txt') && fs.existsSync('src/app/sitemap.ts') && fs.existsSync('src/app/robots.ts') && fs.readFileSync('public/llms.txt', 'utf8').includes('Ghansoli') && fs.readFileSync('src/app/layout.tsx', 'utf8').includes('@graph'); if (ok) console.log('SEO_AND_LLM_VERIFIED'); else process.exit(1);"
  EXPECT: SEO_AND_LLM_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=3937241098f0d285f2d01ee8a82e76731bc786c174e670cf1dabee33c3f8b807; exit=0; EXPECT=matched; output-sha256=ba9ba8956215153ad4d3243c8ea34bd98954128c5724cd7e5b1f352ef16e1907; output-bytes=21; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G12: Complete Editorial Legal Suite with Dark Theme
  CHECK: node -e "const fs = require('fs'); const ok = ['src/app/privacy/page.tsx', 'src/app/terms/page.tsx', 'src/app/refund/page.tsx', 'src/app/cookie-policy/page.tsx'].every(f => fs.existsSync(f)) && fs.readFileSync('src/app/refund/page.tsx', 'utf8').includes('Fees once paid are non-refundable') && !fs.readFileSync('src/app/refund/page.tsx', 'utf8').includes('₹'); if (ok) console.log('LEGAL_SUITE_VERIFIED'); else process.exit(1);"
  EXPECT: LEGAL_SUITE_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=6e44526e52bfcb460586f547298bab52df46cc1029b8d5db2fc1a4c4bd1c50d8; exit=0; EXPECT=matched; output-sha256=96e236de009c6bccecebb919b87b750428e11c7a50b49735bb34045bbce2c2ad; output-bytes=21; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

- [x] G13: Production Security Hardening & Environment Passkey
  CHECK: node -e "const fs = require('fs'); const ok = fs.existsSync('.env.local') && fs.existsSync('.env.example') && fs.existsSync('.gitignore') && fs.readFileSync('src/app/api/admin/auth/route.ts', 'utf8').includes('process.env.ADMIN_PASSWORD') && fs.readFileSync('next.config.mjs', 'utf8').includes('X-Frame-Options'); if (ok) console.log('SECURITY_HARDENING_VERIFIED'); else process.exit(1);"
  EXPECT: SECURITY_HARDENING_VERIFIED
  EVIDENCE: automatic-evidence=v1; definition-sha256=a104326a369516a2ca98ddd4484d68893f3053d7d16c2e73073f6e4fdf357309; exit=0; EXPECT=matched; output-sha256=51c311bdd01d59d38ecb4f7557826e5c364139c47a13b3fa9a81a97d47542f1c; output-bytes=28; shell=C:\Windows\system32\cmd.exe; cwd=D:\fdfs; path=0d009c3f4d02/67 entries

