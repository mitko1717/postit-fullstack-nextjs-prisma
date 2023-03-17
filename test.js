const arr = [1,2,3]
const obj = {a: 1, b: 2}

const {a, b} = obj
const newObj = {...obj, c: 3}
const [c, d, e] = arr
const o = {}
Object.assign(o, newObj)
// console.log('o', o);

const checkPalin = (str) => {
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            console.log('false');
        } else console.log('true');
    }
}

checkPalin('qwe1wq')
