/*
export default function(){
    return {message:'First react redux application'};
}
*/


/*
export const reduce = {message: 'This is first react Action'};

export default function(state=reduce,action){
    switch(action.type){
        case 'SAMPLE_ACTION':
            return {message: 'This is SAMPLE_ACTION ' + action.data};
    }
    return state;
}
*/


export const reduce = {menu:['Home','Product','Contact'], itemList:{Fruits:['Orange','Banana','Apple'],Cities:['Mumbai','Pune','Delhi'],Countries:['India','USA','Australia']}};

export default function(state=reduce,action){
    
    switch(action.type){
        case 'ADD_NEW_ITEM':
        {
            var l_Fruits =  action.data.things.itemList.Fruits;
            var l_Cites =  action.data.things.itemList.Cities;
            var l_Countries =  action.data.things.itemList.Countries;
            switch(action.data.type){
            case 'Fruits':
                l_Fruits.push(action.data.item);
                break;
            case 'Cities':
                l_Cites.push(action.data.item);
                break;    
            case 'Countries':
                l_Countries.push(action.data.item);
                break;
            }
            state = {menu:['Home','Product','Contact'],itemList:{"Fruits": l_Fruits,"Cities":l_Cites,"Countries":l_Countries}};
        }
    }
    return state; 
}