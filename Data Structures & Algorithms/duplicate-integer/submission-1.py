class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        uniq_hashmap = set()
        for num in nums:
            if num in uniq_hashmap:
                return True
            uniq_hashmap.add(num)
        return False