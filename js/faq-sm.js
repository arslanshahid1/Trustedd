$(document).ready(function() {
  // Add minus icon for collapse element which is open by default
$(".collapse.show").each(function() {
    $(this).prev(".card-header").find(".fa").addClass("fa-angle-up").removeClass("fa-angle-down");
});

// Toggle plus minus icon on show hide of collapse element
$(".collapse").on('show.bs.collapse', function() {
    $(this).prev(".card-header").find(".fa").removeClass("fa-angle-down").addClass("fa-angle-up");
    $(this).prev(".card-header").removeClass("bg-white").addClass("bg-blue");
}).on('hide.bs.collapse', function() {
    $(this).prev(".card-header").find(".fa").removeClass("fa-angle-up").addClass("fa-angle-down");
    $(this).prev(".card-header").removeClass("bg-blue").addClass("bg-white");
});

});