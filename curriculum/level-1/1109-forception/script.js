var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function forception(people, alphabet){
    var result = []
    for(var i = 0; i < people.length; i++){
    result.push("" + people[i]+ ":") ;
        for( var j = 0; j < alphabet.length; j++){
            result.push(alphabet[j].toUpperCase());
        }

    }
  console.log(result)
}
forception(people, alphabet)

