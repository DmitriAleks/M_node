const fs = require('fs') //file system
const path = require('path')

// fs.mkdir(path.join(__dirname, 'test'), (err)=>{
//     if(err) {
//         throw err
//     }
//     console.log('Direction created')
// })

const filePath = path.join(__dirname, 'test', 'text.txt')
// fs.writeFile(filePath, 'Hello NodeJS', (err) => { // Создает файл, writeFile перетирает существующий контет, то есть при повторном вызове ниже, мы увидим одну лишь запись 'Hello Again'
//     if(err){
//         throw err
//     }
//
//     console.log('Файл создан')
//
//
//     fs.writeFile(filePath, '\nHello Again', (err) => {
//         if (err) {
//             throw err
//         }
//         console.log('Файл создан')
//     })
//
//     fs.appendFile(filePath, '\nHello Again', (err) => {// appendFile не перетирает контет, мы увидим уже две строчки
//         if (err) {
//             throw err
//         }
//         console.log('Файл создан')
//     })
// })

fs.readFile(filePath, 'utf-8' ,(err, content)=>{
     if(err){
           throw err
     }
     console.log(content)  //Адекватно работает только с параметром 'utf-8'

    // const data = Buffer.from(content)     //Позволит адекватно сработать без параметра 'utf-8'
    // console.log('Content: ', data.toString())
})