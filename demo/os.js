const os = require('os')

console.log('OS: ', os.platform())

console.log('Архитиктура: ', os.arch())

console.log('Инфа по процессорам: ', os.cpus())

console.log('Свободная память: ', os.freemem())

console.log('Общая память: ', os.totalmem())

console.log('Домашняя директория:' , os.homedir())

console.log('Сколько времени включена система', os.uptime())