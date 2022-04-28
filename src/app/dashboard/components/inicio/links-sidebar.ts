import { Item } from "src/app/auth/Models/SideItems";
export const LinksSideMenu:Item[] = [
    {
        title:'Categorias',
        roles: [1],
        links:[
            {
                icon: 'storage',
                name:'Categorias',
                link:'categorias',
            },
            {
                icon: 'group',
                name:'Roles',
                link:'roles',
            },
            {
                icon: 'person',
                name:'Usuarios',
                link:'info',
            },
    ],
    },
    {
        title:'Account',
        roles: [1,2,3,4],
        links:[
            {
                icon: 'settings',
                name:'Configuracion',
                link:'dashboard',
            },
        ],
    }
]

