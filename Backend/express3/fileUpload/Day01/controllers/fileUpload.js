// Controller is used to handle the request and response of the client

const File=require("../models/File");
const cloudinary=require("cloudinary").v2;
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

//image upload handler

function isFileTypeSupported(fileType,supportedFileTypes){
    return supportedFileTypes.includes(fileType);
}

async function uploadFileToCloudinary(file,folder,quality=100){
    // upload file to cloudinary
    const options={folder}
    // console.log(options)
    options.resource_type="auto";
    options.quality=quality;
    const result=await cloudinary.uploader.upload(file.tempFilePath,options);

    //WHY tempFilePath ??
    // It is the path of the file in the server which is temporary 
    return result;
}
exports.imageUpload=async(req,res)=>{
    try
    {
        //data fetch 
        const {name,tags,email}=req.body;

        // console.log(name,tags,email);

        //file fetch

        const file=req.files.imageFile; // file is the name of the file
        console.log(file);

        //validation
        const supportedFileTypes=["png","jpg","jpeg","gif"];
        const fileType=file.name.split('.')[1].toLowerCase();
        // console.log(fileType);

        //check if the file type is supported or not

        if(!isFileTypeSupported(fileType,supportedFileTypes))
        {
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        //file format supported 

        //upload file to cloudinary


        const result=await uploadFileToCloudinary(file,"LaxmanCode");

        console.log(result);
        //data save to database

        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:result.secure_url,
        })

        //response to the client

        res.status(200).json({ // 200 is status code for success
            success:true,
            message:"File uploaded successfully",
        })



    }

    catch(error)
    {
        console.log(error);
        res.status(400).json({ // 400 is status code for bad request
            success:false,
            message:"something went wrong"
        })
    }
}

// Video upload handler

exports.videoUpload=async(req,res)=>{
    try
    {
        //data fetch 
        const {name,tags,email}=req.body;

        // console.log(name,tags,email);

        //file fetch

        const file=req.files.videoFile; // file is the name of the file
        // console.log(file);

        //validation
        const supportedFileTypes=["mp4","mkv","avi","mov"];
        const fileType=file.name.split('.')[1].toLowerCase();
        console.log(fileType);

        //check if the file type is supported or not


        // TODO: ADD A BUFFTER LIMIT 

        //buffer limit is the size of the file that can be uploaded to the server
        //check for the buffer limit

        if(!isFileTypeSupported(fileType,supportedFileTypes)) // 100 MB
        {
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        //file format supported 

        //upload file to cloudinary

        const result=await uploadFileToCloudinary(file,"LaxmanCode");

        console.log(result);
        //data save to database

        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:result.secure_url,
        })

        //response to the client

        res.status(200).json({ // 200 is status code for success
            success:true,
            message:"File uploaded successfully",
            url:result.secure_url,
        })
    }

    catch(error)
    {
        console.log(error);
        res.status(400).json({ // 400 is status code for bad request
            success:false,
            message:"something went wrong"
        })
    }
}

// image reduce handler

exports.imageReduce=async(req,res)=>{
    try{
        //data fetch 
        const {name,tags,email}=req.body;

        // console.log(name,tags,email);

        //file fetch

        const file=req.files.imageFile; // file is the name of the file
        console.log(file);

        //validation
        const supportedFileTypes=["png","jpg","jpeg","gif"];
        const fileType=file.name.split('.')[1].toLowerCase();
        // console.log(fileType);

        //check if the file type is supported or not

        if(!isFileTypeSupported(fileType,supportedFileTypes))
        {
            return res.status(400).json({
                success:false,
                message:"File format not supported"
            })
        }

        //file format supported 

        //upload file to cloudinary

        //upload with compression

        // you have to add the flag in the uploadFileToCloudinary() function to enable/disable the compression

        const result=await uploadFileToCloudinary(file,"LaxmanCode",30);

        console.log(result);
        //data save to database

        const fileData=await File.create({
            name,
            tags,
            email,
            imageUrl:result.secure_url,
        })

        //response to the client

       
        res.status(200).json({ // 200 is status code for success
            success:true,
            message:"File uploaded successfully",
            url:result.secure_url,
        })
    }
    catch(error)
    {
        console.log(error);
        res.status(400).json({ // 400 is status code for bad request
            success:false,
            message:"something went wrong"
        })
    }
}