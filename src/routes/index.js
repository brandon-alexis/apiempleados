import { Router } from 'express'
import { readdirSync } from 'fs'
import path from 'path'

export const router = Router()
const ROOT_PATH = `${__dirname}`

const cleanFilename = ({ filename }) => {
    if (typeof filename !== "string") throw new Error("Filename must be string type")
    return filename.split('.').shift()
}

readdirSync(ROOT_PATH).filter((filename) => {
    const cleanedFilename = cleanFilename({ filename })

    if (cleanedFilename !== 'index') {
        import(path.join(ROOT_PATH, cleanedFilename)).then((module) => {
            router.use(`/api/${cleanedFilename}`, module.router)
        }).catch((error) => {
            console.error(error, `There was a error loading route /api/${cleanedFilename}`)
        })
    }
})
