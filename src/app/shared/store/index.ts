import { NgModule } from '@angular/core';
import { IPost } from '@app/shared/interfaces/interface';
import { Store } from '@ngrx/store';

export interface ICoreState {
    post: IPost;
}

export declare type CoreStore = Store<ICoreState>;

@NgModule({
    imports: [],
    providers: [],
})
export class CoreStoreModule {}
