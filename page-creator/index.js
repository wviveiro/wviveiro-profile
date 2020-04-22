const fs = require('fs');
const path = require('path');
const slugify = require('slugify');

const isDirectory = async (_path) => {
    const stat = await fs.lstatSync(_path);
    return stat.isDirectory();
}

/**
 * Find README.md file
 *
 * @author Wellington Viveiro <wviveiro@gmail.com>
 **/

const findREADME = async (_path, cb = false, _newpath = '') => {
    let currpath = `${_path}${_newpath}`;


    const items = await fs.readdirSync(currpath);
    let isDir, hasReadMe, newpath, mainpath;
    for (let i = 0; i < items.length; i++) {
        newpath = `${_newpath}/${items[i]}`;
        mainpath = `${currpath}/${items[i]}`;

        isDir = await isDirectory(mainpath);
        if (isDir) {
            hasReadMe = fs.existsSync(`${mainpath}/README.md`);
            if (hasReadMe) {
                if (cb) {
                    await cb(newpath);
                }
            }

            await findREADME(_path, cb, newpath);
        }
    }

    return true;
}


/**
 * Create router to pages
 *
 * @author Wellington Viveiro <wviveiro@gmail.com>
 **/
const createRouter = async () => {
    const mainpath = path.resolve(`${__dirname}/../src/components/views/pages/routes.jsx`);

    let result = fs.readFileSync(mainpath, 'utf-8');

    if (result) {
        let strst = "<Switch>";
        let strst2 = "</Switch>";
        let switchpos = result.indexOf(strst);
        if (switchpos > -1) {
            let endswitchpos = result.indexOf(strst2);

            if (endswitchpos > -1) {
                let routes = [];
                const pathpublic = path.resolve(`${__dirname}/../public/pages`);
                await findREADME(pathpublic, (newpath) => {
                    routes.push(newpath);
                });

                if (routes.length > 0) {
                    routes = routes.map((r) => {
                        return `            <Route path="/pages${r}" component={PagesLoader('/pages${r}/README.md')} />`
                    });

                    let newcontent = result.substr(0, switchpos + strst.length);
                    newcontent += "\n" + routes.join("\n", routes);
                    newcontent += result.substr(endswitchpos - strst2.length);
                    await fs.writeFileSync(mainpath, newcontent);
                    
                }
            }
        }
    }

    return true;
}

const createPage = async (title, parentpath = '') => {
    let pagepath = slugify(title.toLowerCase());
    if (parentpath) {
        pagepath = `${parentpath}/${pagepath}`;
    }
    const mainpath = path.resolve(`${__dirname}/../public/pages/${pagepath}`);
    if (await fs.existsSync(mainpath)) {
        throw 'Page already exists';
    }

    await fs.mkdirSync(mainpath, {recursive: true});

    const readmefilepath = path.resolve(`${mainpath}/README.md`);

    await fs.writeFileSync(readmefilepath, `# ${title}\n`);

    await createRouter();
}

exports.findREADME = findREADME;
exports.createRouter = createRouter;
exports.createPage = createPage;