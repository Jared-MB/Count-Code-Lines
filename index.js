import fs from 'node:fs/promises'

let totalLines = 0

const readDirs = async (path) => {
    const filesWithDirs = await fs.readdir(path)
    const dirs = filesWithDirs.filter(file => !file.includes('.'))
    const files = filesWithDirs.filter(file => file.includes('.'))

    if (dirs.length > 0) {
        for (const dir of dirs) {
            if (dir === 'node_modules' || dir === 'dist') continue
            console.log(`Reading dir: ${dir}`)
            try {
                await readDirs(`${path}/${dir}`)
            }
            catch (e) {
                console.error(e)
                console.error(`Error reading dir: ${dir}`)
            }
        }
    }


    if (files.length > 0) {
        for (const file of files) {
            const fullPath = `${path}/${file}`
            if (file.startsWith('.')) continue
            try {
                const fileContent = await fs.readFile(fullPath, 'utf-8')
                const linesInFile = fileContent.split('\n')
                totalLines += linesInFile.length
            }
            catch (e) {
                console.error(e)
                console.error(`Error reading file: ${fullPath}`)
            }
        }
    }
}


async function countCodeLines() {
    await readDirs('.')
    console.log(`Total lines of code: ${totalLines}`)
}

await countCodeLines()