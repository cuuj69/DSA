function sum(arr, n) {
    // Base case: if n is 0, return 0
    if (n === 0) {
      return 0;
    }
    // Recursive case: add the first n-1 elements and the nth element together
    else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
  
//   let nums = [1, 2, 3, 4, 5];
//   console.log(sum(nums, 3)); // 6
//   In this version of the sum function, we have a base case and a recursive case. The base case is when n is equal to 0, in which case we return 0.
  
//   In the recursive case, we add together the sum of the first n-1 elements of the array (which we get by calling sum(arr, n - 1)) and the nth element of the array (which we access using arr[n - 1]). We keep calling the sum function with smaller and smaller values of n until we reach the base case.
  
//   When we call sum(nums, 3), the function first checks if n is equal to 0. Since it's not, it enters the recursive case and calls sum(nums, 2). It does the same for sum(nums, 1). When it finally calls sum(nums, 0), the base case is reached and the function returns 0.
  
//   The function then "unwinds" all the recursive calls and adds the values together to get the final result: sum(nums, 3) = sum(nums, 2) + nums[2] = sum(nums, 1) + nums[1] + nums[2] = sum(nums, 0) + nums[0] + nums[1] + nums[2] = 0 + 1 + 2 + 3 = 6.