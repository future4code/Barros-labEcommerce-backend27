import { Request, Response } from "express"
import connection from "../connection"
import { character } from "../types"

export default async function getAllCharacters(
    req:Request,
    res:Response
):  Promise<void> {

    try {
        const {name, orderBy, orderType, page} = req.query

        // const result: character[] = await connection.raw("SELECT * FROM character")
        // res.send(result[0])

        // Páginas e o valor do offset

        const resultsPerPage = 5
        // página 1 -> offset 0 === 5 * 0
        // página 2 -> offset 5 === 5 * 1 despreza os 5 primeiros resultados
        // página 3 -> offset 10 === 5 * 2 despreza os 10 primeiros resultados

        const offset = resultsPerPage * (Number(page) - 1) //solicitação do front chega como string (transformo em número)

        const characters: character[] = await connection("character")
            .where("name", "LIKE", `%${name}%`)
            .orderBy(orderBy as string || "name", orderType as string)
            .offset(offset)

        res.send(characters)
    } catch (error) {
        res.status(500).send("Unexpected server error")
    }
}