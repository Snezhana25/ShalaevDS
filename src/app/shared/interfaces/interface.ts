export interface Idb {
    posts: {
        id: number,
        title: string,
        text: string
    }[],
    comments: {
       id: number,
       body: string,
       postId: number
    }[],
    profile: {
      name: string
    },
    urls: {
        posts: string,
        comments: string,
        profile: string
    }
};

export interface IPost {
    posts: {
        id: number,
        title: string,
        text: string
    }
}[];

export interface IComent {
    comments: {
        id: number,
        body: string,
        postId: number
    },
}[];

export interface IProfile {
    profile: {
        name: string
    },
};

export interface IUrls {
    urls: {
        posts: string,
        comments: string,
        profile: string
    },
};
