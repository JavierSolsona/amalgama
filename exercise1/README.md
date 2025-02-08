# Exercise 1

## 1 State all problems or possibilities for improvement for this component. Mention which of the problems or possibilities for improvement stated are the most relevant.

### Considerations

I assume that the values inside the contacts prop can in that format, it is not possible chance those without modify the parent component

### Issues and improvement
- The spaces are inconsistency. This one is important because improve the readability of the code and improve the standardization of the code.
- The name of variables in Javascript are usually in camel case. Example userName.
- There is plain text in the file, it is better use constants and have the plain text define there. This one is important because improve the help to have the texts in the same place and reutilice the text, so it is simpler to modify and fix possible errors.
- The contact.addresses map has a missing `)`. This one is very important because is need it to run the works.
- The maps miss the key prop. This one is very important because is need it to run the works.
- Add an alt to the image in case there is not image at less a text is display. Generally this is usefull for the end user
- Moved addresses to a different component, this help to increase readability
- Moved nav bar to a different component, this help to increase readability and code reutilization
- Created util function to generate the profile object, this help to increase readability and code reutilization

## 2 Factorize the code and attach how the solution will look after refactoring.

Please check the file `contacts.js` and the code inside the folder constants, another good improvent in a production code is use an alias intead of direct imports

## 3 Justify what was done in point 2, explaining what improvements it brings and why it solves what was discussed in point 1.

- Fix the spaces, this made the code more readability
- The name of the varibales help to the code standardization
- Move the plain text, help to consolidate all the plain texts in a different place to be reutilice and can be modify to fix issue in all the places.
- Added the `)` in the map to made the code works
- Added the key prop in the maps to made the code works
- Added alt to the image, this can help to the end user in case there is not URL for the avatar.
- Moved addresses to a different component, this help to increase readability
- Moved nav bar to a different component, this help to increase readability and code reutilization
- Created util function to generate the profile object, this help to increase readability and code reutilization

## 4 Please add a contact profile view (layout similar to the one shown in the list), assuming that the contact data is avatar , first_name , last_name , company , details , email , phone_number and address . Attach the proposed solution.

Please check the file `profile.js`

### Note: After create the profile file as the profile and the contacts views had the similar pages I move that to be a different component