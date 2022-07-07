export interface Product {
    id?: number;
    name: string;
    description: string;
    category: string;
    imageURL: string;
    price: number;
    quantity: number;
}

export const products = [
    {
        id: 1,
        name: 'Phone XL',
        description: 'A large phone with one of the best screens',
        category: 'Laptop, Tablete & Telefoane',
        imageURL: 'image1',
        price: 800,
        quantity: 1
    },

    {
        id: 2,
        name: 'OLED PC Display',
        description: 'A 32inch OLED diplay for PC',
        category: 'PC, Periferice & Software',
        imageURL: 'image2',
        price: 1000,
        quantity: 1
    },

    {
        id: 3,
        name: '65TV2022',
        description: 'A 65inch 4K TV',
        category: 'TV Audio-Video & Foto',
        imageURL: 'image3',
        price: 1500,
        quantity: 1
    }
];