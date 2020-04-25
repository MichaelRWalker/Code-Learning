import passLog from "./Loggers/passLog.js";
import FailLog from "./Loggers/failLog.js";
import Log from "./Loggers/Log.js";


export default function describe(description,test){
    let testSuite = {description,test}
    ___test___.push(testSuite);
}
function it(description,test){
    describe(description,test);
}
function should(desc,test){
    describe(desc,test);
}



export let ___test___ = []

export function runTest(logLevel=0){
    console.log(___test___);
    console.log('ran')
    if(logLevel>2||typeof logLevel !== 'number')return'Please only put a number 0 - 2';
    let testNumber = 0;
    let passed = [];
    let failed = [];
    ___test___.forEach(({test,description})=>{
        if(logLevel === 0){
            if(!test){
                return false;
            }
        }else if( logLevel === 1){
            if(test===true){
                passed.push(testNumber);
            }else{
                failed.push(testNumber);
            }
            testNumber++
        }else{
            if(test===true){
                passLog(`${description} Passed`,'Green');
                testNumber++
            }else{
                FailLog(`Test ${description} Failed`,'Red');
                Log(`Expected`,'Green');
                Log(test.expected,'Green');
                Log(`Received`,'Red');
                Log(test.received,'Red');
                testNumber++
            }
        }
    });
    return{passed,failed};
}


