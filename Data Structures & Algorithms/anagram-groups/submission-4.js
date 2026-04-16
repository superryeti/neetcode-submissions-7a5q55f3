class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    str_2_sorted_str = new Map()

    groupAnagrams(strs) {
        for (let str of strs){
            this.str_2_sorted_str.set(str,str.split("").sort().join(""))
        }
        console.log(this.str_2_sorted_str)
        let results = []
        let cringe_hashset = new Set()
        for(let i=0; i < strs.length; i++){
            const curr_word = strs[i]
            if(cringe_hashset.has(i)){
                continue
            }
            let anagrams_curr_word = [curr_word]
            
            cringe_hashset.add(i)
            for (let j=i+1; j < strs.length;j++){
                const word_to_compare = strs[j]
                if (this.isAnagram(curr_word, word_to_compare)){
                    anagrams_curr_word.push(word_to_compare)
                    // console.log('fuck yeah', anagrams_curr_word)
                    cringe_hashset.add(j)
                }
            }
            results.push(anagrams_curr_word)
            
        }

        return results

    }

    isAnagram(str1, str2){
        // console.log(str1.split("").sort(), str2.split("").sort(), JSON.stringify(str1.split("").sort()) == JSON.stringify(str2.split("").sort()))
        return this.str_2_sorted_str.get(str1) === this.str_2_sorted_str.get(str2)
    }
}
