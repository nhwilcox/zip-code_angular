zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope) {

    $scope.zipCodesFB = new Firebase('https://zips-test.firebaseio.com/');

    $scope.zipCodesFB.orderByChild("digit3").equalTo(4).on("child_added", function(snapshot) {
        console.log(snapshot.key() + " is " + snapshot.val().digit3);
        console.log(35928349850293845709238457);
    });



    // $scope.zipCodesFB.on('value', function(snapshot) {
    //
    //     $scope.allZipCodes = snapshot.val();



        // for (i = 0; i < $scope.allZipCodes.length; i++) {
        //   console.log(i);
        //   console.log($scope.allZipCodes[i].city);
        //   console.log($scope.allZipCodes[i].zipCode);
        // }


    // });


});
