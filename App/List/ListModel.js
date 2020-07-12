function isEmpty(text){
    if(text.trim()){
        return false
    }
    return true
}


export default class ListModel {
    constructor(){
        this.list = []
    }
    
    addToList = (element) => {
        if(!isEmpty(element.value)){
            this.update(element);
            element.value="";
        }
    }

    bindOnListUpdate = (cb) => {
        this.update = cb;
    }
}