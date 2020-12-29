//load up html first
$(document).ready(function(){
    console.log('LOADING!!!')
    //get the data with Moment
    console.log(moment().format("dddd, MMMM Do"));
    //put the data on the page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    // add css classes according to the time
    //get current hour
    var currentHour = moment().hours();
    console.log(currentHour);

    //forEach loop over the hour blocks
    $(".time-block").each(function(){


        //1 Make the piece of html with js 
        var timeBlockDiv = $('<div>')
        var timeDiv = $('<div>')
        var button = $('<button>')
    

        //2 Dress the html pieces up how u want htem!!
        timeBlockDiv.addClass('time-block')
        timeBlockDiv.attr('id', 'hour-')

        
        //3 append it to the page!!

        // first append all the pieces into the maind timeblocDiv we made
        timeBlockDiv.append(button, timeDiv)
        //finallt take the hwole chunk of html and append it to the page!!
        //$('#plannerBlocks').append(timeBlockDiv)


    });

    for (let i = 9; i < 18; i++) {
            console.log('looping ?', i )

        //1 Make the piece of html with js 
        var timeBlockDiv = $('<div>')
        var timeDiv = $('<div>')
        var button = $('<button>')
        var textArea = $('<textarea>')
        button.text('save')
        button.attr('name', i)
    

        //2 Dress the html pieces up how u want htem!!
        timeBlockDiv.addClass('time-block')

        if( i > 12 ) {
            var num = i - 12
            timeBlockDiv.attr('id', 'hour-' + num)
            textArea.attr('id', 'input-' +num)
        } else {
            timeBlockDiv.attr('id', 'hour-' + i)
            textArea.attr('id', 'input-' +i)
        }
    
        
        //3 append it to the page!!

        // first append all the pieces into the maind timeblocDiv we made
        timeBlockDiv.append(button, timeDiv, textArea)
        //finallt take the hwole chunk of html and append it to the page!!
        $('#plannerBlocks').append(timeBlockDiv)
        
    }




    //get the value from html for current hour block
    //var blockHour = parseInt($(this).attr("id").split("-")[1]);

    //check and see if the currentHour > or < blockHour
    //add css classes according to time
    $(this).addClass("past");


    //1 GEt all the time blocks on the page 9 - 5

    //2 When u click butotn do u know which time block hour u clicked ??

    //3 can u see text area for that corresponing hours button we clicked

    //3 Local storage save what we just typed to local stoage when we click the button

    //4 change color of text area based on hour




















})