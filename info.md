# Namaste React   🚀

## Parcel :  
    - Bundler :-  

        * Dev Build
        * Dev Server - Local
        * HMR - Hot Module Relode
        * File Watching Algorithm - Written in c++
        * Caching - for Faster Builds
        * Image Optimization
        * Minification
        * Bundling
        * Compress
        * Consistent Hashing
        * Code Splitting
        * Differential Bundling - support for older browser
        * Diagnostic
        * Error handling
        * Suppport HTTPs
        * Tree Shaking - remove unused code
        * Different dev & production bundles


## Script :  

    Note :- remove starting point for start or build from package.json i.e :- "main" : "index.js" / "App.js"

    * "start": "parcel index.html",
    * "build": "parcel build index.html",
    * "test": "jest"

## JSX :  

    * Note :- Not mendatory to use jsx in react ,but it's make dveleoper work easy

    * JSX is Not a HTML inside a JS, instead it's HTML like Syntax.

    * It's create React Element behind 

    * JS Engine can't understand JSX, it's used parsel & (parsel use -> 'Bable') behind 

    * before going to browser js engin 
        - transpiled before it reaches to JS Engine

        - Parcel doing this transpilation using Bable.

        - Bable -> it's a transpiler.

    * core of react 
        using createElement.
        - React.createElement => (Object) => (HTMLElement)-> get render
        
        using JSX. -> parcel used transpiler(Bable)
        - Transpiled -> createElemnt -> (Object) -> HTMLElement -> get render.

    * Rule to follow : 
        * use Cammel case
        - e.g :- class -> className

        * if have single line then don't need any thing 
        - e.g :- const heading = <h1>Heading</h1>;

         * but if it's containing multiple line the use bracess
        - e.g :- const heading = (
            <h1 className="head">
                Heading
            </h1>
        );
    * Feature (Super Power) :- 
        - Directly use HTML don't need to use React.createElement();
        - {} using curly braces we can directly write any type of jS inside those curly braces

## React-Components :-  

    Two way we can create components.

    * Class Based Components :- Old way of writing components.

    * Functional Component :- New way of writing react components

## React-Functional-Components :-  

    Nothing but a JS function which return ReactElement / JSX;

    If a component return a React element/JSX is known as Functional component.

    Always used cap letter for components 
        - e.g :- 
        (more readable)
        const HeadComponet = () => {
            return <h1>Heading</h1>;
        };

        or(both are same)
        - e.g :- 
        const HeadComponent = () => <h1>Heading</h1>
    
    * Nest-JSX :- 

        -e.g :- 
        const HeadComponet = () => {
            return (
                <div>
                    <h1>Heading</h1>
                </div>;
            )
        };

    * ReactElement -> functionalComponent :- 

        - e.g :- 

        React Element :- 
            const heading = (
                <h1 className="head">
                    Heading
                </h1>
            )
        Functional Component :- 
            const Heading = () => {
                return (
                    <h1 className="head">
                        Heading
                    </h1>
                )
            }    

    * How to render functional component :- 
        - e.g :- 
           - root.render(<Heading/>)
           - root.render(heading());

        both are same but alway's prefer ->(<Heading/>)

    * Component compositions
        - e.g :-   

        const Heading = () => {
            return (
                 <h1>Heading</h1>
            )            
        }

        const Paragraph = () => {
            return (
                 <p>Paragraph</p>
            )
        }

        const App = () => {
            return (
                <div>
                    <Heading/>
                    <Paragraph/>
                </div>
            )  
        }

    root.render(<App/>)
    
    - Here App is a container component &&  Heading and Paragraph are child components.

