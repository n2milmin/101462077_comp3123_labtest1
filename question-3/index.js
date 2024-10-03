/****************************************************************************************
 * 
 * COMP 3123 - Full Stack Dev
 * Lab Test 1
 * Question 3
 *      Create a script that will do the following:
 *          1. Remove Log files
 *               - remove all the files from the Logs directory, if exists
 *               - output the file names to delete
 *               - remove the Logs directory
 *           2. Create Log files
 *               - create a Logs directory, if it does not exist
 *               - change the current process to the new Logs directory
 *               - create 10 log files and write some text into the file
 *               - output the files names to console
 *          Hint: use the fs module and path module, and the process current
 *              working directory to build directory path. It is acceptable, to have a
 *              remove.js script and separate add.js script.
 * 
 * 
 * Nicole Milmine 
 * 101462077
 * 
****************************************************************************************/

const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, "/Logs");

// Remove Logs
const removeLogs = async () => {
    try{
        if (fs.existsSync(dir)){
            const files = fs.readdirSync(dir);
            for(log of files) {
                fs.unlinkSync(path.join(dir, log));
                console.log('delete files...' + log);
            }

            process.chdir("..");
            await fs.rmdirSync(dir);
            console.log("Dir deleted");
        }else
            console.log('Log dir DNE');
    }
    catch (e){
        console.log(e);
    } 
}


// Create Logs
const createLogs = () => {
    try{
        if(!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
            process.chdir(dir);
            console.log("Dir created");

            for(let x=0; x<10; x++){
                fs.writeFileSync(`log${x}.txt`, `some text`);
                console.log(`log${x}.txt`);
            }
        }
        else 
            console.log('Dir already exists');
    }
    catch(e) {
        console.log(e);
    }
}


createLogs();
removeLogs();