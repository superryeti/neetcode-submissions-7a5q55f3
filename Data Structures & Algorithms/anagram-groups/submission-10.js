class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    str_2_sorted_str_reverse = {}
    groupAnagrams(strs) {
        for (let str of strs){
            let sorted_str = str.split("").sort().join("")
            // console.log(str,sorted_str, this.str_2_sorted_str_reverse[sorted_str])
            if(this.str_2_sorted_str_reverse[sorted_str] === undefined){
                
                // console.log('Not found, creating',sorted_str )
                this.str_2_sorted_str_reverse[sorted_str] =  [str]
            }
            else{
                // console.log('Found it', sorted_str)
                this.str_2_sorted_str_reverse[sorted_str].push(str)
            }
            // console.log(this.str_2_sorted_str_reverse)

        }
        // console.log(this.str_2_sorted_str_reverse)
        return Object.values(this.str_2_sorted_str_reverse)

    }


}
