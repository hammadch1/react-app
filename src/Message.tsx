// 2 ways to create a react component
// we can use a JS class or a function
// these days function based components are more popular being concise and easier to write
// we are using function based component

// PascalCasing
function Message() {
    // JSX: JavaScript XML
    const name = 'Hammad';
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>;
}

export default Message;