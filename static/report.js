/**
 * Created by dell on 25/04/2017.
 */

$("#generate_report").on("click", function(event){
    event.preventDefault();
    readTextFile("race.log");
});


function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                //console.log(allText);
                var lines = allText.split('\n');
                var elements = [];
                for (var line = 0; line < lines.length; line++) {
                    elements.push(lines[line].split('\t'));
                    console.log(lines[line]);
                }
                console.log(elements.length)
                var tempo_total = getTempoTotal(elements)
                $("#total").html(tempo_total);
                $("#table_ttotal").show()
            }
        }
    }
    rawFile.send(null);
}

function getTempoTotal(elements){
    var max = parseInt(elements.length)-2;
    var start = elements[1][0].split(':');
    var end = elements[parseInt(max)][0].split(':');
    var start_date = new Date();
    var end_date = new Date();

    start_date.setHours(start[0]);
    start_date.setMinutes(start[1]);
    start_date.setSeconds(start[2].substr(0, 2))
    start_date.setMilliseconds(start[2].substr(3, 3));

    end_date.setHours(end[0]);
    end_date.setMinutes(end[1]);
    end_date.setSeconds(end[2].substr(0, 2))
    end_date.setMilliseconds(end[2].substr(3, 3));

    var diff = new Date(+end_date-start_date);

    console.log(diff.getMinutes() + ':' + diff.getSeconds())
    return diff.getMinutes() + ':' + diff.getSeconds();
}
