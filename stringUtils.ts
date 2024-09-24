export const reverseString = (text:string):string =>{
    return text.split("").reverse().join("");
}

export const  countCharacters=(text:string):number=> {
    return text.replace(/\s+/g, '').length;
    }


