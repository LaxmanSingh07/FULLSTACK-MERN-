exports.updateCourseProgress=async(req,res)=>{

    const {courseId,subSectionId}=req.body
    const userId=req.user._id


    try{
        //check wheather the subSectionId is valid or not

        const subSection=await subSection.findById(subSectionId);

        if(!subSection){
            return res.status(400).json({errorMessage:"Invalid subSectionId"})
        }

        //check for old entry

        const courseProgress=await courseProgress.findOne({userId:userId,courseId:courseId});
        if(!courseProgress)
        {
            return res.status(404).json({
                success:false,
                message:"No course progress found"
            })
        }

        else{
            //check for re-completion of the course

            if(courseProgress.completedVideos.includes(subSectionId))
            {
                return res.status(400).json({
                    success:false,
                    message:"This video is already completed"
                })
            }

            //push into completed videos

            courseProgress.completedVideos.push(subSectionId);
        }

        await courseProgress.save();

    }
    catch(error)
    {
        console.log(error);
        return res.status(500).json({errorMessage:"Something went wrong"})
    }

}