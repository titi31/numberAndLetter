var number=[1,15,25,20,50,23,54,1000]

for(var i=0;i<number.length;i++){
    if(number[i]%3==0 && number[i]%5==0 && number[i]>0 && number[i]<1001){
        alert('SalutMec')
    }else if(number[i]%3==0 && number%5!==0 && number>0 && number<1001){
        alert('Salut')
    }else if(number[i]%5==0 && number[i]%3!==0 && number[i]>0 && number[i]<1001){
        alert('Mec')
    }else if(number[i]<1){
        alert('nombre trop petit')
    }else if(number[i]>1000){
        alert('nombre trop grand')
    }else{
        alert('Au revoir')
    }
}

