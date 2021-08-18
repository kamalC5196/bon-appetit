export const SET_CATEGORY = 'SET_CATEGORY';
export const SET_WINE = 'SET_WINE';
export const SET_INGERIDENTS = 'SET_INGERIDENTS';

export function setCategory(items){
    return{
        type:SET_CATEGORY,
        items
    }
}

export function setWine(items){
    return{
        type:SET_WINE,
        items
    }
}

export function setIng(items){
    return{
        type:SET_INGERIDENTS,
        items
    }
}