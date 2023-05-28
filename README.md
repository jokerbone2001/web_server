# Design a server using Node.js which can perform the following file system actions when a user access each URLs:

Visit /create will create an empty file called data.txt in your local project directory;
Visit /write/YOURTEXT will append YOUTTEXT in the data.txt file, if there is no data.txt file;
Visit /read will return the content from data.txt file
Visit /delete will delete the data.txt file

Bonus:
User can replace YOURTEXT with any text
Use HTTP URL parameter to specify file name
Visit /create?filename=data.txt will create a data.txt file, data.txt can be anything
Visit /write?filename=data.txt&content=YOURTEXT will write YOURTEXT to data.txt, YOURTEXT and data.txt can be anything
Visit /read?filename=data.txt will display content from data.txt, data.txt can be anything
Visit /delete?filename=data.txt will delete data.txt, data.txt can be anything
Error handling
What should you return if a user enters a non-specified URL?
What should you return if the file has been created during CREATE?
What should you return if the file is not found during WRITE?
What should you return if the file is not found during READ and DELETE?
