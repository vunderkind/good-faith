require('dotenv').config()
const server = require('./server.js');

const PORT = process.env.PORT || 5000;

server.get('/', (req, res)=> {
  res.status(200).json({message: "Good faith is now online!"})
}
);

server.get('/api', (req, res)=> {
  res.status(200).json({message: "Nothing to see here. Consider adding a '/people'"})
}
);

server.listen(PORT, () => {
  console.log(`\n*** Good Faith is Listening on port ${PORT} ***\n`);
})