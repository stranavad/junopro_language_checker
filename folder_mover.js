import fs from "fs";
import rimraf from 'rimraf';
import dotenv from 'dotenv';
dotenv.config();


rimraf('./lang', () => {
    const source = process.env.JUNO_PATH;
    const destination = process.env.TARGET_PATH;

    fs.mkdir(destination, (err) => {
        if (err) {
            console.error(err);
            return;
        }

        copyFolder(source, destination);
    })


    function copyFolder(sourceFolder, destinationFolder) {
      fs.readdir(sourceFolder, (err, files) => {
        if (err) {
          console.error(err);
          return;
        }
    
        files.forEach(file => {
          const filePath = `${sourceFolder}/${file}`;
          const fileDestination = `${destinationFolder}/${file}`;
    
          fs.stat(filePath, (err, stat) => {
            if (err) {
              console.error(err);
              return;
            }
    
            if (stat.isDirectory()) {
              // Create the destination folder if it doesn't exist
              if (!fs.existsSync(fileDestination)) {
                fs.mkdir(fileDestination, err => {
                  if (err) {
                    console.error(err);
                    return;
                  }
                  // Recursively copy the contents of the subfolder
                  copyFolder(filePath, fileDestination);
                });
              }
            } else {
              // Copy the file to the destination folder
              fs.copyFile(filePath, fileDestination, err => {
                if (err) {
                  console.error(err);
                  return;
                }
              });
            }
          });
        });
      });
    }
});