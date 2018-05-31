(function() {
  var app = angular.module('blogApp', []);

  app.directive('repeatDone', function() {
    return function(scope, element, attrs) {
        if (scope.$last) {
          // runIsotope();
          setUpFilter();
        }
    }
  });
  app.controller('BlogController', ['$scope', '$http', function($scope, $http) {
    $scope.getRandomSpan = function() {
      return Math.floor((Math.random() * 100) + 1);
    };
    var blog = this;
    blog.title = "AngularJS Blog App";

    blog.posts = {};
    $http.get('https://morteza94.pythonanywhere.com/posts/').success(function(data) {
      blog.posts = data;
    });
    blog.colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink'];
    blog.tab = 'blog';

    blog.selectTab = function(setTab) {
      blog.tab = setTab;
    };

    blog.isSelected = function(checkTab) {
      return blog.tab === checkTab;
    };

    // blog.post = {};
    // blog.addPost = function() {
    //   blog.post.createdOn = Date.now();
    //   blog.post.comments = [];
    //   blog.post.likes = 0;
    //   blog.posts.unshift(this.post);
    //   blog.tab = 0;
    //   blog.post = {};
    // };

  }]);

  app.controller('CommentController', function() {
    this.comment = {};
    this.addComment = function(post) {
      this.comment.createdOn = Date.now();
      post.comments.push(this.comment);
      this.comment = {};
    };
  });

})();
