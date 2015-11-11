zipCodeApp.controller('ZipCodesCtrl', function ZipCodesCtrl($scope, $firebaseArray) {

    // create firebase reference
    $scope.myData = new Firebase('https://incandescent-heat-6705.firebaseio.com/');

    /**
    call the 'on' method on the reference object. this method receives two
    arguments: an event type(string), and a callback function that fires
    when the specified event occurs. 'value' will trigger once with the
    initial data stored at this location, and then trigger again each time the
    data changes. the data snapshot passed to the callback will be for the
    location as which on() was called. it won't trigger until the entire
    contents has been synchronized. if the location has no data, it will be
    triggered with an empty DataSnapshot.
    **/
    
    // unsure if this approach is correct
    $scope.myData.on('value', function(snapshot) {
        console.log(snapshot.val());

        $scope.allZipCodes = snapshot.val();
        // console.log(allZipCodes.Zipcode);
    });

});
