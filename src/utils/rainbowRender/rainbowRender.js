export default function renderRainbow(seenCount) {
    switch(seenCount) {
        case 1: 
            return <>red</>
        case 2: 
            return <>red,orange</>
        case 3: 
            return <>red,orange,yellow</>
        case 4: 
            return <></>
        case 5: 
            return <></>
        case 6: 
            return <></>
        case 7: 
            return <></>
        case 8: 
            return <></>
        default:
            return <></>
    }
}
