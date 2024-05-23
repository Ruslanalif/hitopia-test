var g_temp=[];
var g_status = true;
var arrTemp = [];

function isBalance(prmInput){
    g_temp=[];
    g_status = true;
    arrTemp = [];
    prmInput = prmInput.replaceAll(' ', '');
    if(prmInput.length % 2 == 1 || (prmInput[0] == '}' || prmInput[0] == ')' ||prmInput[0] == ']') ){
        return 'No';
    }
    createArrTemp(prmInput);
    // hitungArrSisa(arrTemp);
    do {
        var sisaInput = '';
        for(var l = 0; l < g_temp.length; l++){
            sisaInput += g_temp[l];
        }
        createArrTemp(sisaInput);
        hitungArrSisa(g_temp);
    } while (g_temp.length > 1);
    return g_status ? 'Yes' : 'No';

}

function cekBalance(prmSatu, prmDua){
    if(!(prmSatu == '{' && prmDua == '}') && !(prmSatu == '(' && prmDua == ')') && !(prmSatu == '[' && prmDua == ']')){
        return false;
    }
    return true;
}
function createArrTemp(prmInput){
    arrTemp = [];
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
    g_temp = arrTemp;
}

function hitungArrSisa(arrTemp){
    if(arrTemp[0].length == 0){
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
                    if(!cekBalance(a[a.length - b.length -1 + k], b[b.length - k])){
                        g_status = false;
                    }
                    
                }else{
                    if(!cekBalance(b[k-1], a[iter])){
                        g_status = false;
                    }
                }
                iter++;
            }
        }
    }
    g_temp = arrSisa;
}

// Contoh penggunaan:
var input = '{(([]))(([]))}';
// console.log(`Output : ${isBalance(input)}`);
console.log(`Output : ${isBalance("{ [ ( ) ] }")}`);
console.log(`Output : ${isBalance("{ [ ( ] ) }")}`);
console.log(`Output : ${isBalance("{ ( ( [ ] ) [ ] ) [ ] }")}`);
console.log(`Output : ${isBalance("{ ( ( [ ] ) [ ] ) [ ] }")}`);