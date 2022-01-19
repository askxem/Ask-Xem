export default function renderRainbow(seenCount) {
    switch(seenCount) {
        case 1: 
            return <>red</>
        case 2: 
            return <>red,orange</>
        case 3: 
            return <>red,orange,yellow</>
        case 4: 
            return <>red,orange,yellow,green</>
        case 5: 
            return <>red,orange,yellow,green,blue</>
        case 6: 
            return <>red,orange,yellow,green,blue,indigo</>
        case 7: 
            return <>red,orange,yellow,green,blue,indigo,purple</>
        case 8: 
            return <>YAYAYAY</>
        default:
            return <></>
    }
}
