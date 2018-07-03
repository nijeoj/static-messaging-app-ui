sampleui
.controller('messageCtlr', function($scope) {
  $scope.hideSideChatBar = true;
  $scope.hideMsgBtn = false;
  var activeMsg = "msg1";

  $scope.openMessages = function(){
    $scope.hideSideChatBar = false;
    $scope.hideMsgBtn = true;
  }

  $scope.closeMessages = function(){
    $scope.hideSideChatBar = true;
    $scope.hideMsgBtn = false;
  }

  $scope.myFunction = function() {
    var x = document.getElementById("myTopnav");
    console.log(x.className);
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  $scope.readMessage = function(el) {
    var parent = document.getElementById("chat-list");
    var btns = parent.getElementsByClassName("sidebar-name");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active-message");
        current[0].className = current[0].className.replace(" active-message", "");
        this.className += " active-message";
      });
    }
  }
})
