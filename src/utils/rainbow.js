export default function renderRainbow(seenCount) {
  if (seenCount == 1) return ['red']
  else if (seenCount == 2) return ['red', 'orange']
  else if (seenCount == 3) return ['red', 'orange', 'yellow']
  else if (seenCount == 4) return ['red', 'orange', 'yellow', 'green']
  else if (seenCount == 5) return ['red', 'orange', 'yellow', 'green', 'blue']
  else if (seenCount == 6)
    return ['red', 'orange', 'yellow', 'green', 'blue', 'indigo']
  else if (seenCount >= 7)
    return ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple']
}
