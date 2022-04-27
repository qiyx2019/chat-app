import { Subject,BehaviorSubject, Observable,of } from 'rxjs'
import { concatMap, mergeMap, map, take, takeUntil ,scan,reduce} from 'rxjs/operators'
export const $baseUrl: string = 'http://localhost:3000'
type Msg = Record<string, any>
type Uid = string
type UserMsg<T> = Array<T>
class ChatRoom {
  msg = new Subject<any>()
  saveMsg(userId: Uid, msg: Msg) {}
  findMsg(userId: Uid) {}
}
export class userChater extends ChatRoom {
  constructor() {
    super()
    this.msg = new Subject();
  }
  saveMsg(userId: Uid, msg: Msg) {
    this.msg.next(({ [userId]: msg }))
  }
  findMsg(userId: Uid): UserMsg<Msg> {
    let res:UserMsg<Msg> = [] ;
    //@ts-ignore
    this.msg.pipe(scan((x,y) => [...x,y], [])).subscribe((x) => {
      res = x;
      
    });
    return res
  }
}
