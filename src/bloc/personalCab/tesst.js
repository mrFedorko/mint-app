
const message = '          '


console.log(!message || message.split('')
.filter(item=> item !== ' ')
.length === 0)