$(function(){
        $('#clickBtnMore, #clickBtnLess').click(function(){
            var $number = $('#clickNmb').text();
            if($(this).attr('id') == 'clickBtnMore'){ // si on clique sur le bouton +
                $number++; // augmenter la valeur
                $('#clickNmb').text($number);
            }else{ // ou sinon
                $number--; // baisser la valeur
                $('#clickNmb').text($number);
            }
        });
});
