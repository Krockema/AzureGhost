const fs = require('fs-extra')

let jobs = {
    "node_modules/ghost/content/themes": "content/themes",

    // This is a hack as long this is not solved: https://github.com/TryGhost/Ghost/issues/8754
    "node_modules/ghost-azure-storage/index.js": "node_modules/ghost/core/server/adapters/storage/ghost-azure-storage.js"
};

try {
    for (var key in jobs) {
        fs.copySync(key, jobs[key])
    };
} catch (err) {
    console.error(err)
}