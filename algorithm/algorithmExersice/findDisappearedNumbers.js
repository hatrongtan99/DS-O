var findDisappearedNumbers = function(nums) {
   const n = nums.length
   if (n == 0) return []
   const st = new Set();

   for (let i = 0; i < n; i++) {
       st.add(nums[i]);
   }

   const result = []

   for (let i = 1; i <= n; i++) {
       if (!st.has(i)) {
           result.push(i)
       }
   }

   return result
};