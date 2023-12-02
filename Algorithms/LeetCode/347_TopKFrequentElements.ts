function topKFrequent(nums: number[], k: number): number[] {
    let hash = new Map();
    let result:number[] = [];

    for(let num of nums){
        let i = hash.get(num);
        if(i){
            hash.set(num,i += 1)
        }else{
            hash.set(num, 1)
        }
    }

    [...hash.entries()].sort((a, b) => b[1] - a[1]).slice(0,k).forEach((v)=>{
        result.push(v[0])
    })

    return result;
};