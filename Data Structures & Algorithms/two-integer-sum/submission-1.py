# class Solution:
#     def twoSum(self, nums: List[int], target: int) -> List[int]:
#         for i, num in enumerate(nums):
#             for j in range(i + 1,len(nums)):
#                 if num + nums[j] == target:
#                     return [i,j]
#         return []
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # fucking two sum 
        passthrough_hashmap = {} #num:index

        for i, num in enumerate(nums):
            desired_pair = target - num
            if desired_pair in passthrough_hashmap:
                # print('found it yooowooo,', num, desired_pair , passthrough_hashmap)
                return  [passthrough_hashmap[desired_pair], i]
            
            passthrough_hashmap[num] = i
        return []



