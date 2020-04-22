const {createPage} = require('./page-creator/index');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const main = async () => {
    readline.question('Title of page: ', async(title) => {
        readline.question('Any parent folder?: ', async (parentfolder) => {
            try {
                await createPage(title, parentfolder);
                console.log('Page Created');
                process.exit();
            } catch (err) {
                console.error(err);
                process.exit();
            }     
        });
    });
}

main();