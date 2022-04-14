import { Item } from "src/app/auth/Models/SideItems";
export const LinksSideMenu:Item[] = [
    {
        title:'Views',
        roles: [1],
        links:[
            {
                icon: 'widgets',
                name:'Categorias',
                link:'dashboard',
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
        ]
    }
]

