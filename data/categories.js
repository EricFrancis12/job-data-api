import fs, { statSync } from 'fs';

// reads contents of /data, and each folder becomes a category of type string
const dataDirContents = fs.readdirSync('./data');
const categories = dataDirContents.filter(item => {
    const stats = statSync(`./data/${item}`);
    return stats.isDirectory();
});

export default categories;
