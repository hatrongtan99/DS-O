var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        const key = uniform(str);
        const value = map.get(key) || []
        value.push(str)
        map.set(key, value)
    }
    return Array.from(map.values())
}

function uniform(str) {
    return str.split('').sort().join('')
}

const strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))


