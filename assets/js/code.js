
 let UltraInfoCopy = [];
 console.log(UltraInfoCopy);

 let xhr = new XMLHttpRequest();

 xhr.open('GET', './data/csvjson3.json');

xhr.onload = function(){

     const UltraInfo = JSON.parse(this.response);

    
     console.log(UltraInfo);
     

    if (UltraInfo.length==720) {

        UltraInfoCopy = [...UltraInfo];
      
        
         console.log(UltraInfoCopy);

         return UltraInfoCopy;


         
    }
     /* Вы можете разместить свой код здесь */
    
     
     

}

 xhr.send();




function calc() {
    console.log(UltraInfoCopy);



  


    /*
    В ключах находится дробное число с запятой в виде строки
    Этот код должен заменить запятую на точку и дальше преобразовать в число

    но консоль пишет , что 
    Uncaught TypeError: UltraInfoCopy[i].paymentSum.split is not a function
    calc http://127.0.0.1:5500/assets/js/code.js:61
    oninput http://127.0.0.1:5500/index.html:1

    Но , если задать точный индекс, то преобразование состоится.

    for (i=0; i<UltraInfoCopy.length;i++){
        
        UltraInfoCopy[i].paymentSum2 = UltraInfoCopy[i].paymentSum.split(',').join('.')*1;

        UltraInfoCopy[i].pricePerDay = UltraInfoCopy[i].pricePerDay.split(',').join('.')*1;
        UltraInfoCopy[i].QDays2 = UltraInfoCopy[i].QDays;

        UltraInfoCopy2.push(UltraInfoCopy[i].paymentSum2);
        UltraInfoCopy2.push(UltraInfoCopy[i].qDays2);


         
        
    }*/
    console.log(UltraInfoCopy);
    

    let saldoMoneyFromUser= +saldoDenegNachalo.value
    let saldoDaysFromUser = +ostatokDneyNachalo.value
    let saldoMoneyEnd=0;

    let PaymentFromUser = +sumPopolneniya.value;
    let totalSum=saldoMoneyFromUser+PaymentFromUser;
    let maxDays=0;
    let SumFromMaxDays=0;
    let FinalDays=0;
    console.log(totalSum);

    let daysFromTotalSum =0;

    //daysFromTotalSum = UltraInfoCopy[363].qDays;
    //console.log(daysFromTotalSum,UltraInfoCopy[363].paymentSum, typeof(UltraInfoCopy[363].paymentSum) );

    
        if (saldoDaysFromUser != 0){

            maxDays=UltraInfoCopy[UltraInfoCopy.length-1].qDays-saldoDaysFromUser;

            let obj = UltraInfoCopy.find(({qDays}) => qDays== maxDays );// здесь будет обьект с совпадающим количеством дней, суммой за день
            SumFromMaxDays= obj.paymentSum;
            

        }
        console.log(SumFromMaxDays);
        console.log(maxDays);
        
    for (i=0; i<UltraInfoCopy[UltraInfoCopy.length-1];i++){
        if( totalSum>=UltraInfoCopy[i].paymentSum && totalSum<UltraInfoCopy[i+1].paymentSum ){
            daysFromTotalSum = UltraInfoCopy[i].qDays;
            saldoMoneyEnd=totalSum-UltraInfoCopy[i].paymentSum;

        }
    }

    if (totalSum >= UltraInfoCopy[UltraInfoCopy.length-1].paymentSum) {
        daysFromTotalSum=UltraInfoCopy[UltraInfoCopy.length-1].qDays;// это для последного элемента
        
    }

    console.log(daysFromTotalSum, saldoMoneyEnd);

    if (daysFromTotalSum<=maxDays){

        FinalDays=daysFromTotalSum+saldoDaysFromUser;
        


    }else {
        FinalDays=maxDays+saldoDaysFromUser;
        saldoMoneyEnd=totalSum-SumFromMaxDays;

    }
        saldoMoneyEnd=saldoMoneyEnd.toFixed(2);

 
        MaxDayAndSum.innerHTML=`Пополнить можно на ${maxDays} дней, это ${SumFromMaxDays} грн`;

    qDney.innerHTML=`После пополнения у Вас будет ${FinalDays}, дней`;
    saldoDenegKonec.innerHTML=`Сдача ${saldoMoneyEnd}, грн`;

   
}    




