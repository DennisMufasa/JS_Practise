function triplets(a, b){
    if(a.length != 0 && b.length != 0){
        let scores = [];  //array storing the two total scores for a & b
        let Alice =0; //var to store alice's score
        let Bob = 0; //var to store bob's score
        
        //loop through a and b
        for(let i = 0; i < a.length; i ++){
            if(a[i] > b[i]){
                Alice += 1;
            }else if(a[i] < b[i]){
                Bob += 1;
            }else if(a[i] == b[i]){
                Alice = Alice;
                Bob = Bob;
            }
        }
        scores.push(Alice);
        scores.push(Bob);
        return scores;
        
    }
}

