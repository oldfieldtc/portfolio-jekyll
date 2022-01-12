const sharp = require('sharp');
const path = require('path');
const fs = require( 'fs' );

const moveFrom = path.resolve(__dirname, "images");
const moveTo = path.resolve(__dirname, "../images");

// Make an async function that gets executed immediately
(async ()=>{
    // Our starting point
    try {
        // Get the files as an array
        const files = await fs.promises.readdir( moveFrom );

        // Loop them all with the new for...of
        for( const file of files ) {
            // Get the full paths
            const fromPath = path.join( moveFrom, file );
            const toPath = path.join( moveTo, file );
            const toNoExt = path.parse(toPath);
            const fromNoExt = path.parse(fromPath);
            // console.log(fromNoExt);
            
            // Stat the file to see if we have a file or dir
            const stat = await fs.promises.stat( fromPath );

            if( stat.isFile() && (fromNoExt.ext === '.jpg' || fromNoExt.ext === '.png') ){

                // console.log(toNoExt);
                // throw new Error("my error message");

                await sharp(fromPath)
                .avif({})
                .toFile(path.join(fromNoExt.dir, fromNoExt.name) + `.avif`)
                .then(info => { 
                    console.log(path.join(fromNoExt.dir, fromNoExt.name) + `.avif created`);
                })
                .catch(err => { });

                await sharp(fromPath)
                .webp({})
                .toFile(path.join(fromNoExt.dir, fromNoExt.name) + `.webp`)
                .then(info => {
                    console.log(path.join(fromNoExt.dir, fromNoExt.name) + `.webp created`);
                })
                .catch(err => { });

                await sharp(fromPath)
                .jpeg({ mozjpeg: true })
                .toFile(path.join(fromNoExt.dir, fromNoExt.name) + `.jpeg`)
                .then(info => {
                    console.log(path.join(fromNoExt.dir, fromNoExt.name) + `.jpeg created`);
                })
                .catch(err => { });

                // Remove original file (jpg or png)
                fs.unlink(fromPath, (err => {
                    if (err) console.log(err);
                    else {
                      console.log(`${fromPath} removed.`);
                    }
                }));
            }

            // Now move async
            // fs.promises.rename( fromPath, toPath );
            // await fs.promises.rename( fromPath, toPath );

            // Log because we're crazy
            // console.log( "Moved '%s'->'%s'", fromPath, toPath );
        } // End for...of
    }
    catch( e ) {
        // Catch anything bad that happens
        console.error( "We've thrown! Whoops!", e );
    }

})(); // Wrap in parenthesis and call now