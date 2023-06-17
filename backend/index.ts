import 'dotenv/config'
import { Server } from "socket.io";
import {NewMessage, RoomConnect, RoomDisconnect} from "../sockets/types/room.interface";

const PORT = Number(process.env.BACKEND_SOCKET_PORT) || 8080

const io = new Server({});

io.on("connection", (socket) => {
    console.log(`New connection --> ${socket.id}`)

    socket.on("RoomConnect", (data: RoomConnect) => {
        console.log(data)
        socket.write("test")
    })

    socket.on("RoomDisconnect", (data:RoomDisconnect) => {
        console.log(data)
        socket.write("test")
    })

    socket.on("NewMessage", (data: NewMessage) => {
        console.log(data)
    })

    socket.conn.on("close", () => {
        console.log(`Disconnection --> ${socket.id}`)
    })
});

try {
    io.listen(PORT)
    console.log(`Socket.io backend server started on ${PORT}`)
}
catch (e){
    console.log(e)
}