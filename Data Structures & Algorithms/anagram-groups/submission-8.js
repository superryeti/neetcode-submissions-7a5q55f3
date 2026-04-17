class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    reverse_str_2_sorted_str =  {}

    groupAnagrams(strs) {
        for (let str of strs){
            let sorted_str  = str.split("").sort().join("")
            if(this.reverse_str_2_sorted_str[sorted_str]){
                this.reverse_str_2_sorted_str[sorted_str].push(str)
            }
            else{
                this.reverse_str_2_sorted_str[sorted_str] = [str]
            }
            
        }
        return Object.values(this.reverse_str_2_sorted_str);
        // # damn

    }

  
}