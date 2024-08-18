$(document).ready(function() {
    $('.photo-item').on('click', function() {
        var $this = $(this);
        var $img = $this.find('img');
        var $desc = $this.find('.photo-description');
        
        $img.attr('src', $this.data('photo'));
        $desc.text($this.data('message'));
        
        $img.removeClass('hidden').addClass('visible');
        $desc.removeClass('hidden').addClass('visible');
    });
});



// #f8c6d4
