class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    reverse_str_2_sorted_str =  new Map()

    groupAnagrams(strs) {
        for (let str of strs){
            let sorted_str  = str.split("").sort().join("")
            if(this.reverse_str_2_sorted_str.has(sorted_str)){
                this.reverse_str_2_sorted_str.get(sorted_str).push(str)
            }
            else{
                this.reverse_str_2_sorted_str.set(sorted_str,[str])
            }
            
        }
        return Array.from(this.reverse_str_2_sorted_str.values());
        // # damn

    }

  
}