/**
 * Created by dell on 25/04/2017.
 */
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
                console.log(elements);
            }
        }
    }
    rawFile.send(null);
}