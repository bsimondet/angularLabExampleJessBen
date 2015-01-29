var mainApp = angular.module("mainApp", []);

//====================== NAVBAR CONTROLLER ============================
    mainApp.controller('navbarCtrl', function($scope){
        console.log("controller loaded!");

        $scope.pages = [
            {text: "Home", link: '/'},
            {text: "About", link: '/about'},
            {text: "Kittens", link: '/kittens'},
            {text: "404 Page", link: '/wefwrtbertbeb'},
            {text: "GPA Calculator", link: '/gpaCalculator'}
        ];
    });


//TODO
//-add color coorespoding to the GPA (red for below 2.0, yellow for 2.0-3.0, green for 3.0+
//-add data validation w/ warning messages
//-know how angular actually works
//==================== GPA CONTROLLER ====================================
    mainApp.controller('gpaCtrl', function($scope){
        $scope.classField = "";

        $scope.gradeField = "";

        $scope.creditField = "";

        $scope.classes = [
            {class:"Classes Entered"}
        ];

        $scope.grades = [
            {grade:"Grade Entered"}
        ];

        var currentGpa = 0;
        var totalCredits = 0;
        var totalGradePoint = 0;

        $scope.addClass = function(){
            if($scope.classField.length >= 1) {
                $scope.classes.push({class: $scope.classField});
                $scope.grades.push({grade: $scope.gradeField});
                totalCredits = totalCredits + parseInt($scope.creditField);
                totalGradePoint = totalGradePoint + (parseInt($scope.creditField) * parseInt(returnGradeValue($scope.gradeField)));
                currentGpa = totalGradePoint/totalCredits;
                $scope.classField = "";
                $scope.gradeField = "";
                $scope.creditField = "";
            }
        };

        $scope.currentGpa = function(){
            return currentGpa.toFixed(3);
        };

        $scope.classesInList = function(){
            return $scope.classes.length - 1;
        };

        $scope.totalCredits = function(){
            return totalCredits;
        };

        var returnGradeValue = function(str){
            if (str === "A") {
                return 4.0;
            } else if (str === "B") {
                return 3.0;
            } else if (str === "C") {
                return 2.0;
            } else if (str === "D") {
                return 1.00;
            } else {
                return 0;
            }
        };

    });

//==================== MAIN CONTROLLER ==================================
    mainApp.controller('mainCtrl', function($scope){
       console.log("controller loaded!");

       $scope.textField = "";

       // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
       $scope.data = [
           {text: "fish"},
           {text: "kittens"},
           {text: "snake"},
           {text: "badger"},
           {text: "puppies"},
           {text: "sea cucumber"},
           {text: "axolotl"}
       ];

       $scope.addData = function(){
           if($scope.textField.length >= 1) {
               $scope.data.push({text: $scope.textField});
               $scope.textField = "";
           }
       };

       $scope.removeData = function(index){
           $scope.data.splice(index, 1);
       };

       $scope.cat = function(str1, str2){
           return str1 + str2;
       };

       $scope.itemsInList = function(){
           return $scope.data.length;
       };
    });
