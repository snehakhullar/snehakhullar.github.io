/*
source http://razorjack.net/quicksand/demos/one-set-clone.html
*/
// Custom sorting plugin
(function($) {
  $.fn.sorted = function(customOptions) {
    var options = {
      reversed: false,
      by: function(a) { return a.text(); }
    };
    $.extend(options, customOptions);
    $data = $(this);
    arr = $data.get();
    arr.sort(function(a, b) {
      var valA = options.by($(a));
      var valB = options.by($(b));
      if (options.reversed) {
        return (valA < valB) ? 1 : (valA > valB) ? -1 : 0;				
      } else {		
        return (valA < valB) ? -1 : (valA > valB) ? 1 : 0;	
      }
    });
    return $(arr);
  };
})(jQuery);

// DOMContentLoaded
$(function() {

  // bind radiobuttons in the form
  var $filterType = $('#filter a[name="type"]');
  //var $filterSort = $('#filter input[name="sort"]');

  // get the first collection
  var $applications = $('#applications');

  // clone applications to get a second collection
  var $data = $applications.clone();

  $("#all").click(function(){
	 var selected=$(this);
	});

  $("#website").click(function(){
	 var selected=$(this);
	});

  $("#app").click(function(){
	 var selected=$(this);
	});

  $("#instal").click(function(){
	 var selected=$(this);
	});

  $("#oth").click(function(){
	 var selected=$(this);
	});

  // attempt to call Quicksand on every form change
  $filterType.change(function(e) {
    if ( selected.val() == 'all') {
      var $filteredData = $data.find('li');
    } else if ( selected.val() == 'website'){
      var $filteredData = $data.find('li[data-type=website]');
    } else if ( selected.val() == 'app'){
      var $filteredData = $data.find('li[data-type=app]');
    } else if ( selected.val() == 'instal'){
      var $filteredData = $data.find('li[data-type=instal]');
    } else {
      var $filteredData = $data.find('li[data-type=oth]');
    } 

    // finally, call quicksand
    $applications.quicksand($filteredData, {
      duration: 800,
      easing: 'easeInOutQuad'
    });

  });

});