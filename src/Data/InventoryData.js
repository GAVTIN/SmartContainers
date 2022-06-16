import { Data } from "./Data";

const datas = {};
Data.forEach(e => datas[e.Type] ? datas[e.Type]++ : datas[e.Type] = 1 );

export const Product = []
export const Count = []
for(let userVal in datas){
    Count.push(datas[userVal])
    Product.push(userVal)
}