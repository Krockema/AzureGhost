const fs = require('fs-extra')

let jobs = {
    "node_modules/ghost/content/themes": "content/themes",
    "node_modules/ghost-azure-storage/index.js": "content/adapters/storage/ghost-azure-storage.js"
};

try {
    for (var key in jobs) {
        fs.copySync(key, jobs[key])
    };
} catch (err) {
    console.error(err)
}