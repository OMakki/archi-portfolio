$(window).on('load', function() {
    let drawingPosition = 0;
    let photoPosition = 0;

    setTimeout(function(){
        $('#work_title').animate({'left': 0}, 2000, 'swing');
    }, 500);

    $('#drawing_arrow_left').on('click', function () {
        if (drawingPosition === 0) {
            return false;
        }
        let left_px = -((drawingPosition - 1) * 100) + '%';
        $('#drawing_area').animate({'left': left_px}, 1000, 'swing');
        drawingPosition--;
    });

    $('.hub_main #drawing_arrow_right').on('click', function () {
        if (drawingPosition === 9) {
            return false;
        }
        let right_px = -((drawingPosition + 1) * 100) + '%';
        $('#drawing_area').animate({'left': right_px}, 1000, 'swing');
        drawingPosition++;
    });

    $('.museum_main #drawing_arrow_right').on('click', function () {
        if (drawingPosition === 8) {
            return false;
        }
        let right_px = -((drawingPosition + 1) * 100) + '%';
        $('#drawing_area').animate({'left': right_px}, 1000, 'swing');
        drawingPosition++;
    });

    $('#photo_arrow_left').on('click', function () {
        if (photoPosition === 0) {
            return false;
        }
        let left_px = -((photoPosition - 1) * 100) + '%';
        $('#photo_area').animate({'left': left_px}, 1000, 'swing');
        photoPosition--;
    });

    $('.hub_main #photo_arrow_right').on('click', function () {
        if (photoPosition === 4) {
            return false;
        }
        let right_px = -((photoPosition + 1) * 100) + '%';
        $('#photo_area').animate({'left': right_px}, 1000, 'swing');
        photoPosition++;
    });

    $('.museum_main #photo_arrow_right').on('click', function () {
        if (photoPosition === 13) {
            return false;
        }
        let right_px = -((photoPosition + 1) * 100) + '%';
        $('#photo_area').animate({'left': right_px}, 1000, 'swing');
        photoPosition++;
    });
});
