import fs from "fs"

fs.writeFile("./text.txt", "helllooo", (err) => {
    if (err) {
        console.log(err)
        return
    }
    
    console.log("File created")
    return 
})