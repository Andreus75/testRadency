const chooseOptimalDistance = (t, k, ls) => {
    let x = 0;
    if (ls.length < 1 || k > ls.length) {
        return null;
    }

    for (let i = 0; i < ls.length - k + 1; i++) {
        if (k === 1) {
            if (x <= ls[i] && ls[i] <= t){
                x = ls[i];
            }
        }
       for (let j = i + 1; j < ls.length - k + 2; j++) {
           if (k === 2) {
               let sum2 = ls[i] + ls[j];
               if (x <= sum2 && sum2 <= t) {
                   x = sum2;
               }
           }
           for (let l = j + 1; l < ls.length; l++) {
               if (k === 3) {
                   let sum3 =ls[i] + ls[j] + ls[l];
                   if (x <= sum3 && sum3 <= t){
                       x = sum3;
                   }
               }
           }
       }
    }
    console.log(x);
    return x;
}

chooseOptimalDistance(174, 3, [51, 56, 58, 59, 61]); //173
chooseOptimalDistance(163, 3, [50]);//null
chooseOptimalDistance(331, 2, [ 91, 74, 73, 85, 73, 81, 87 ]);//178


