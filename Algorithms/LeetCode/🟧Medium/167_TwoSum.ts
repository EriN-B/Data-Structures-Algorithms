function twoSum(numbers: number[], target: number): number[] {
    let pointerOne = 0;
    let pointerTwo = numbers.length-1;

    for(let i = 0; i < numbers.length; i++){
        if(numbers[pointerOne] + numbers[pointerTwo]  ==  target){
            return [pointerOne+1, pointerTwo+1]
        }
        else if(numbers[pointerOne] + numbers[pointerTwo] > target){
            pointerTwo -= 1;
        }else if(numbers[pointerOne] + numbers[pointerTwo] < target){
            pointerOne += 1;
        }
    }

    return [];
};