import * as A from './post.actions';

import { IPostState, initialPostState } from './post.model';

export function postReducer(
    // tslint:disable-next-line:typedef
    state = initialPostState,
    action: A.PostActions,
): IPostState {

  switch (action.type) {
    case A.LOAD_POST:         return {...state };
    case A.LOAD_POST_SUCCESS: return {...state, current: action.payload};
    case A.LOAD_POST_FAIL:    return {...state,  current: action.payload};
  }

  return state;
}
