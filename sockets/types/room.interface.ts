export interface RoomConnect {
    roomId: string
    userName: string
}

export interface RoomDisconnect extends RoomConnect {}

export interface NewMessage {
    text: string
}