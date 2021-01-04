//load up html first
$(document).ready(function () {

    console.log('LOADING!!!')
    //get the data with Moment
    console.log(moment().format("dddd, MMMM Do"));
    //put the data on the page
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    //get current hour
    var currentHour = moment().hours();
    console.log(currentHour);

    var timeBlockDiv;
    var timeDiv;
    var button;
    var textArea;

    for (let i = 9; i < 18; i++) {
        console.log('looping ?', i);

        //1 Make the piece of html with js 
        timeBlockDiv = $('<div>');
        timeDiv = $('<div>');
        button = $('<button>');
        textArea = $('<textarea>');
        var icon = $("<i>");

        //2 Dress the html pieces up how u want htem!!
        timeBlockDiv.addClass('row time-block');
        timeDiv.addClass('col-md-1 hour');
        button.addClass('btn saveBtn col-md-1 saveBtn');
        icon.addClass('fas fa-save');
        textArea.addClass('col-md-10 description');
        button.append(icon);

        //3 append it to the page!!

        // first append all the pieces into the maind timeblocDiv we made
        timeBlockDiv.append(timeDiv, textArea, button);
        //finallt take the hwole chunk of html and append it to the page!!
        $('#plannerBlocks').append(timeBlockDiv);

        //creates the time text 
        var num;
        if (i < 13) {
            timeDiv.text(i + "am");
        }
        else if (i >= 13) {
            num = i - 12;
            timeDiv.text(num + "pm");
        }

        //sets the color for all divs based on current hour
        if (i < currentHour) {
            textArea.addClass('past');
            textArea.prop('readonly', true);
        }
        else if (i == currentHour) {
            textArea.addClass('present');
        }
        else if (i > currentHour) {
            textArea.addClass('future');
        }

        //How we're going to assign our differnet divs
        timeBlockDiv.attr('id', 'hour-' + i);
        //how we acces the string
        textArea.attr('id', 'input-' + i);
        //how we know wherer the button is located
        button.attr('name', i);

        timeBlockDiv.append(textArea, button);
        console.log(timeBlockDiv);

    }

    //local storage
    $('.saveBtn').click(function () {
        //go get data from text box
        var data = $.parseJSON($(this).attr('name'));
        var tData = $("#input-" + data).val().trim();

        localStorage.setItem(data, tData);
        console.log(tData);
        console.log(data);
    });

    function displayData() {
        if (currentHour > 17) {
            localStorage.clear();
        }
        for (var i = 9; i < 18; i++) {
            console.log(localStorage.getItem(i));
            $("#input-" + i).text(localStorage.getItem(i));

        }
    }
    displayData();
















})