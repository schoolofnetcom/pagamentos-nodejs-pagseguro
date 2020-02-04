const Pagseguro = require('pagseguro-nodejs');

const mode = process.env.NODE_ENV === 'development' ? Pagseguro.MODE_SANDBOX : Pagseguro.MODE_PAYMENT;
const token = process.env.NODE_ENV === 'development' ? 'BDDA84FCC96B452D934081B3A849CAF9' : '4fa4339e-a0c2-4eb4-91f3-18f402c27c2e925d40a044d2bd67ad6a35b0931905bbb61b-3781-4a18-af8e-5d5a6a8a759b';

const pag = new Pagseguro({
    email: 'leonan.luppi@gmail.com',
    token,
    mode
});

pag.currency('BRL');
pag.reference('LEONAN123');

module.exports = pag;