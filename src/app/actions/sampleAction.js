/*
export default function(){
   //  alert('Event sampleAction');    
    return{
            type:'SAMPLE_ACTION',
            data: Math.floor(Math.random()*1000)
        }
}

*/




function addItem(item,type,things){  
    return{
            type:'ADD_ITEM',
            data: {'type':type, 'item': item, 'things':things}
        }
}


export {
	addItem
}