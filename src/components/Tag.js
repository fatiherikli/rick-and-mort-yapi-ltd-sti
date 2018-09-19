import React from 'react';

var StringToColor = (function(){
    // copy pasted from
    // https://stackoverflow.com/a/31037383/498402
    var instance = null;

    return {
    next: function stringToColor(str) {
        if(instance === null) {
            instance = {};
            instance.stringToColorHash = {};
            instance.nextVeryDifferntColorIdx = 0;
            instance.veryDifferentColors = ["#000000","#00FF00","#0000FF","#FF0000","#01FFFE","#FFA6FE","#FFDB66","#006401","#010067","#95003A","#007DB5","#FF00F6","#FFEEE8","#774D00","#90FB92","#0076FF","#D5FF00","#FF937E","#6A826C","#FF029D","#FE8900","#7A4782","#7E2DD2","#85A900","#FF0056","#A42400","#00AE7E","#683D3B","#BDC6FF","#263400","#BDD393","#00B917","#9E008E","#001544","#C28C9F","#FF74A3","#01D0FF","#004754","#E56FFE","#788231","#0E4CA1","#91D0CB","#BE9970","#968AE8","#BB8800","#43002C","#DEFF74","#00FFC6","#FFE502","#620E00","#008F9C","#98FF52","#7544B1","#B500FF","#00FF78","#FF6E41","#005F39","#6B6882","#5FAD4E","#A75740","#A5FFD2","#FFB167","#009BFF","#E85EBE"];
        }

        if(!instance.stringToColorHash[str])
            instance.stringToColorHash[str] = instance.veryDifferentColors[instance.nextVeryDifferntColorIdx++];

            return instance.stringToColorHash[str];
        }
    }
})();

// https://stackoverflow.com/a/6394168/498402
function index(obj,i) {return obj[i]}

export default function Error({ label, character, path }) {
    return (
        <span
            title={ label }
            style={{
                float: 'left',
                border: `0.1em solid ${StringToColor.next(character[path])}`,
                fontSize: '0.7em',
                margin: '0 0.2em 0.3em',
                padding: '0.2em',
                color: StringToColor.next(character[path]),
            }}
        >
            <span style={{ color: 'lightgray', fontSize: '0.6em', }}>{ label }</span>
            <br />
            { path.split('.').reduce(index, character) }
        </span>
    )
}