import {formatMoney} from '../Scripts/utils/money.js';
console.log('fuck')
if(formatMoney(2095) === '20.95')
    console.log('passed');

else
    console.log('failed');
if(formatMoney(0) === '0.00')
    console.log('passed');

else
    console.log('failed');
if(formatMoney(2000.5) === '20.01')
    console.log('passed');

else
    console.log('failed');