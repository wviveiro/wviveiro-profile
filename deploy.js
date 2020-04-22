const {execSync} = require('child_process');
const {findREADME} = require('./page-creator/index');
const path = require('path');
const fs = require('fs');

const main = async () => {
    try {
        await execSync('npm run build', {stdio: 'inherit'});
        const pathname = path.resolve('./build/pages');
        await findREADME(pathname, async (newpath) => {
            const p = `${pathname}${newpath}/index.html`;
            await fs.copyFileSync('./build/index.html', p);
            console.log('New file created ', p);
        });
        await execSync('npm run movefiles && npm run newcommit', {stdio: 'inherit'});

        console.log('Done!');
    } catch (err) {
        console.error(err);
        console.error('Something went wrong in the process');
    }

}

main();