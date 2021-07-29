//import
const path=require('path')
const movieBook = require("./movieBook.js") //data
const express=require('express')
// const fs= require('fs') (deleted)
// const morgan = require("morgan"); (deleted)

//create the server 
const app=express()
const server=app.listen(1234)

//Middleware
app.use(express.static(path.join(__dirname, 'public')))
//app.use(morgan('dev')) //??Is this necessary??

//GET /
app.get('/', function(req,res){
    const movies = movieBook.list(); //it is a copied array
    const html = `<!DOCTYPE html>
    <html>
    <head>
      <title>Movie Book</title>
      <style>
      *{
        text-align:center
      }
      </style>
    </head> 
    <body>
      <h1>MovieBook</h1>
         <ul style="list-style-type:none;">
         ${movies.map(movie=>{
           return ` 
           <li>
             <a href='/movies/${movie.id}'> 
             ${movie.title}
             </a> 
           </li>`
            }).join('')
           }     
         </ul>
    </body>
    </html>`
    res.send(html) 
})

//GET /subpage

app.get('/movies/:id', function(req,res){
    const movies = movieBook.list();
    const movie = movies.find(movie => movie.id === +req.params.id)
    const html2 =`<!DOCTYPE html>
    <html>
    <head>
      <title>${movie}</title>
      <style>
      *{
        text-align:center
      }
      </style>
    </head> 
    <body>
      <h1>MovieBook</h1>
      <h2> ${movie.title} </h2>
      <p>
      Genre: ${movie.genre} 
      </p>
      <p>
      Synopsis: ${movie.synopsis}
      </p>
    </body>`  
    res.send(html2)
})
