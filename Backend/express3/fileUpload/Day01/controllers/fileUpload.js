// Controller is used to handle the request and response of the client

const File=require("../models/File");

//localfileUpload --> function to upload file to local storage

exports.localFileUpload=async(req,res)=>{
    try{
        //fetch the data from request body
        const file=req.files.file;
        console.log(file);

        // upload file to local storage (path )

        let uploadPath=__dirname+"/files/"+Date.now()+`.${file.name.split('.')[1]}`; // __dirname will give the current directory path
        
        //move the file to the upload path

        await file.mv(uploadPath,(err)=>{
            if(err)
            {
                console.log(err);
            }
        }); // mv() is a function to move the file to the upload path (path is of server)

        // response to the client

        res.status(200).json({ //200 is status code for success
            success:true,
            message:"File uploaded successfully"
        })


    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({ //500 is status code for internal server error
            success:false,
            message:"Internal server error"
        })
    }
}