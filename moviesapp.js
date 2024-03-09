$(document).ready(function(){
    // Function to add movie to the list
    function addMovie(title, rating) {
      let movieItem = $('<div class="movie"><strong>Title:</strong> ' + title + ' <strong>Rating:</strong> ' + rating + ' <button class="removeBtn">Remove</button></div>');
      $('#moviesList').append(movieItem);
      rating >= 10;
      if (title === 'string' && title.length >= 2) {
        return true; // Input is valid
        } else {
        return false; // Input is not valid
    }
    };
    
    // Submit form event
    $('#movieForm').submit(function(e){
      e.preventDefault();
      let title = $('#title').val();
      let rating = $('#rating').val();
      addMovie(title, rating);
      // Reset form fields
      $('#title').val('');
      $('#rating').val('');
    });
    
    // Remove movie event
    $('#moviesList').on('click', '.removeBtn', function(){
      $(this).parent('.movie').remove();
    });
  });