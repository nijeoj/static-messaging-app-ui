sampleui
.controller('messageCtlr', function($scope) {
  $scope.chat_list = [
    {
      "img" : "https://i.pinimg.com/originals/fe/15/dd/fe15dd8f704c74612ebe52ee11a1d454.jpg",
      "name" : "Jenny Kim",
      "message" : "Blackpink is the new Revolution"
    },
    {
      "img" : "https://www.google.com.ph/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi5n8LKg4PcAhXKsY8KHRepBJMQjRx6BAgBEAU&url=http%3A%2F%2Fblack-pink.wikia.com%2Fwiki%2FLisa&psig=AOvVaw3Ui3OCQkDGQxdID_qbtsdI&ust=1530710611101966",
      "name" : "Lalisa Manoban",
      "message" : "Blackpink in your area"
    }
  ];
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
