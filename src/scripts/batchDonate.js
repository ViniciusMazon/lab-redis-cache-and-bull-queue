import axios from 'axios';

const LIMIT = 500;
const DONATION_VALUE = 1;

for (var i = 1; i <= LIMIT; i++) {
    axios.post('http://localhost:3000/api/v1/donations.donate', {
        id: 1,
        value: DONATION_VALUE
    });

    console.log(`${i} ...`);
}

console.log(`${LIMIT}... ok!`)
