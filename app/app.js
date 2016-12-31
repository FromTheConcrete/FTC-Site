
// This is the function that connects the tab with its revelant location on the website. 
//When A tab is clicked this function find the ID with the same name as the and scrolls down to it.
 //This doesn't really need to be edited or anything.


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top -110
        }, 1000);
        return false;
      }
    }
  });
});







$(document).ready(function() {
$("#submit").click(function() {
var name = $("#name").val();
var email = $("#email").val();
var message = $("#message").val();
var contact = $("#contact").val();
$("#returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (name == '' || email == '' || contact == '' || message == '') {
alert("Please Fill Required Fields");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("contact_form.php", {
name1: name,
email1: email,
message1: message,
contact1: contact
}, function(data) {
$("#returnmessage").append(data); // Append returned message to message paragraph.
if (data == "Your message has been received, We will contact you soon.") {
$("#form")[0].reset(); // To reset form fields on success.
}
});
}
});
});


// // Cache selectors
// var topMenu = $("#top-menu"),
//     topMenuHeight = topMenu.outerHeight()+15,
//     // All list items
//     menuItems = topMenu.find("a"),
//     // Anchors corresponding to menu items
//     scrollItems = menuItems.map(function(){
//       var item = $($(this).attr("href"));
//       if (item.length) { return item; }
//     });

// // Bind to scroll
// $(window).scroll(function(){
//    // Get container scroll position
//    var fromTop = $(this).scrollTop()+topMenuHeight;

//    // Get id of current scroll item
//    var cur = scrollItems.map(function(){
//      if ($(this).offset().top < fromTop)
//        return this;
//    });
//    // Get the id of the current element
//    cur = cur[cur.length-1];
//    var id = cur && cur.length ? cur[0].id : "";
//    // Set/remove active class
//    menuItems
//      .parent().removeClass("active")
//      .end().filter("[href='#"+id+"']").parent().addClass("active");
// });​