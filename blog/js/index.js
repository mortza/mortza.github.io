(function(angular) {
  var app = angular.module('blogApp', ['ngAnimate']);

  app.controller('BlogController', ['$scope', '$http', function($scope, $http) {
    var blog = this;
    $scope.show_index_loader = true;
    blog.title = "AngularJS Blog App";

    blog.posts = {};
    $http.get('http://127.0.0.1:8000/posts/').then(function(response) {
      $scope.posts = response.data;
      $scope.show_index_loader = false;
    }, function(error) {});
    // console.log(blog.posts);
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

})(window.angular);