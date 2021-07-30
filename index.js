const express = require('express');
const app = express();
// serve up production assets
// app.use(express.static('material-dashboard-react-main-with-node/build'));
// // let the react app to handle any unknown routes 
// // serve up the index.html if express does'nt recognize the route
// const path = require('path');
// app.get('*', (req, res) => {
// res.sendFile(path.resolve(__dirname,  'build', 'index.html'));
// });

const root = require('path').join(__dirname, 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})
// if not in production use the port 5000
const PORT = process.env.PORT || 5000;
console.log('server started on port:',PORT);
app.listen(PORT);


