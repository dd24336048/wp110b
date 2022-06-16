function add(a,b){
    for(var i in a){
        for (var j in a[i]){
            a[i][j] += b[i][j];
        }
    }
    console.log(a);
}
