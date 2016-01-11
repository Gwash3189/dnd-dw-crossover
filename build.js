const marked = require('marked');
const fs = require('fs');

const markdownFile = './rules.md';
const htmlFile = './rules.html';
const options = { encoding: 'utf-8' };

const markdown = fs.readFileSync('./rules.md', options);
const html = marked(markdown);

fs.writeFileSync(htmlFile, html);

return 0;
