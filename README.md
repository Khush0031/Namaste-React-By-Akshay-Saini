# Namaste React   🚀

## Lecture From 01 -> 03

## Parcel  

    - Bundler :-  

        * Dev Build
        * Dev Server - Local
        * HMR - Hot Module Reloads
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
        * Supports HTTPs
        * Tree Shaking - remove unused code
        * Different dev & production bundles

## Script  

    Note :- remove starting point for start or build from package.json i.e :- "main" : "index.js" / "App.js"

    * "start": "parcel index.html",
    * "build": "parcel build index.html",
    * "test": "jest"

## JSX  

    * Note :- Not mandatory to use jsx in react ,but it's make developer work easy

    * JSX is Not a HTML inside a JS, instead it's HTML like Syntax.

    * It's create React Element behind 

    * JS Engine can't understand JSX, it's used parcel & (parcel use -> 'Babel') behind 

    * before going to browser js engin 
        - transpiled before it reaches to JS Engine

        - Parcel doing this transpilation using Babel.

        - Babel -> it's a transpiler.

    * core of react 
        using createElement.
        - React.createElement => (Object) => (HTMLElement)-> get render
        
        using JSX. -> parcel used transpiler(Babel)
        - Transpiled -> createElement -> (Object) -> HTMLElement -> get render.

    * Rule to follow : 
        * use Camel case
        - e.g :- class -> className

        * if have single line then don't need any thing 
        - e.g :- const heading = <h1>Heading</h1>;

         * but if it's containing multiple line the use braces
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
        const HeadComponent = () => {
            return <h1>Heading</h1>;
        };

        or(both are same)
        - e.g :- 
        const HeadComponent = () => <h1>Heading</h1>
    
    * Nest-JSX :- 

        -e.g :- 
        const HeadComponent = () => {
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

## Lecture - 04 :- Talk is cheap,show me the code

    * Design Overview 
          * Header
              * Logo  
              * Nav-Items
          * Body
              * Search
              * RestaurantContainer
                  * RestaurantCards 
                    * Img
                    * Name of Restaurant
                    * Rating
                    * Cuisine
                    * etc. 
          * Footer
              * Copyright.
              * Links.
              * Address.
    * 

    * Creating Top Level component:
        * AppLayout.
            * Header
                * Logo
                * NavItems
            
    * Creating Body Components 
        * Body
            * Search
            * Restaurant-Cards
                * Making cards Data dynamic
                    * Using :-  **`Props`**
    * Props :- short form for Properties
        - If we want to pass data dynamically we can pass it through props only
        - pass any no. of props to a component
        - Properties which we can pass to the components(Pass as props)
        - Props are immutable
        - Props are just normal arguments to the components

            - e.g :-

            - taking props as parameter. 

            function RestaurantCard(props){
                return (
                    <div>
                        <img src={props.img} />
                        <h2>{props.name}</h2>
                        <p>{props.cuisine}</p>  
                        </div>
                )
            }

            - pass props as arguments.

            <RestaurantCard 
            img = "img-url"
            resName= "Meghana Food" 
            cuisine = "Biryani, North Indian,Asian" />

            <RestaurantCard 
            img = "img-url"
            resName="KFC Food" 
            cuisine = "Burger, Fast Food" />
    * Props Destructuring  :- 
        i.e :- 

        * Before Destructuring :- 
           - function RestaurantCard(props){
                return (
                    <div>
                        <img src={props.img} />
                        <h2>{props.name}</h2>
                        <p>{props.cuisine}</p>  
                        </div>
                )
            }

            - instead of using  props.imgUrl, props.resName, props.cuisine we can also do this.

            * After Destructuring :- 

           - function RestaurantCard({imgUrl, resName, cuisine }){
                return (
                    <div>
                        <img src={imgUrl} />
                        <h2>{resName}</h2>
                        <p>{cuisine}</p>  
                        </div>
                )
           }

           - function RestaurantCard(props){
            const {imgUrl, resName, cuisine} = props;
                 return (
                    <div>
                        <img src={imgUrl} />
                        <h2>{resName}</h2>
                        <p>{cuisine}</p>  
                        </div>
                )
           }

    * In real world data are coming from backend server through API 
    * Knows As config-Driven Design 
        - Controlling the UI using data thats come from backend.
        - Data are according to the user location and so app  behave accordingly

    * Why Keys are important in React :- 
        - Keys are very very important because react differentiate them with the helps of keys

        - when a same components is render multiple times then at time of rerender when one of those components is change(due to data change ), through help of the these keys react  make diff between them and rerender accordingly only those components whose data is change

        - Keys are used to identify the components uniquely
        - Keys are used to prevent unnecessary re-renders of components
        - Keys are used to improve the performance of the application
        - reducing the number of DOM mutations
        - use diff Algo to differentiate those changed components to the non change components

        - we can use index's as a key but react official documents say don't use index as key 
        - But can be used for learning purpose

## Lecture - 05 :- Let's Get Hooked.

    * Folder Structure.
        - Try to make modular
    * Two Type's Of Expor/Import.

      - 1 :- Default Export/Import
      - 2 :- Named Export/Import

    * React Hooks 
        - Normal JS utility Function

       * Multiple React Function :- 

        Two Hooks which are very important.
          - useState Hook. :-> State Variable in react.
                * whenever a state variable changes react re render the component.


          - useEffect Hook.


