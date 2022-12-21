var arg1=0;
    var arg2=0;
    var op='';
    var czy_arg1_gotowy=0;
    var czy_op_wpisany=0;
    wypisz_arg1();
    
function cyfra(id) {
    if(czy_arg1_gotowy) {
        arg2 *= 10;
        arg2 += parseInt(id);
        wypisz_arg2();
    } else {
        arg1 *= 10;
        arg1 += parseInt(id);
        wypisz_arg1();
    }
}
    
function oper(id) {
    if(czy_op_wpisany) {
        switch(op) {
            case 'add': arg1 += arg2; break;
            case 'sub': arg1 -= arg2; break;
            case 'mul': arg1 *= arg2; break;
            case 'div': arg1 /= arg2; break;
        }
    }
    if(id == 'equ') {
        czy_op_wpisany = 0;
    } else {
        op=id;
        czy_op_wpisany = 1;
    }
    arg2 = 0;
    czy_arg1_gotowy = 1;
    wypisz_arg1();
}
    
function kasuj() {
    arg1=0;
    arg2=0;
    op='';
    czy_arg1_gotowy=0;
    czy_op_wpisany=0;
    wypisz_arg1();
}
    
function wypisz_arg1() {
    document.getElementById('wynik').innerHTML = arg1;
}
    
function wypisz_arg2() {
    document.getElementById('wynik').innerHTML = arg2;
}