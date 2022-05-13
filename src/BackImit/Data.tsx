interface Phone {
    [key: string]: string | boolean
}

interface Translate {
    [key: string]: string
}

export default class getData{
    //Ф-ция возвращает необходимое количество телефонов с конкертными id,
    // если id меньше чем необходимое количество, то берутся еще не выбранные модели

    static getPhoneId(count:number,ids:string[]):Phone[]{
        const mass = this.getModelPhone()
        const phones:Phone[] = []
        ids.map(el=>{
            const i:number= mass.findIndex(el2=>el==el2.id)
            if(i!=-1 && phones.length!=count){
                phones.push(mass[i])
                mass.splice(i,1)
            }
        })
        if(phones.length!=count){
            mass.forEach(el=>{
                if(phones.length!=count){
                    phones.push(el)
                }
            })
        }
        return phones
    }

    static getCountPhone():number{
        return this.getModelPhone().length
    }

    static getModelPhone(): Phone[]{ //Имитация получения json данных с БД
        return [{
            id:"0",
            Manufacturer: "Tecno",
            Name:"Tecno Pova 2",
            Year: "2021",
            Diagonal: "6.95",
            Country: "Китай",
            Memory: "128",
            Frequency: "60",
            NFC: true,
            ESIM: false,
            Wireless: false,
            Price: "15999",
            img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/57fc2017e23cd87431f1f9330de87914/4d45169fc1e2adcabbd150c30a2fca53606d2714a4eddbba65b4f3508fb46513.jpg.webp"
        }
        ,{
            id:"1",
            Manufacturer: "Realme",
            Name:"realme GT Neo2 5G",
            Year: "2021",
            Diagonal: "6.67",
            Country: "Корея",
            Memory: "128",
            Frequency: "120",
            NFC: true,
            ESIM: true,
            Wireless: false,
            Price: "47999",
            img:"https://c.dns-shop.ru/thumb/st4/fit/500/500/1f4fb5f015c2ab320014466775b802f2/eb8883ea0b71b2596d6372e4e1cde988c1d576eb4185292802786875876e3a09.jpg.webp"
        }
        ,{
            id:"2",
            Manufacturer: "Xiaomi",
            Name:"Xiaomi Redmi Note 10 Pro",
            Year: "2022",
            Diagonal: "6.67",
            Country: "Тайвань",
            Memory: "128",
            Frequency: "120",
            NFC: true,
            ESIM: false,
            Wireless: false,
            Price: "28999",
            img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/4689f33294b13ea3bc660952d2654162/499fa2e2bc067ddb5c95c057bebcfb4ef2efbe9bbece25a237c8710221fdd92e.jpg.webp"
        },
            {
            id:"3",
            Manufacturer: "Samsung",
            Name:"Samsung Galaxy A52",
            Year: "2020",
            Diagonal: "6.5",
            Country: "США",
            Memory: "256",
            Frequency: "240",
            NFC: true,
            ESIM: true,
            Wireless: true,
            Price: "34999",
            img:"https://c.dns-shop.ru/thumb/st4/fit/500/500/fce4ccc04a240486b8f70fd7b0a0a151/7baf9bf7159e6fa32d9b2666bd0d1c9b277d6f3931dfea7aa881e8362fdf9313.jpg.webp"
        }
        ,{
            id:"4",
            Manufacturer: "Apple",
            Name:"Apple iPhone 11",
            Year: "2019",
            Diagonal: "6.1",
            Country: "США",
            Memory: "128",
            Frequency: "120",
            NFC: true,
            ESIM: true,
            Wireless: true,
            Price: "53699",
            img: "https://c.dns-shop.ru/thumb/st4/fit/500/500/843ec75d91c3e5957b4953bb886d3620/05aabefc975b3b0cdab83157f5f68548b21ece90ce7ac0e6dee0b1ac8dd0e34f.jpg.webp"
        }
        ,{
            id:"5",
            Manufacturer: "POCO",
            Name:"POCO X3 Pro",
            Year: "2022",
            Diagonal: "6.67",
            Country: "Корея",
            Memory: "256",
            Frequency: "120",
            NFC: true,
            ESIM: true,
            Wireless: false,
            Price: "25999",
            img:"https://c.dns-shop.ru/thumb/st4/fit/500/500/facff30fb9d81d598bcef90a69a262b7/7ac7efc5577b9bfa81689d0221b689dd215c1335eae987755d21a560d9a267c8.jpg.webp"
        },{
            id:"6",
            Manufacturer: "Xiaomi",
            Name:"Xiaomi Redmi 9C",
            Year: "2020",
            Diagonal: "6.53",
            Country: "Китай",
            Memory: "128",
            Frequency: "60",
            NFC: true,
            ESIM: false,
            Wireless: true,
            Price: "14999",
            img:"https://c.dns-shop.ru/thumb/st1/fit/500/500/bd4aeda7767ebe3746378d2d14f3a74e/0c8351bfaf69a184ff18d3cd52e921b379ec908df02d39ec4cbebc8a4e36d286.jpg.webp"
        },{
            id:"7",
            Manufacturer: "Honor",
            Name:"Honor 50 Lite",
            Year: "2021",
            Diagonal: "6.67",
            Country: "Китай",
            Memory: "128",
            Frequency: "65",
            NFC: true,
            ESIM: false,
            Wireless: false,
            Price: "21999",
            img:"https://c.dns-shop.ru/thumb/st1/fit/500/500/112342b3c12c5a8e9085c4fd178b3ba0/ddf0ced23c2e7e84a3b944e23da4d382170fcc53c20330e1b92051f42ceac745.jpg.webp"
        }
        ];
    }

    static getTranslate():Translate{
        return {
            Manufacturer: "ПРОИЗВОДИТЕЛЬ",
            Name: "НАЗВАНИЕ",
            Year: "ГОД РЕЛИЗА",
            Diagonal: "ДИАГОНАЛЬ ЭКРАНА (ДЮЙМ)",
            Country: "СТРАНА ПРОИЗВОДИТЕЛЬ",
            Memory: "ОБЪЕМ ПАМЯТИ",
            Frequency: "ЧАСТОТА ОБНОВЛЕНИЯ ЭКРАНА",
            NFC: "NFC",
            ESIM: "ПОДЕРЖКА ESIM",
            Wireless: "ПОДДЕРЖКА БЕСПРОВОДНОЙ ЗАРЯДКИ",
            Price: "СТОИМОСТЬ",
        }
    }

}