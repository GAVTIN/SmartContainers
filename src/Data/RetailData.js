import { Data } from "./Data";

export const counts = {};
Data.forEach(e => counts[e.Product] ? counts[e.Product]++ : counts[e.Product] = 1 );

export const ProdName = []
export const ProdValue = []
for(let userVal in counts){
    ProdValue.push(counts[userVal])
    ProdName.push(userVal)
}