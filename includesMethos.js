function run(input) {

    if (Array.isArray(input) || typeof input === 'string') {
        return input.includes('F8')
    } else {
        return false
    }
}