
export interface Item {
    title: string;
    links: Link[];
    roles:number[];
}

export interface Link {
    name: string;
    icon:string;
    link: string;
}
