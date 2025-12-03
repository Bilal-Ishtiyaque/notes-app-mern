[Walkthrough Video](https://www.linkedin.com/feed/update/urn:li:activity:7364638097633869824/)

**Technical Breakdown:**

On the backend, I set up a Node.js server with 𝗘𝘅𝗽𝗿𝗲𝘀𝘀 to create a fully 𝗥𝗘𝗦𝗧𝗳𝘂𝗹 𝗔𝗣𝗜. This API handles all the common HTTP methods such as GET to fetch notes, POST to create new notes, PUT to update existing ones, and DELETE to remove notes. I made sure to use 𝗽𝗿𝗼𝗽𝗲𝗿 𝘀𝘁𝗮𝘁𝘂𝘀 𝗰𝗼𝗱𝗲𝘀 like 200 for success, 201 when new notes are created, 404 if a note isn’t found, and 429 to handle 𝗿𝗮𝘁𝗲 𝗹𝗶𝗺𝗶𝘁𝗶𝗻𝗴.

For data storage, I used 𝗠𝗼𝗻𝗴𝗼𝗗𝗕 with 𝗠𝗼𝗻𝗴𝗼𝗼𝘀𝗲 to define a schema for my notes, including fields like title, content, and timestamps for when notes are created or updated. To keep my code organized and maintainable, I separated my backend code into 𝗿𝗼𝘂𝘁𝗲𝘀, 𝗰𝗼𝗻𝘁𝗿𝗼𝗹𝗹𝗲𝗿𝘀, and 𝗺𝗼𝗱𝗲𝗹𝘀.
I added 𝗺𝗶𝗱𝗱𝗹𝗲𝘄𝗮𝗿𝗲 in Express to parse JSON request bodies, handle errors, and implement 𝗿𝗮𝘁𝗲 𝗹𝗶𝗺𝗶𝘁𝗶𝗻𝗴 using Upstash 𝗥𝗲𝗱𝗶𝘀, which protects the app from being overwhelmed by too many requests. 

On the frontend, I used 𝗥𝗲𝗮𝗰𝘁 to build a responsive UI and 𝗿𝗲𝗮𝗰𝘁-𝗿𝗼𝘂𝘁𝗲𝗿 to make routes or pages such as a 𝗵𝗼𝗺𝗲𝗽𝗮𝗴𝗲 to list notes, a 𝗰𝗿𝗲𝗮𝘁𝗲 𝗽𝗮𝗴𝗲 to add new notes, and a 𝗱𝗲𝘁𝗮𝗶𝗹 𝗽𝗮𝗴𝗲 to view and edit existing notes. I styled the app with 𝗧𝗮𝗶𝗹𝘄𝗶𝗻𝗱 CSS and 𝗗𝗮𝗶𝘀𝘆𝗨𝗜 for quick, clean, and responsive design. For API calls, I used 𝗔𝘅𝗶𝗼𝘀 with a global instance to define the base URL and keep requests consistent and easy to manage.

I also made sure to handle 𝗹𝗼𝗮𝗱𝗶𝗻𝗴 𝘀𝘁𝗮𝘁𝗲𝘀 and 𝗲𝗿𝗿𝗼𝗿𝘀 gracefully, showing helpful 𝗻𝗼𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀 using 𝗿𝗲𝗮𝗰𝘁-𝗵𝗼𝘁-𝘁𝗼𝗮𝘀𝘁 so users get immediate feedback on their actions.

Finally, I deployed both the React frontend and the backend as separate projects on 𝗩𝗲𝗿𝗰𝗲𝗹. Since they are hosted on different domains, I configured 𝗖𝗢𝗥𝗦 on the backend to allow requests from the frontend. I also secured my 𝗲𝗻𝘃𝗶𝗿𝗼𝗻𝗺𝗲𝗻𝘁 𝘃𝗮𝗿𝗶𝗮𝗯𝗹𝗲𝘀, like database 𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗶𝗼𝗻 𝘀𝘁𝗿𝗶𝗻𝗴𝘀, by keeping them out of the public code and loading them securely using the 𝗱𝗼𝘁𝗲𝗻𝘃 package.

I learned the basics of the MERN stack and how to build a real, 𝗽𝗿𝗼𝗳𝗲𝘀𝘀𝗶𝗼𝗻𝗮𝗹-𝗴𝗿𝗮𝗱𝗲 full-stack app with features like 𝗖𝗥𝗨𝗗 𝗼𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻𝘀, 𝗿𝗮𝘁𝗲 𝗹𝗶𝗺𝗶𝘁𝗶𝗻𝗴, 𝗲𝗿𝗿𝗼𝗿 𝗵𝗮𝗻𝗱𝗹𝗶𝗻𝗴, and 𝗱𝗲𝗽𝗹𝗼𝘆𝗺𝗲𝗻𝘁, all while following 𝗯𝗲𝘀𝘁 𝗽𝗿𝗮𝗰𝘁𝗶𝗰𝗲𝘀 for structure and security.
