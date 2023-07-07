type PcBrand = {
    name: string,
    country: string,
    createdAt: Date
}

type WellKnowBrands = 'apple' | 'lenovo' | 'google'


type MyPcRecord = {
    [BrandKey in WellKnowBrands]?: PcBrand
}

const myPcCatalog: MyPcRecord = {
    apple: {
        country: 'USA',
        name: 'Best',
        createdAt: new Date()
    }
}



export {}