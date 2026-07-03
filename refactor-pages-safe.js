import fs from 'fs';
import path from 'path';

const pagesDir = path.join(process.cwd(), 'src/pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Handle imports
  const hasLink = content.includes('Link');
  const hasUseNavigate = content.includes('useNavigate');
  let routerImports = [];
  if (hasLink) routerImports.push('Link');
  if (hasUseNavigate) routerImports.push('useNavigate');
  if (content.includes('useParams') || content.includes('Route.useLoaderData()') || file.includes('Detail') || file.includes('Category') || file.includes('Post')) {
    routerImports.push('useParams');
  }

  content = content.replace(/import\s+{([^}]*)}\s+from\s+['"]@tanstack\/react-router['"];?/g, '');
  if (routerImports.length > 0) {
    const importsStr = Array.from(new Set(routerImports)).join(', ');
    content = `import { ${importsStr} } from "react-router-dom";\n` + content;
  }

  // Handle Loaders
  if (file === 'DesignDetail.tsx') {
    content = content.replace(/const { design } = Route\.useLoaderData\(\);/g, `const { slug } = useParams();\n  const design = findDesign(slug!);`);
  } else if (file === 'CollectionDetail.tsx') {
    content = content.replace(/const { collection } = Route\.useLoaderData\(\);/g, `const { slug } = useParams();\n  const collection = COLLECTIONS.find((x) => x.slug === slug);`);
  } else if (file === 'BlogPost.tsx') {
    content = content.replace(/const { post } = Route\.useLoaderData\(\);/g, `const { slug } = useParams();\n  const post = POSTS.find((p) => p.slug === slug);`);
  } else if (file === 'Category.tsx') {
    content = content.replace(/const { category } = Route\.useLoaderData\(\);/g, `const { category } = useParams();\n  const c = BROWSE_CATEGORIES.find((x) => x.slug === category);`);
    content = content.replace(/const { material } = Route\.useLoaderData\(\);/g, `const { category } = useParams();\n  const m = MATERIALS.find((x) => x.slug === category);`);
  }
  content = content.replace(/const\s+\{\s*([^}]+)\s*\}\s*=\s*Route\.useLoaderData\(\);/g, `const { $1 } = useParams();`);

  // Handle Link components (params={{...}})
  content = content.replace(/to="([^"]+)"\s+params=\{\{\s*([^:]+):\s*([^}]+)\s*\}\}/g, (match, toPath, paramKey, paramValue) => {
    const newPath = toPath.replace(`$${paramKey}`, `\${${paramValue}}`);
    return `to={\`${newPath}\`}`;
  });
  content = content.replace(/to="([^"]+)"\s+params=\{\{\s*([^:]+):\s*([^,]+),\s*([^:]+):\s*([^}]+)\s*\}\}/g, (match, toPath, k1, v1, k2, v2) => {
      let newPath = toPath.replace(`$${k1}`, `\${${v1}}`);
      newPath = newPath.replace(`$${k2}`, `\${${v2}}`);
      return `to={\`${newPath}\`}`;
  });

  // Remove Route block
  const routeStart = content.indexOf('export const Route = createFileRoute');
  if (routeStart !== -1) {
    const componentNameMatch = content.match(/component:\s*([A-Za-z0-9_]+),?/);
    let componentName = componentNameMatch ? componentNameMatch[1] : null;

    if (componentName) {
        // It's a normal file
        const firstFunctionIndex = content.indexOf('function ' + componentName, routeStart);
        if (firstFunctionIndex !== -1) {
            content = content.substring(0, routeStart) + content.substring(firstFunctionIndex);
            if (!content.includes(`export default ${componentName}`)) {
                content += `\nexport default ${componentName};\n`;
            }
        }
    } else {
        // Inline component (Privacy, Terms, FAQ)
        const componentName = file.replace('.tsx', '');
        content = content.replace(/export const Route = createFileRoute.*\(\{\s*component:\s*\(\)\s*=>\s*\(/s, `export default function ${componentName}() { return (`);
        content = content.replace(/\),\s*\}\);/s, ');\n}');
    }
  }

  fs.writeFileSync(filePath, content);
}
console.log('Refactor safe complete');
