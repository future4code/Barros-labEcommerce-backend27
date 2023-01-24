import app from "./app"
import createCharacter  from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"


app.get("/character", getAllCharacters)
app.put("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)

// app.get("/movie/:id/characters") //para determinado filme o endpoint retorna todos os personagens (precisaria usar o JOIN aqui e connection.raw com a mesma query)

// app.get("/movie")
// app.delete("/movies")