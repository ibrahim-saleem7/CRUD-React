export interface IProduct {
    id: number
    title: string
    description: string
    price: string
    image: string
    colors: string[]
    category: {
        name: string
        image: string
    }
}