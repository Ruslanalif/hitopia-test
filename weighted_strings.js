function weightedStrings(strInput, arrQueries) {
    var nilai = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var arrBobot = [];
    var tempString = '';

    for(var j = 0; j < strInput.length; j++){
        if(!tempString.includes(strInput[j])){
            tempString = strInput[j];
        }else{
            tempString += strInput[j];

        }
        arrBobot[j] = tempString;
    }
    // console.log('arr bobot');
    // console.log(arrBobot);
    var resOutput = [];
    var bobotQueries = 0;
    var bobot = 0;
    for(var k = 0; k < arrQueries.length; k++){
        var bool = false;
        for(var l = 0; l < arrBobot.length; l++){
            var indexBobot = nilai.indexOf(arrBobot[l][0]);
            if(k == 0){
                bobot += (indexBobot+1) * arrBobot[l].length;
            }
            if(arrQueries[k] == (indexBobot+1) * arrBobot[l].length){
                bool = true;
            }
        }
        resOutput[k] = bool ? 'Yes' : 'No';
        bobotQueries = bool ? bobotQueries+arrQueries[k] : bobotQueries;
    }
    console.log("All Bobot : " + bobot);
    console.log("Bobot in Queries : " +bobotQueries);
    return resOutput;
}

// Contoh penggunaan:
const strInput = "abbcccd";
const arrQueries = [1,3,9,8];
const substrings = weightedStrings(strInput, arrQueries);
console.log("Output : ", substrings);
console.log('==========================================');
console.log(weightedStrings('bbccc', [3,6,7,9]));
console.log('==========================================');
console.log(weightedStrings('gghiiijk', [8,9,12,15]));