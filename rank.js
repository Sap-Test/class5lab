$(document).ready(function()
    {
       $("form").submit(rankGreeting);
    });

function rankGreeting(event)
{
    //Get first name
    let firstName = $("input#fist-name").val();

    //Get last name
    let lastName = $("input#last-name").val();

    //Get rank from radio button only one is selected
    let rank = $("input[name=rank]:checked").data("rank-name");

    //Create the greeting message
    let rankOutput = `Hello, ${rank} ${firstName} ${lastName}`;

    //Display the message
    $("p#confirmation").text(rankOutput);

    event.preventDefault();
}