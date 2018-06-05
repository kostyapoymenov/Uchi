$(document).ready(function(){
    var numOne          = $('.num-one'),
        numTwo          = $('.num-two'),
        numResult       = $('.num-result'),
        queryResult     = $('.query-result'),
        arrow           = $('.arrow'),
        arrowInputOne   = $('.arrow-input-one'),
        arrowInputTwo   = $('.arrow-input-two'),
        block           = $('.main-container'),
        random; 

    randomNumOne();
    randomNumTwo();
    ShowArrowOne();

    arrowInputOne.on('input', function() {
        numInput(arrowInputOne, numOne);
    });

    arrowInputTwo.on('input', function() {
        numInput(arrowInputTwo, numTwo);
        if( arrowInputTwo.val() == +numTwo.html() ){
            queryResult.hide();
            numResult.show();
        }
       
    });

    numResult.on('input', function() {
        resultInput();
    });

    function randomNum(min, max) {
        random = min - 0.5 + Math.random() * (max - min + 1);
        random = Math.round(random);
        return random;
    }

    function randomNumOne() {
        randomNum(6, 9);
        numOne.html(random);
    }
    
    function randomNumTwo() {
        if(random == 6){
            randomNum(5,8);
            numTwo.html(random);
            return 
        };
        if(random == 7){
            randomNum(4,7);
            numTwo.html(random);
            return 
        };
        if(random == 8){
            randomNum(3,6);
            numTwo.html(random);
            return 
        };
        if(random == 9){
            randomNum(2,5);
            numTwo.html(random);
            return 
        }
    }

    function numInput(arrowInp, num) {

        const   arrowInputOneVal = arrowInp.val();

        if( arrowInputOneVal == +num.html() ){
            arrowInp.removeClass('color-text-red');
            num.removeClass('background-yellow');
            arrowInp.hide();
            arrowInp.siblings('.arrow-replace').html(arrowInputOneVal);
            
            ShowArrowTwo();

        } else {
            arrowInp.addClass('color-text-red');
            num.addClass('background-yellow');
        }
    }

    function resultInput() {
        let numResultVal = numResult.val();

        if (numResultVal == ( +numOne.html() + +numTwo.html() )){
            numResult.removeClass('color-text-red');
            queryResult.html(numResultVal);
            numResult.hide();
            queryResult.show('200');
            $('.message').show('300');
        } else {
            numResult.addClass('color-text-red');
        }
    }

    function ShowArrowOne() {
        let width       = numOne.html() * 4.5 + '%',
            arrowOne    = $('.arrow-one');

        arrowOne.css('width', width);
    }

    function ShowArrowTwo() {
        let widthArrowOne   = $('.arrow-one').css('width'),
            widthArrowTwo   = numTwo.html() * 4.5 + '%',
            arrowTwo        = $('.arrow-two'),
            paddingLeft     = block.css('padding-left');
              
            arrowTwo.show();
            arrowTwo.css({
                'width': widthArrowTwo, 
                'left': (parseFloat(paddingLeft) + parseFloat(widthArrowOne))
            });
    }

});