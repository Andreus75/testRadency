const chooseOptimalDistance = (t, k, ls) => {
    let x = 0;
    if (ls.length < 1 || k > ls.length) {
        return null;
    }
    // ls = ls.sort((a,b) => a-b);

    for (let i = 0; i < ls.length - k + 1; i++) {
        if (k === 1) {
            if (x <= ls[i] && ls[i] <= t){
                x = ls[i];
                break;
            }
        }
       for (let j = i+1; j < ls.length - k + 2; j++) {
           if (k === 2) {
               let sum2 = ls[i] + ls[j];
               if (x <= sum2 && sum2 <= t) {
                   x = sum2;
                   break;
               }
           }
           for (let l = j+1; l < ls.length; l++) {
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
chooseOptimalDistance(163, 3, [50]);
chooseOptimalDistance(331, 2, [ 91, 74, 73, 85, 73, 81, 87 ]);


// [51,56,58], [51,56,59], [51,56,61], [51,58,59], [51, 58,61], [51,59,61], [56,58,59], [56,58,61], [56,59,61], [58,59,61]
//     165,         166,       168,       168,          170,         171,       173,         175,       176,        178
