var arrTemp = [];
var arrData = [];
var iterArr = 0;
var iterData = 0;
var nilailength;
var palindrome2;
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
            palindrome2 = arrTemp.join("");
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
        return arrTemp.join("");
    }
    a = nilaiawal[0];
    z = nilaiawal[nilailength-1];
    if(a == z){
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

    setengahLength--;
    if (setengahLength <= 0) {
        if(tempK > 1){
            palindrome2 = arrTemp.join("");
            return highesPalindrome2(palindrome2, tempK);
        }
        return arrTemp.join("");
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
    if(a != '9'){
        if(tempK > 1){
            arrTemp[iterArr] = '9';
            arrTemp[fullLength - 1 - iterArr] = '9';
            if(arrData.length > 0){
                if(iterArr == arrData[0][0]){
                    tempK = tempK--;
                    arrData.slice();
                }else{
                    tempK = tempK - 2;
                }
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
    if(nilailength > 1){
        sisaNilai = nilaiawal.slice(1, -1);
    }
    setengahLength--;
    if (setengahLength <= 0) {
        return arrTemp.join("");
    }
    // Langkah Rekursif
    return highesPalindrome2(sisaNilai, k);
}


// Contoh penggunaan:
// var input = ['3943', '1'];
// var input = ['932239', '2'];
// var input = ['35343', '2'];
// var input = ['35343', '3'];
console.log('==========================================');
console.log(`Input : ${input[0]}, ${input[1]}`);
console.log('Output : ' + highesPalindrome(input[0], input[1]));
console.log('==========================================');
