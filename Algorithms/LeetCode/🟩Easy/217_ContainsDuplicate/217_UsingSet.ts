function containsDuplicate(nums: number[]): boolean {
    let hashSet = new Set();

    for(let num of nums){
        if(hashSet.has(num)){
            return true;
        }else{
            hashSet.add(num)
        }
    }
    return false;
};