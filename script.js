console.log('Hi! test GIT')
const argArr = JSON.parse(JSON.stringify(process.argv)).slice(2)

if(!argArr.length) {console.log(`no argument`); process.exit(1)}

argArr.forEach((item, index)=>{
    console.log(`****`)
    console.log(`arg index:${index+1}`)
    console.log(`arg value:${item}`)
    console.log(`****`)
})

console.log(`_____`);