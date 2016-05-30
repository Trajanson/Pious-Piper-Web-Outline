var valid_form = true;

$(window).ready(function() {

  $('#funky').attr('disabled', true);

  $('#getPiousForm').hide();

  $('.container').on('click', function() {
    getPiousButtonClickEvent();
  });

  attachPiousFileAutoLoader();
});



var attachPiousFileAutoLoader = function() {
  document.getElementById("piousFile").onchange = function() {
    $('.container').off();
    var val = $(this).val();

    switch(val.substring(val.lastIndexOf('.') + 1).toLowerCase()){
        case 'txt':
            engageDownloadAnimation();
            break;
        default:
            $(this).val('');
            $('.container').on('click', function() {
              getPiousButtonClickEvent();
            });
            // error message here
            alert("not .txt");
            break;
          }
    console.log("file has been submitted for approval");
  };
}

var fileHasSuccessfullyUploaded = function() {
  document.getElementById("piousFile").submit();
  engageDownloadAnimation();
}

var innappropriateFileHasBeenUploaded = function() {
  location.reload();
}






var getPiousButtonClickEvent = function() {

  $('#piousFile').trigger('click');

  var fd = new FormData();
  fd.append('piousFile', $('#piousFile')[0].files[0]);

}


var engageDownloadAnimation = function() {
  $('#funky').attr('checked', 'checked');
}
