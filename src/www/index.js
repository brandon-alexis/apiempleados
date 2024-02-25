import app from '../app'
import { PORT } from '../config'
import Connection from '../libs/Connection'

app.listen(PORT, () => {
    Connection.connect()
    console.log(`Server running on port ${PORT}\nOpen in browser http://localhost:${PORT}`)
})