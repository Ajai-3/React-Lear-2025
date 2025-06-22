import fs from "fs"

fs.writeFile("./text.txt", "helllooo", (err) => {
   
    fs.unlink("./text.txt", (err) => {
        if (err) {
            console.log(err)
        }
    })
    console.log("File created")
    return 
})