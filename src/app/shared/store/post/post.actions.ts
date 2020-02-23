import { Action } from '@ngrx/store';
import { IPost } from '@app/shared/interfaces/interface';

export const LOAD_POST = '[Post] Load';
export const LOAD_POST_FAIL = '[Post] Load Fail';
export const LOAD_POST_SUCCESS = '[Post] Load Success';

export class LoadPost implements Action {
  readonly type = LOAD_POST;
}

export class LoadPostFail implements Action {
  readonly type = LOAD_POST_FAIL;
  constructor(public payload: any) {}
}

export class LoadPostSuccess implements Action {
  readonly type = LOAD_POST_SUCCESS;
  constructor(public payload: IPost) {}
}

export type PostActions =
    | LoadPost
    | LoadPostFail
    | LoadPostSuccess;
