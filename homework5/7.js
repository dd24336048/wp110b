var transpose = function(A) {
    var arr=[];
    for(var i=0;i<A[0].length;i++){
       arr[i]=[]
        for(var j=0;j<A.length;j++){
            arr[i][j]=A[j][i]
        }
    }
    return arr
};
