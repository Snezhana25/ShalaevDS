import { IPost } from '@app/shared/interfaces/interface';

export interface IPostState {
    current: IPost;
}

export const initialPostState: IPostState = {
    current: null,
};
