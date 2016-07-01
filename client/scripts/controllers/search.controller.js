import {Meteor} from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
// import {Controller} from "../entities";


export default class SearchCtrl extends Controller {
    constructor() {
        super(...arguments);

        this.helpers({

        });
    }
    hideSearchModal(){
        this.Search.hideModal();
    }
    
}

SearchCtrl.$inject = ['$scope', 'Search' ,'$state'];
