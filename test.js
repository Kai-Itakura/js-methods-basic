// const arr = ['abs', 'def', 'hij', 'klm']
// for (const elm of arr) {
//   console.log(elm)
// }

// let i = 0
// while (i <= 3) {
//   console.log(i)
//   i++
// }

// const num = 100
// if (num === 100) {
//   console.log('満点です😊')
// } else if (num >= 90) {
//   console.log('合格です😙')
// } else {
//   console.log('不合格です😫')
// }

// const subject = 'English'

// switch (subject) {
//   case 'English':
//     console.log('英語')
//     break
//   case 'Math':
//     console.log('数学')
//     break
//   case 'Science':
//     console.log('理科')
//     break
//   default:
//     console.log('国語')
// }

// const arr = ['a', 'b', 'c', 'd', 'e']
// console.log(arr.length)

// let arr = Array(5).fill('himika')
// console.log(arr)

// let arr = ['A', 'B', 'C', 'D', 'E']
// arr.push('F')
// console.log(arr)
// arr.pop()
// str = arr.join('')
// console.log(str)

// let fruit = ['りんご', 'みかん', 'ぶどう']

// fruit.splice(0, 1)
// console.log(fruit)

// let arr = [1, 5, 4, 3, 8, 10]
// const maxNum = Math.max(...arr)
// console.log(maxNum)

// const minNum = Math.min(...arr)
// console.log(minNum)

// const target = arr.find((t) => t > 8)
// console.log(target)

// const arr = ['apple', 'dog', 'pen', 'cat', 'dictionary', 'chair', 'bicycle', 'flower']
// const newArr = arr.filter((str) => str.length < 5)
// console.log(newArr)
// const newArray = arr.filter((str) => str.length > 5)
// console.log(newArray)

// const arr = ['dog', 'apple', 'cat', 'bottle']
// const sortArr = arr.sort()
// console.log(sortArr)

// const arr2 = ['おもち', 'えほん', 'いぬ', 'あめ']
// const sortArr2 = arr2.sort()
// console.log(sortArr2)

// const arr = [3, 45, 6, 78, 4, 3, 5, 56]
// const sortNum = arr.sort((a, b) => a - b)
// console.log(sortNum)
// const sortNum2 = arr.sort((a, b) => b - a)
// console.log(sortNum2)

// const arr = ['a', 'b', 'c', 'd']
// const result = arr.indexOf('e')
// console.log(result)
// const result2 = arr.includes('e')
// console.log(result2)

// const arr = ['a', 'b', 'c', 'd', 'e']
// const newArr = arr.join('')
// console.log(newArr)

// const str = 'abcde'
// const newStr = str.split('').reverse().join('')
// console.log(newStr)

// const text = 'Imagine all the people living for today'
// const target = /dreamer/g
// const result = text.match(target)
// console.log(result)

// const text = 'imagine all the people living for today'
// const textUpper = text.toUpperCase()
// console.log(textUpper)
// const textLower = textUpper.toLowerCase()
// console.log(textLower)
// const newTextUpper = textLower.slice(0, 1).toUpperCase() + textLower.slice(1)
// console.log(newTextUpper)

// const str = 'りんごみかんぶどう'
// const newStr = str.replace(/みかん/g, 'もも')
// console.log(newStr)

// const str = 'あいうえおかきくけこ'
// const newStr = str.slice(-3)
// console.log(newStr)

// const text = 'abc-acb-bac-bca-cab-cba'
// const target = /ab/g
// const count = (text.match(target) || []).length
// console.log(count)

// const str = '1*2*3*4*5'
// result = Function('return (' + str + ')')()
// console.log(result)

// const str = 'abc,def,ghi,jkl'
// const arr = str.split(',')
// console.log(arr)

// const str2 = 'abc def ghi jkl'
// const arr2 = str2.split(' ')
// console.log(arr2)

// const str3 = 'abcdefghijkl'
// const arr3 = str3.split('')
// console.log(arr3)

const num = 1234
const numToStr = String(num)
console.log(typeof num)
console.log(typeof numToStr)
const srtToNum = Number(numToStr)
console.log(typeof srtToNum)
