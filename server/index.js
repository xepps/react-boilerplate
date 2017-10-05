const app = require('./app');

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`App listening on port ${PORT}!`);
});
