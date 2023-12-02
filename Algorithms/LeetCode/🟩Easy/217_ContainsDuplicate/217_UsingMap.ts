function containsDuplicate(nums: number[]): boolean {
    let hashSet = new Map();

    for(let num of nums){
        if(hashSet.has(num)){
            return true;
        }else{
            hashSet.set(num,1)
        }
    }
    return false;
};