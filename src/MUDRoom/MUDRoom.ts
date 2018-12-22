import uuid from 'uuid'

export class MUDRoom {
  roomID: string

  constructor(private config: MUDRoomConfig) {
    this.roomID = uuid()
    console.log(this.roomID)
  }
}

export class MUDRoomConfig {}
