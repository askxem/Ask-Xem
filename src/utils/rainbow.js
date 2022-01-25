export default function renderRainbow(seenCount) {
    // Handy one-liner that does the same as all the if statements
    return ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'].slice(0, Math.min(seenCount, 7))
}
