// import 'slick-carousel';
// import 'slick-carousel/slick/slick.css';



myapp.controller('HomeCtrl',['$scope','$rootScope','$ionicModal',function ($scope,$rootScope,$ionicModal) {

    $scope.showNewProductModal = showNewProductModal;
    $scope.createProduct = createProduct;


    $scope.items =  $scope.$meteorCollection(function () {
        return Products.find({});
    }, false);

    // $('.home_banner').slick({
    //     dots: true,
    //     infinite: true,
    //     fade: true,
    //     arrows:false,
    //     mobileFirst:true,
    //     autoplay: true,
    //     autoplaySpeed: 3000
    // });

    $scope.$on('$destroy', function () {
        $scope.modal.remove();
    });


    function createProduct(obj) {
        console.log(obj);
        $scope.items.push(obj);
        $scope.modal.hide();
    };


    function showNewProductModal(){
        $ionicModal.fromTemplateUrl('client/templates/modals/newProduct.html', {
            scope: $scope
        }).then(function (modal) {
            $scope.modal = modal;
            $scope.modal.show();
        });
    }


}]);


// import { Controller } from 'angular-ecmascript/module-helpers';
// import {Meteor} from 'meteor/meteor';
//
//
// export default class HomeCtrl extends Controller {
//     constructor() {
//         super(...arguments);
//
//         this.helpers({
//
//         });
//     }
//     showSearchModal(){
//         this.Search.showModal();
//     }
//
// }
//
// HomeCtrl.$inject = ['$scope','$state','Search'];




