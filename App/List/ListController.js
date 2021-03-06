import ListModel from "./ListModel.js";
import ListView from "./ListView.js";

class ListController {
    constructor(model,view){
        this.model = model;
        this.view = view;

        this.view.bindOnAddToList(this.model.addToList)
        this.model.bindOnListUpdate(this.view.listUpdate)
        this.view.bindOnCreatCat(this.model.getInfoAboutCat)
        this.view.bindOnPageLoad(this.model.onPageLoad)
        this.view.bindOnSendToLocalStorage(this.model.sendToLocalStorage)
        this.view.bindOnClearLocalStorage(this.model.clearLocalStorage)
    }
}

const list = new ListController(new ListModel, new ListView);
const {addContainer, mainDiv} = list.view;
export {addContainer as form, mainDiv as listDiv};
export default list;