import {Color} from "@types";



export class Generator {
    public static  generateRandomNumber (min: number, max: number): number {
        const _min = Math.floor(min);
        const _max = Math.floor(max);
        return Math.floor(Math.random() * (_max - _min)) + _min;
    }
    public static  generateRandomNColor(min: number, max: number) {
        const r = Generator.generateRandomNumber(min, max);
        const g = Generator.generateRandomNumber(min, max);
        const b = Generator.generateRandomNumber(min, max);
        const  color: Color = {r,g,b};
        return color;
    }
    public static generateRandomString(lang: string, length: number): string {
        const rus: string = 'АаБбВвГгДдЕеЁёЖжЗзИиЙйКкЛлМмНнОоПпСсТтУуФфХхЦцЧчШшЩщЪъЫыЬьЭэЮюЯя';
        const eng: string = 'abcdefghijklmnopqrstuvwxyz';
        let output: string = '';
        switch (lang) {
            case 'ru':
                for (let i = 0; i <= length; i++)  {
                    const randomIndex = Math.floor(Math.random() * rus.length);
                    output += randomIndex
                }
                return output;

            case 'en':
                for (let i = 0; i <= length; i++)  {
                    const randomIndex = Math.floor(Math.random() * eng.length);
                    output += randomIndex
                }
                return output;

        }
        return  output
    }

    public static generateSlug(text: string, separator: string ) {
        return  String(text)
            .normalize('NFKD')
            .replace(/[\u0300-\u036f]/g, '')
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, separator)
            .replace(/-+/g, separator);
    }
}

