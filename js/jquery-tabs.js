jQuery(function($) {
    $('#tabs-wrapper .tab').on('click', 'a', function() {
        var i = $(this).first().data('index');
        $('#tabs-wrapper div.panel').each(function(index) {
            if(index != i) {
                $(this).hide();
            } else {
                $(this).show();
            }
        });
        $('#tabs-wrapper ul li.tab').each(function() {
            $(this).removeClass('active');
        });
        $(this).parent().addClass('active');
    });

    $('#tabs-wrapper div.panel').each(function(index) {
        if(index != 0) {
            $(this).hide();
        }
    });
});
