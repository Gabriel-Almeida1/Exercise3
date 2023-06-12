var sum = 0
var SumMen = 0
var SumWomen = 0
var HighestMensScore = 0


for (var cont = 0; cont < 3; cont++) {
    var note = prompt("Grade from 0 to 10: ")
    var sexuality = prompt("Type 'M ' or 'm' for Masculine or 'F' or 'f' for Feminine: ")
    sum = sum + parseInt(note)
    if (sexuality == 'M' || sexuality == 'm') {
        SumMen = SumMen + 1
        if (note > HighestMensScore) {
            HighestMensScore = note
        }
    }   else if (sexuality == 'F' || sexuality == 'f' && parseInt(note) >= 7) {
        SumWomen += 1
    }

    
}

var AverageScore = sum / 3

console.log(sum)
console.log(AverageScore)
console.log(HighestMensScore)
console.log(SumMen)
console.log(SumWomen)