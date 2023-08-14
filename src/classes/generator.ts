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
}

