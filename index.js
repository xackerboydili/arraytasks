"string"

'1'
// function detectWord(str) {
// 	return str.split("").filter((e) => e.toLowerCase() === e).join("")
// }
// console.log(detectWord("UcUNFYGaFYFYGtNUH"))
 
'2'

// function potatoes(str) {
// 	return str.split("potato").length
// }
// console.log(potatoes("potatopotato"))

'3'

// function charCount(myChar, str) {
// 	let arr = str.split('')
//     return arr.filter((e) => e == myChar).length
// }
// console.log(charCount( "d", "Dilshod"))

'4'

// function error(n) {
// 	return n === 1 ? 'Check the fan: e1' : n === 2 ? 'Emergency stop: e2' : n === 3 ? 'Pump Error: e3' : n === 4 ? 'c: e4' : ''
// }

// console.log(error(2))

'5'
// function fixImport(s) {
// 	let arr = s.split(`  `)
//     return [arr[2], arr[3], arr[0], arr[1]].join("")
    
// }
// console.log(fixImport("import object from module_name"))

'6'

// function doubleChar(str) {
// 	return str.split('').map((e) => e + e).join('')
// }
// console.log(doubleChar("String"))

'7'
'challaaaa'
// function countVowels(str) {
//     let arr = str.split('')
//     return arr.filter((e) => e.includes('aouieAOUIE')).length
// }
// console.log(countVowels("Dilshod"))

'8'

// function repetition(txt, n) {
// 	return txt.repeat(n)
// }
// console.log(repetition("ab", 3))

'9'

// function bomb(str) {
// 	return str.includes('bomb') ? 'Duck !!!' : 'There is no bomb, relax'
// }
// console.log(bomb("Hey, did you think there is a bomb?"))

'10'
'chalaaa'
// function removeVowels(str) {
// 	return str.replace(['aoiue'], "")
// }
// console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))

'11'
// function intOrString(param) {
// 	return param = +param ? 'int' : 'str' 
// }
// console.log(intOrString(3))

'12'

// function toNumberArray(arr) {
// 	return arr.map((e) => +e)
// }
// console.log(toNumberArray(["91", "44"]))

// '13'
// function match(s1, s2) {
// 	return s1 === s2.toLowerCase() ? true : false
// }
// console.log(match('venom', 'VENomM'))

// '14'

// function countClaps(str) {
// 	return str.split('C').length -1
// }
// console.log(countClaps('ClapClapClap'))

// '15'

// function newWord(str) {
// 	let arr = str.split('')
//         arr.shift()
//     return arr.join('')
// }
// console.log(newWord("apple"))

// "arrays"

// console.log('true'==true)

// num()
// function num (){
//     console.log('Hello worl')
// }

// num1()
// let num1 = function(){
// console.log('hello world')
// }

// const naming = (a) => console.log('test:', )
// naming()
// let name = 'Dilshod'
// let result = name.includes("d") ? 'Hello Dilshod' : "bye"
// console.log(result)

// let arr = new Array('10')
// console.log(arr)


// function toCsvText(array) {
//     return array.join('\n')
//  }
//  console.log(toCsvText([[ 0, 1, 2, 3, 4 ],
//     [ 10,11,12,13,14 ],
//     [ 20,21,22,23,24 ],
//     [ 30,31,32,33,34 ]]))

function first(arr, n) {
   // let sliced = arr.splice(0, n)
   // return sliced
   let newarr = []
   for(let i=0; i<n; i++){
      newarr.push(arr[i]) 
   }
   return newarr
   
}
console.log(first(['a', 'b', 'c', 'd', 'e', 'f'], 0))