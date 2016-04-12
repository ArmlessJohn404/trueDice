
var nDices;
var vDices;
var fValue;

$(document).ready(function() {
  $('#nDices').val(1);
  $('#vDices').val(20);
  $('#dice').click(function() {
    nDices = $("#nDices").val();
    vDices = $("#vDices").val();
    fValue = [];
    for (var i = 0; i<nDices; i++) {
      fValue.push(roll(vDices))
    }
    if (fValue.length > 1){
      $('#dice').text(fValue+' Sum:'+fValue.reduce(function(a, b) {
        return a+b
      }));
    } else {
      $('#dice').text(fValue);
    }
  });
  $('#dice').mousedown(function() {
    $(this).css('opacity', '0.5');
  });
  $('#dice').mouseup(function() {
    $(this).css('opacity', '');
  });
});

function roll(diceValue) {
  return Math.round(Math.random()*(diceValue-1)+1);
}
