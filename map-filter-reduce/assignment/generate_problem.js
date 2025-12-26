import fs from "fs";

// Read README content
const readme = fs.readFileSync("README.md", "utf-8");

// Split problems based on headings (### **Title**)
const problemRegex = /### \*\*(.*?)\*\*([\s\S]*?)(?=### \*\*|$)/g;

let match;
while ((match = problemRegex.exec(readme)) !== null) {
  const title = match[1].trim(); // e.g. Festival Ribbon Count
  const content = match[2].trim(); // Rest of the problem content

  // Convert title to lowercase_underscore format
  const fileName =
    title.toLowerCase().replace(/\s+/g, "_").replace(/[^a-z0-9_]/g, "") + ".js";

  // Prepare JS comment with problem content
  const fileContent = `/**
${content
      .split("\n")
      .map((line) => " * " + line)
      .join("\n")}
 */
`;

  // Write to file
  fs.writeFileSync(fileName, fileContent, "utf-8");
  console.log(`✅ Created: ${fileName}`);
}
