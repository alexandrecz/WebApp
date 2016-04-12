(function () {
    'use strict';

    angular.module("app").directive('labelColor', function labelColor() {

        var successLabelColor = 'label label-success';
        var dangerLabelColor = 'label label-danger';
        var directive = {

            link: link,
            scope: {
                condition: '=',
                val: '@'
            },
            template: '<span ng-model="condition">{{val}}</span>',
            restrict: 'E'
        };
        return directive;

        function link(scope, element, attrs) {

            scope.$watch('condition', function (newValue, oldValue) {

                if (newValue) {
                    attrs.$set('class', dangerLabelColor);
                }
                else {
                    attrs.$set('class', successLabelColor);
                }
            }, true);

        }
    });

})();