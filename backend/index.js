//importaciones
const express = require('express');
const app = express();
const port = 3000
var morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouter = require('./routes')

//midlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended : true}));
app.use(express.json());

//configuracion
mongoose.Promise = global.Promise;
const urlDB = 'mongodb+srv://mvinasco99:3122313450mv@cluster0.tjm3l.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(urlDB)
    .then(mongoose => console.log("db conectada en atlas"))

    .catch(err => console.log(err))



app.set('PORT', process.env.PORT || 3000);

//

//uploads

// app.use(express.static("uploads"));





//manejador de rutas

app.use('/api', apiRouter);
// app.get('/', (req, res, ) => {
//     res.send('hello world desde el home');
// })
// app.get('/api', apiRouter) => {
    //     res.send('hello world desde el home');
    // })
    // app.get('/pelicula', (req, res, ) => {
        //     res.status(200).json({"Title":"Titanic","Year":"1997","Rated":"PG-13","Released":"19 Dec 1997","Runtime":"194 min","Genre":"Drama, Romance","Director":"James Cameron","Writer":"James Cameron","Actors":"Leonardo DiCaprio, Kate Winslet, Billy Zane","Plot":"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.","Language":"English, Swedish, Italian, French","Country":"United States, Mexico, Australia","Awards":"Won 11 Oscars. 125 wins & 83 nominations total","Poster":"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.8/10"},{"Source":"Rotten Tomatoes","Value":"89%"},{"Source":"Metacritic","Value":"75/100"}],"Metascore":"75","imdbRating":"7.8","imdbVotes":"1,092,075","imdbID":"tt0120338","Type":"movie","DVD":"08 Jan 2002","BoxOffice":"$659,363,944","Production":"20th Century Fox, Lightstorm Entertainment, Paramount Pictures","Website":"N/A","Response":"True"}
        
        //     )
        // })
        
        // app.listen(app.get('PORT'), () => {
            //     console.log('running on http://localhost:${app.get('PORT')}')
            // })
            

            
            
//ejecucion del server
app.listen(port, () =>{

    console.log('example escuchado port')
})