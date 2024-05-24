var arrTemp = [];
var arrData = [];
var iterArr = 0;
var iterData = 0;
var nilailength;
var palindrome2;
var isLengthGenap = false;
var highesData = 0;
var setengahLength = 0;
var fullLength = 0;
var a = '', z = '';
var tempK = null;
var sisaNilai;

function highesPalindrome(nilaiawal, k) {
    nilailength = nilaiawal.length;
    if(tempK == null){
        tempK = k;
        fullLength = nilailength;
        if(nilailength % 2 == 0){
            setengahLength = nilailength / 2;
        }else{
            setengahLength = (nilailength / 2) + 1;
        }
    }
    if (nilailength <= 1){

        if(nilailength == 1){
            arrTemp[iterArr] = nilaiawal[0];
        }
        if(tempK > 1){
            palindrome2 = '';
            for(var l = 0; l < arrTemp.length; l++){
                palindrome2 += arrTemp[l];
            }
            return highesPalindrome2(palindrome2, tempK);
        }else if(tempK == 1){
            if(arrData.length > 0){
                arrTemp[arrData[0][0]] = '9';
                arrTemp[arrData[0][1]] = '9';
                arrData.shift();
                tempK--;
            }else{
                arrTemp[iterArr] = '9';
            }
            if(nilailength == 1 && tempK > 0){
                arrTemp[iterArr] = '9';
                tempK--;
            }
        }
        // console.log(arrTemp);
        return arrTemp.join("");
    }
    a = nilaiawal[0];
    z = nilaiawal[nilailength-1];
    // console.log(`nilai a : ${a}`);
    // console.log(`nilai z : ${z}`);
    if(a == z){
        // arrTemp[0] = a;
        arrTemp[iterArr] = a;
        arrTemp[fullLength - 1 - iterArr] = z;
        iterArr++;
    }else{
        if(tempK > 0){
            if(a > z){
                z = a;
            }else{
                a = z;
            }
            if(a != '9'){
                arrData[iterData] = [iterArr, fullLength - 1 - iterArr];
                iterData++;
            }
            console.log(arrData);
            arrTemp[iterArr] = a;
            arrTemp[fullLength - 1 - iterArr] = z;
            iterArr++;
            tempK--;
        }else{
            return -1;
        }
    }
    if(nilailength > 1){
        sisaNilai = nilaiawal.slice(1, -1);
    }
    // console.log(arrTemp);
    // console.log();
    // console.log(tempK);
    
    // if(nilailength % 2 == 0){
    // }else{
    // }
    // Kasus Basis
    // return 1;
    setengahLength--;
    if (setengahLength <= 0) {
        return 1;
    }
    // Langkah Rekursif
    return highesPalindrome(sisaNilai, tempK);
}

function highesPalindrome2(nilaiawal, k){
    nilailength = nilaiawal.length;
    if(tempK == k){
        iterArr=0;
        fullLength = nilailength;
        if(nilailength % 2 == 0){
            setengahLength = nilailength / 2;
        }else{
            setengahLength = (nilailength / 2) + 1;
        }
    }
    if (nilailength <= 1){

        if(tempK >= 1){
            if(nilailength == 1){
                // console.log(`masuk sini ${iterArr}`) ;
                if(arrData.length > 0){
                    arrTemp[arrData[0][0]] = '9';
                    arrTemp[arrData[0][1]] = '9';
                    arrData.shift();
                }else{
                    arrTemp[iterArr] = '9';
                }
                tempK--;
                return highesPalindrome2(sisaNilai, k);
            }
        }
        return arrTemp.join("");
    }
    a = nilaiawal[0];
    z = nilaiawal[nilailength-1];
    console.log(`nilai a : ${a}`);
    console.log(`nilai z : ${z}`);
    if(a != '9'){
        if(tempK > 1){
            arrTemp[iterArr] = '9';
            arrTemp[fullLength - 1 - iterArr] = '9';
            if(iterArr == arrData[0][0]){
                tempK = tempK - 2;
                arrData.slice();
            }else{
                tempK = tempK - 2;
            }
        }else{
            if(setengahLength % 2 == 0){
                arrTemp[setengahLength -1] = '9';
                tempK--;
            }
            return arrTemp.join("");
        }
    }
    iterArr++;
    console.log(`nilai awal ${nilaiawal}`);
    if(nilailength > 1){
        sisaNilai = nilaiawal.slice(1, -1);
    }
    console.log(arrTemp);
    console.log(tempK);
    
    // if(nilailength % 2 == 0){
    // }else{
    // }
    // Kasus Basis
    // return 1;
    setengahLength--;
    if (setengahLength <= 0) {
        return 1;
    }
    // Langkah Rekursif
    return highesPalindrome2(sisaNilai, k);
}
// function createResult(){
//     // return arrTemp.join("");
//     var result = '';
//     for(var l = 0; l < arrTemp.length; l++){
//         result += arrTemp[l];
//     }
//     return result;
// }

console.log('Output : ' + highesPalindrome('35343', '5'));