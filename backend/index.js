const express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());
app.use(express.json());

let books = [
    {
        id: 1,
        title: 'Sinuhe egyptiläinen',
        author: 'Mika Waltari',
        description:
            'Sinuhe on löytölapsi, joka kasvaa köyhän lääkärin poikana Thebassa. Hän valmistuu itsekin lääkäriksi ja toimii faaraon aivokirurgina. Monien myrskyisten vaiheiden, rakkauksien ja pettymyksien jälkeen hän muistelee maanpakolaisena itäisen meren rannalla nuoruuttaan ja hulluuttaan.',
    },
    {
        id: 2,
        title: 'Muumipappa ja meri',
        author: 'Tove Jansson',
        description:
            'Keskellä avomerta on kartassa piste, jota pikku Myy väittää kärpäsenliaksi. Mutta se on kuin onkin saari, yrmeä pieni majakkasaari. Sinne muumiperhe purjehtii turvallisesta laaksostaan, sillä Muumipappa ei halua enää olla vain tassutteleva, tarpeeton perheenisä.',
    },
    {
        id: 3,
        title: 'Puhdistus',
        author: 'Sofi Oksanen',
        description:
            'Sofi Oksasen Puhdistus avaa Viron vaiettua lähihistoriaa yhden suvun naisten kokemusten kautta.',
    },
];

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);
    const book = books.find((book) => book.id === id);

    if (book) {
        res.json(book);
    } else {
        res.status(404).end();
    }
});

app.delete('/api/books/:id', (req, res) => {
    const id = Number(req.params.id);
    books = books.filter((book) => book.id != id);
    res.status(204).end();
});

app.post('/api/books', (req, res) => {
    if (req.body.title === undefined) {
        return res.status(400).json({ error: 'Book title missing' });
    } else if (req.body.author === undefined) {
        return res.status(400).json({ error: 'Author missing' });
    }

    const nextId =
        books.length > 0 ? Math.max(...books.map((n) => n.id)) : 0;

    const book = req.body;
    book.id = nextId + 1;

    books = books.concat(book);

    res.json(book);
});

app.put('/api/books/:id', (req, res) => {
    const newBook = req.body;
    const id = newBook.id;

    books = books.map((book) => (book.id === id ? newBook : book));
    res.json(books);
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
