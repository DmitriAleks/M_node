const path = require('path')

console.log('Название файлов: ', path.basename(__filename))

console.log('Имя директории: ', path.dirname(__filename))

console.log('Расширение файла: ', path.extname(__filename))

console.log('Parse: ', path.parse(__filename))

console.log(path.join(__dirname, 'server', 'index.html' ))