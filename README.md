## Password Generator
#### Portfolio Carlos Casciano 
##### 17/02/2020


###
Access application:
Code within repository

### Motivation

This project was motivated on showing the full process of creating a single page application with React, from drawing a mock-up to deploying the app online.

### User Cases

- User wants to generate a safe randomic password to use in its applications
- Main plataform of usage is mobile, but can access on desktop as well
- User can say how many characters it wants it password
- User can choose which type of characters it wants in the password (upper, lower, symbols, numbers)
- User can easily copy password to clipboard to paste elsewhere
- User can easily checks if his password is strong enough


### Project Steps

- Brainstorm Idea
- Write user cases
- Pencil Mockup
- Figma Mockup
- Draw Components Structure
- Create git repository
- Create react app and delete unused files
- Code basic components
- Code password generation logic
- Code password strength logic
- Code length capture
- Code switches logic
- Connect switches with generation and strength
- Code copy to clipboard feature
- Handle empty switches
- Handle text on length textfield
- Code colors based on strength
- Code maximum permitted chars
- Set margins and paddings
- Set favicon
- Manual testing
- Code cleaning
- Deploy
- Test deplyed
- Update readme
- Write next steps
- Publish



#### Components Structure
|- Title  
|- Password  
|----- Generated Password  
- ButttonsMenu
    - Generate Button
    - Copy to Clipboard Button
- Commands Menu
    - Charlength
    - Switches
        - Uppercase
        - Lowercase
        - Numbers
        - Symbols
- Footer
