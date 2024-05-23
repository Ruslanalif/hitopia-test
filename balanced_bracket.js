var g_temp=[];
function isBalance(prmInput){
    prmInput = prmInput.replaceAll(' ', '');
    // return 'Yes';
    if(prmInput.length % 2 == 1 || (prmInput[0] == '}' || prmInput[0] == ')' ||prmInput[0] == ']') ){
        return 'No';
    }
    var arrTemp = [];
    var temp = '';
    var indexTemp=0;
    for(var i = 0; i < prmInput.length; i++){
        
        if(temp != '' && (temp.includes('{') ||temp.includes('(') || temp.includes('['))){
            if(prmInput[i] == '{' || prmInput[i] == '(' ||prmInput[i] == '['){
                temp += prmInput[i];
            }else{
                arrTemp[indexTemp]=temp;
                indexTemp++;
                temp = prmInput[i];
            }
        }else{
            if(prmInput[i] == '}' || prmInput[i] == ')' ||prmInput[i] == ']'){
                temp += prmInput[i];
            }else{
                if(temp != ''){
                    arrTemp[indexTemp]=temp;
                    indexTemp++;
                }
                temp = prmInput[i];
            }
        }
        if(i+1 == prmInput.length){
            arrTemp[indexTemp]=temp;
        }
    }
    // console.log(arrTemp);
    var arrSisa = hitungArrSisa(arrTemp);
    // console.log(arrSisa);
    // arrSisa = hitungArrSisa(arrSisa[1]);
    // console.log(arrSisa);
    do {
        hitungArrSisa(g_temp);
    } while (g_temp.length > 1);
    // console.log('asd');
    return 'Yes';

}

function cekBalance(prmSatu, prmDua){
    if(!(prmSatu == '{' && prmDua == '}') && !(prmSatu == '(' && prmDua == ')') && !(prmSatu == '[' && prmDua == ']')){
        return false;
    }
    return true;
}

function hitungArrSisa(arrTemp){
    // console.log(arrTemp);
    if(arrTemp[0].length == 0){
        // return 'asd';
        return [true, arrTemp];
    }
    var arrSisa = [];
    var indexSisa = 0;
    var a = '', b = '';
    var boolOpener = true;
    for(var j = 0; j < arrTemp.length; j++){
        if (j % 2 == 0){
            if(arrTemp[j].length <= arrTemp[j+1].length){
                a = arrTemp[j+1];
                b = arrTemp[j];
                boolOpener = false;
                arrSisa[indexSisa] = a.substring(b.length, a.length);
                indexSisa++; 
            }else{
                a = arrTemp[j];
                b = arrTemp[j+1];
                boolOpener = true;
                arrSisa[indexSisa] = a.substring(0, a.length - b.length);
                indexSisa++; 
            }

            var iter = 0;
            for(var k = b.length; k > 0; k--){
                if(boolOpener){
                    // console.log(b[b.length - k]+ " - " + a[k]);
                    if(!cekBalance(a[k], b[b.length - k])){
                        return [false, arrTemp];
                    }

                }else{
                    // console.log(b[k-1]+ " - " + a[iter]);
                    if(!cekBalance(b[k-1], a[iter])){
                        return [false, arrTemp];
                    }
                }
                iter++;
            }
        }
    }
    // console.log(arrSisa);
    g_temp = arrSisa;
    // return [true, arrSisa];
}

var input = '{(([]))(([]))}';
// var input = '{}';
console.log(`Output : ${isBalance(input)}`);
// console.log(cekBalance("(", ")"));