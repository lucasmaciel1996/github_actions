export function numberToString(num:number){
    if(isNaN(num)) throw new Error('Invalid number')

    if(num<10) throw new Error('Number < 10')

    return String(num)
}