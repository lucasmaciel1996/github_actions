export function numberToString(num:number){
    if(isNaN(num)) throw new Error('Invalid number')

    return String(num)
}