export const $baseUrl: string = 'http://localhost:3001'
type Msg = Record<string, any>
type Uid = string
type UserMsg<T> = Array<T>
class ChatRoom {
  msg = new Map()
  saveMsg(userId: Uid, msg: Msg) {}
  findMsg(userId: Uid) {}
}
export class userChater extends ChatRoom {
  constructor() {
    super()
    this.msg = new Map()
  }
  saveMsg(userId: Uid, msg: Msg) {
    console.log(userId, msg, 'msg')
  }
  findMsg(userId: Uid): UserMsg<Msg> {
    console.log(this.msg, 'userId')
    let res: UserMsg<Msg> = []
    //@ts-ignore
    return res
  }
}
export const httpRequest = async (url_:string, data:any,method:methodType) => {
  console.log( $baseUrl + url_)
  let dataSource:any = await uni.request({
    url: $baseUrl + url_,
    method,
    data,
  })
  return dataSource['data']
}
