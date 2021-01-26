const utils = require('../utils');

const getThemeImport = () => {
    const files = utils.getCommonPaths('theme/index.js');
    return files.map(file => `import '${file}';`).join('\n');
};

module.exports ={
    getThemeImport
};
