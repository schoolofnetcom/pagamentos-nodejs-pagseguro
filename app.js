const express = require('express');
const bodyParser = require('body-parser');
const PGS = require('./pagseguro');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/pay', async (req, res) => {
    PGS.sender({ 
        name: 'Leonan Luppi',
        email: 'leonan.luppi@gmail.com',
        phone: {
            areaCode: '27',
            number: '996094456'
        }
    });

    PGS.addItem({
        id: '10',
        description: 'Payment test',
        amount: '20.00',
        quantity: '1'
    });
    // PGS.shipping({ type: 3 });

    PGS.shipping({
        type: 1,
        name: req.body.name,
        email: req.body.email,
        card: req.body.card,
        cvv: req.body.cvv,
        date: req.body.date,
        address: {
            street: 'Rua das palmeiras',
            number: '',
            city: '',
            state: '',
            country: '' 
        }
    });

    PGS.checkout((data, response) => {
        if (data) {
            return res.json({ data });
        }
        return res.json({ response });
    });
});

app.listen(3000, () => console.log(`Express has been started... env: ${process.env.NODE_ENV}`));