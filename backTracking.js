
// A backtracking algorithms for showing subsets of a set

function findSubsets(set) {
    const results = [];
    const subset = [];
    
    function backtrack(index) {
        // Add the current subset to the results
        results.push([...subset]);
        
        // Iterate through the remaining elements
        for (let i = index; i < set.length; i++) {
            // Include the current element
            subset.push(set[i]);
            
            // Move to the next element
            backtrack(i + 1);
            
            // Exclude the current element (backtrack)
            subset.pop();
        }
    }
    
    backtrack(0);
    return results;
}



const set = ['A', 'B', 'C', 'D'];
const subsets = findSubsets(set);

for(let i = 0; i < subsets.length ; i++){
    console.log(subsets[i]);
}

