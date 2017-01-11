$(function() {

    var count = 0;

    //  function to handle button click event which makes a new box with color randomly chosen from an array list
    $('#buttonId').on('click', '.colorGenButton', function(event) {
        event.preventDefault();

        var arr = ['blue', 'green', 'brown', 'orange', 'purple', 'tomato'];

        //random number generation call
        var arrayIndex = randomNumberGenerator(0,arr.length-1);
        console.log('array index: '+arrayIndex);
        //build unique id for each div created
        var divId = generateId(arrayIndex);
        var addBlock = '<div id="' + divId + '" class="box"><span class="clickx">x</span<box>';
        $('#colorBoxes').append(addBlock);

        //applying color change to the box
        $('#' + divId).css({
            'background-color': arr[arrayIndex]
        });
    })

    // function to handle click event to change color of box selected to black
    $('#colorBoxes').on('click', '.box', function() {
        $(this).css({
            'background-color': 'black'
        });
    })

    // function to handle click event to remove box selected.
    $('#colorBoxes').on('click', '.clickx', function() {
        $(this).parent().remove();
    })

    //id generator function to be applied to each new div  created
    function generateId(arg) {
        count++;
        return 'box' + count;
    }

})


// random number generator function
function randomNumberGenerator(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
