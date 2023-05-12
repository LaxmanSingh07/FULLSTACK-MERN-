# IN THIS SECTION I HAVE BUILD A ED-TECH 


## Structure of the User Model


```text
fullname:string
lastname:string
email:string
password:string
confirmpassword:string
accounttype:string
addtionalDetails:ref to the addtionalDetails
courses:ref to the courses
image
courses:ref to the courses

```


Profile

```

gender:string
dob:date
about:string
phone:string
address:string
city:string
state:string
country:string

```



Course Progress

```
courseID
completedVideo(array of ref to the video)

```

video (sub-section)

```

title:string
time-Duration:string
description:string
videoUrl:string

```


course.js
```
title:string
description:string
price:number
duration:string
instruction:[ref to the user]
rating and Reviews:[ref to the reviews]
tags:[ref to the tags]
student_enrolled:[ref to the user]
courseContent:[ref to the courseContent]
```

Section.js

```

sectionTitle:string
sectionDescription:string
subSection:[ref to the subSection]

```

Rating and Reviews

```
user: ref to the user
rating:number
review:string

```


Tags.js
```
name
description
course:[ref to the course]

```


OTP
```
email
createdAt
otp

```

why we need otp.js model ?

- when user signup then we need to send the otp to the user email address for verification purpose.
- 

