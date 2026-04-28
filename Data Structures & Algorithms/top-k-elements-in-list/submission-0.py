class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        num_2_freq = {}
        for num in nums:
            if num in num_2_freq:
                num_2_freq[num] += 1
            else:
                num_2_freq[num] = 1

        sorted_num_2_freq = dict(sorted(num_2_freq.items(), key = lambda item:item[1], reverse=True))
        print(sorted_num_2_freq.keys(),'cunt')
        return list(sorted_num_2_freq.keys())[:k]