import fs from 'fs';
import path from 'path';

function fixFile(relPath, replacer) {
  const p = path.join(process.cwd(), relPath);
  if (fs.existsSync(p)) {
    let content = fs.readFileSync(p, 'utf8');
    content = replacer(content);
    fs.writeFileSync(p, content);
  }
}

// 1. Fix Navbar.tsx location
fixFile('src/components/layout/Navbar.tsx', c => {
  return c.replace(/const pathname = useLocation\(\);/, 'const { pathname } = useLocation();');
});

// 2. Fix BlogPost.tsx import casing & undefined
fixFile('src/pages/BlogPost.tsx', c => {
  c = c.replace(/from ".\/blog";/g, 'from "./Blog";');
  if (!c.includes('if (!post) return <div')) {
     c = c.replace(/const post = POSTS\.find\(\(p\) => p\.slug === slug\);/, `const post = POSTS.find((p) => p.slug === slug);\n  if (!post) return <div className="min-h-screen grid place-items-center"><div className="text-center serif-display text-2xl">Post not found</div></div>;`);
  }
  return c;
});

// 3. Fix CollectionDetail.tsx undefined
fixFile('src/pages/CollectionDetail.tsx', c => {
  if (!c.includes('if (!collection) return <div')) {
     c = c.replace(/const collection = COLLECTIONS\.find\(\(x\) => x\.slug === slug\);/, `const collection = COLLECTIONS.find((x) => x.slug === slug);\n  if (!collection) return <div className="min-h-screen grid place-items-center"><div className="text-center serif-display text-2xl">Collection not found</div></div>;`);
  }
  return c;
});

// 4. Fix DesignDetail.tsx undefined
fixFile('src/pages/DesignDetail.tsx', c => {
  if (!c.includes('if (!design) return <div')) {
     c = c.replace(/const design = findDesign\(slug!\);/, `const design = findDesign(slug!);\n  if (!design) return <div className="min-h-screen grid place-items-center"><div className="text-center serif-display text-2xl">Design not found</div></div>;`);
  }
  return c;
});

// 5. Fix BookConsultation.tsx Route & FormState & navigate
fixFile('src/pages/BookConsultation.tsx', c => {
  c = c.replace(/type FormState = .*/, ''); // Remove if previously defined incorrectly
  // Actually, FormState was probably exported from the route or defined in it. Let's just define it inline.
  if (!c.includes('type FormState =')) {
    c = c.replace(/function BookConsultation\(\) \{/, `type FormState = "idle" | "submitting" | "success" | "error";\n\nexport default function BookConsultation() {`);
  }
  
  c = c.replace(/Route\.navigate\(\{ to: "([^"]+)" \}\)/g, "navigate('$1')");
  c = c.replace(/Route\.navigate\(\{ to: '([^']+)' \}\)/g, "navigate('$1')");
  
  return c;
});

// 6. Fix Category.tsx
fixFile('src/pages/Category.tsx', c => {
  c = c.replace(/Route\.navigate\(\{ to: "([^"]+)" \}\)/g, "navigate('$1')");
  c = c.replace(/Route\.navigate\(\{ to: '([^']+)' \}\)/g, "navigate('$1')");
  return c;
});

// 7. Fix SubCategory.tsx
fixFile('src/pages/SubCategory.tsx', c => {
  c = c.replace(/Route\.navigate\(\{ to: "([^"]+)" \}\)/g, "navigate('$1')");
  c = c.replace(/Route\.navigate\(\{ to: '([^']+)' \}\)/g, "navigate('$1')");
  return c;
});

console.log('Final fixes applied');
