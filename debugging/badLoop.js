/*
to start debug:
node inspect badLoop.js

watch values:
watch('totalOrders')
watch('i')

c - continue to next break
n - next line
s - step into function
o - step out of function
*/

let orders = [341, 454, 198, 264, 307];

let totalOrders = 0;
for (let i = 0; i <= orders.length; i++) {
    totalOrders += orders[i];
}

console.log(totalOrders);