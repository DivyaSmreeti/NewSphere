const content = document.getElementById("content");

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        if ($('#sidebar').hasClass('active')) {
            content.style.width = "100%";
            content.style.marginLeft = "0";
            content.style.paddingLeft = "5%";
            content.style.paddingRight = "5%";
        } else {
            content.style.width = "";
            content.style.marginLeft = "";
        }
    });
});


  $(document).ready(function () {
    // Load existing posts from local storage when the page loads
    loadPosts();

    // Show the modal when the "New Post" link is clicked
    $('#newPostLink').on('click', function () {
      $('#newPostModal').modal('show');
    });

    // Handle form submission
    $('#newPostForm').submit(function (event) {
      event.preventDefault();

      // Get the content from the textarea
      var postContent = $('#postContent').val();

      // Append the content to the content area
      addPost(postContent);

      // Close the modal
      $('#newPostModal').modal('hide');

      // Clear the form
      $('#newPostForm')[0].reset();
    });

    // Handle post deletion
    $('#content').on('click', '.delete-post', function () {
      var postIndex = $(this).data('index');
      deletePost(postIndex);
    });

    // Function to load posts from local storage
    function loadPosts() {
      var posts = JSON.parse(localStorage.getItem('posts')) || [];
      for (var i = 0; i < posts.length; i++) {
        $('#content').append('<div class="line"></div><p>' + posts[i] + ' <button class="delete-post" data-index="' + i + '">Delete</button></p>');
      }
    }

    // Function to add a post to local storage and display it
    function addPost(postContent) {
      var posts = JSON.parse(localStorage.getItem('posts')) || [];
      posts.push(postContent);
      localStorage.setItem('posts', JSON.stringify(posts));
      $('#content').append('<div class="line"></div><p>' + postContent + ' <button class="delete-post" data-index="' + (posts.length - 1) + '">Delete</button></p>');
    }

    // Function to delete a post from local storage and remove it from display
    // function deletePost(index) {
    //   var posts = JSON.parse(localStorage.getItem('posts')) || [];
    //   posts.splice(index, 1);
    //   localStorage.setItem('posts', JSON.stringify(posts));
    //   refreshPosts();
    // }

    // Function to refresh posts on the page
    function refreshPosts() {
      $('#content').empty();
      loadPosts();
    }
  });

