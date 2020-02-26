const fs = require('fs');
const path = require('path');

function getPosts() {
    let files = fs.readdirSync(path.resolve(__dirname, '../source/_posts/'));
    return files.map(f => path.resolve(__dirname, '../source/_posts/' + f));
}

function extractTags(filePath) {
    let content = fs.readFileSync(filePath).toLocaleString()
    let lines = content.split('\n');
    let tagLines = lines.filter(l => l.trim().startsWith('tag:'));
    if (tagLines.length > 0) {
        let tagLine = tagLines[0];
        tagLine = tagLine.replace(/(\s?)+tag:(\s?)+\[/i, '');
        tagLine = tagLine.replace(/(\s?)+](\s?)+/i, '');
        return tagLine.split(',').map(t => t.trim());
    }
    
    return [];
}

function extractTagsAll() {
    let tags = [...new Set(getPosts().map(p => extractTags(p)).flat())].join(', ');
    console.log(tags);
}

extractTagsAll();
