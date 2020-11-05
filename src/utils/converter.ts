export const getColorSymbol = (symbol: string) => {
    const symbolLoverCase = symbol.toLocaleLowerCase()

    switch (symbolLoverCase) {
        //English
        case 'a':
        case 'b':
        case 'c':
        case 'd':
        case 'e':
        //Russian
        case 'а':
        case 'б':
        case 'в':
        case 'г':
        case 'д':
            return 'rgb(0,23,226)'
        //English
        case 'f':
        case 'g':
        case 'h':
        case 'i':
        case 'j':
        //Russian
        case 'е':
        case 'ж':
        case 'з':
        case 'и':
        case 'к':
            return 'rgb(226,10,39)'
        //English
        case 'k':
        case 'l':
        case 'm':
        case 'n':
        case 'o':
        //Russian
        case 'л':
        case 'м':
        case 'н':
        case 'о':
        case 'п':
            return 'rgb(10,154,226)'
        //English
        case 'p':
        case 'q':
        case 'r':
        case 's':
        case 't':
        //Russian
        case 'р':
        case 'с':
        case 'ф':
        case 'т':
        case 'у':
            return 'rgb(158,226,62)'
        //English
        case 'u':
        case 'v':
        case 'w':
        case 'y':
        case 'z':
        //Russian
        case 'х':
        case 'ц':
        case 'ч':
        case 'ш':
        case 'щ':
        case 'э':
        case 'ю':
        case 'я':
            return 'rgb(165,43,226)'
        default: return 'rgb(226,90,6)'
    }
}