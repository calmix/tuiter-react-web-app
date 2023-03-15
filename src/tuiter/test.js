import React from 'react';
import { useLocation } from "react-router";

const A = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const a = parseInt(paths[2]);
    const b = parseInt(paths[3]);
    return(
    <span>{a + b}</span>
    )
   }
let cb = [76,34,27,77,45];
let hq = [88,51,109,46];
let xe = [...cb, 9, 10, 11, hq];
console.log(xe);

// const q = [123, 234, 345, 456]
// const w = [...q, 321]
// console.log("w")
// console.log(w)

const q = {a: 123, b: 234}
const w = {...q, c: 345, b: 345}
console.log(w)

// const a = {b: 2, c: 3};
// const d = {c: 4, ...a};
// const {c} = d;
// console.log(c)

// const a = {b: 21, c: 32};
// const d = {...a, c: 43};
// const e = [d, a];
// console.log(e)
// const [f, j] = e;
// console.log(f)
// console.log(f.c)

// const q = ["ewq", "dsa", "qwe", "asd", "zxc"];
// const w = q.filter((b, a) => b === "qwe");
// console.log("w");
// console.log(w);

// const q = [51, 42, 65, 24, 15]
// const w = q.findIndex(a => a === 24)
// console.log("w");
// console.log(w);

// const qwe = { asd: 123, sdf: 234 }
// const zxc = { sdf: 345, ...qwe, asd: 456, zxc: 567 }
// const { sdf, asd } = zxc
// console.log("asd & sdf")
// console.log(asd)
// console.log(sdf)

// const qwe = 234
// const asd = 234
// const zxc = [321, qwe, 432, asd, 543]
// const [ewq, rew] = zxc
// console.log("ewq & rew")
// console.log(ewq)
// console.log(rew)

// const q = [1, 2, 3, 4, 5]
// const w = q.filter(a => a > 2)
// console.log(w)

// const q = [1, 2, 3, 4, 5];
// const w = q.map(a => a === 3 ? 6 : a);
// console.log(w)


export default A