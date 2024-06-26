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
            resName= "" 
            cuisine = "" />

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

## Lecture - 05 :- Let's Get Hooked

    * Folder Structure.
        - Try to make modular
    * Two Type's Of Export/Import.

      - 1 :- Default Export/Import
      - 2 :- Named Export/Import

    * React Hooks 
        - Normal JS utility Function

       * Multiple React Function :- 

        Two Hooks which are very important.
          - useState Hook. :-> State Variable in react.
                * whenever a state variable changes react re render the component.

          - useEffect Hook 

## Lecture - 06 :- Exploring the world

    * Monolith :-  
    * Microservice :-

    * How We can fetch dynamically data from the api and populate our page dynamically :- 

        * API :- Application Programming Interface
        * REST API :- Representational State of Resource API
        * HTTP Methods :-

            * GET :- Get the data
            * POST :- Create the data
            * PUT :- Update the data
            * DELETE :- Delete the data
            * Axios :- Library to make HTTP request in react
            * Fetch API :- Built in API in browser to make HTTP request

        * Bad way to fetch data :- 

            - as soon as page load -> call API -> Render the page with the new data.

        * Good way to  fetch data :-

            - as soon as page load -> Render the page -> call API -> Render again the page with new data.
        
        * CORS :- cross origin Resource Service

        * useEffect Hook :- 
            - It's a hook which is used to handle side effects in functional components.
            - Take two argument's
                1 :- callBack Function 
                2 :- dependencies array.

                e.g :- useEffect(() => {
                    // Call Back Function
                },[]);

            - useEffect callBack Function Is call after a component render. 
                - Body Component Render -> useEffect callBack Call -> Body Component again render.   

        * Shimmer UI  :-  
            - A Shimmer UI represent the page's actual UI so user can understand how quick the web or mobile app will load even before the content has shown up.

## Lecture - 07 :- Finding the path

    * useEffect Hook :- 

        - if we don't pass dependencies array that means useEffect is call on every render
        - if we pass empty dependencies array that means useEffect is call only initial render only onces.
        - if we pass some thing to dependencies array that means useEffect is call every time dependencies array is changed.

    * Routes in react :- 
        - React Router package in best to use to create routes.
        - install :- npm i react-router-dom.

    * How to use React Router DOM :- 
        - /
        - /about
        - /contact etc.

    * Routing configuration 
        - use in Higher order components e.g :- (App.js)  
        - import the {createBrowserRouter,RouterProvider}
        - createBrowserRouter function return the router object
        - createBrowserRouter Take's the List of objects (each object has  Path (which is route {/, /about, /contact}), Element to render (component), also have children routes and error)  
        - RouterProvider component is actually provide routing configuration to our aap.
            e.g :- <RouterProvider router={appRouter}/>
        - React Router Provider have some inbuilt component i.e :-  {useRouteError}.

    * Making Components intact According to routes 
        - we can  use Outlet component to render the child routes.
    * Linking to routes
        - Never Ever use (a tag) because its reload hole page.
        - use Link component from react-router-dom
        - Link component take's two prop's
            1. to (which is route path)
            2. children (which is the text of the link)
            e.g :- <Link to="/about">About</Link>
        - Link component is used to navigate between routes.
    * Type's of Routing in Web App :- 
        1. Client Side Routing.
        2. Server Side Routing.

    * Dynamic Routes :- 
        - Dynamic routes are used when we want to render different components based on some dynamic value.
        - We can use colon (:) to specify dynamic routes.
            - e.g :- /users/:id
        - useParams hook is used to get the dynamic value from the route.
        - useParams hook return an object with the dynamic value as key-value pair.
            - e.g :- const {id} = useParams();

## Lecture - 08 :- Let's Get Classy

    * Class Base Components : 
        - Use in (ABOUT Component) to learn Class Component
        - Class Base Components are used when we need to use lifecycle methods.
        - User.jsx -> functional component
        - UserClass.jsx -> Class Component.

    * Create Class Component

        - (Class Component) -> is a class which have the render method inside which we return a JSX.
        e.g :- 
        - (class) UserClass (extends) (React.Component){
            render(){
                return <h1>Class Component</h1>;
            }
        }
        - (React.Component) :- is a class which is in react package.
        - To import it :- import React From "react" or Just ()
 
    * Passing Props to Class Component :- 
        - <UserClass name={"Khush(Class)"}>
        - inside a UserClass component we have (constructor) which receive the props
        and inside constructor we must use super() method to use prop        
        - e.g :- 
            constructor(props) {
                super(props);

                console.log(props).
            }   
    * How to make State in Class Components.
        - when ever a instance of the class is created we create state variable.
        - we use (this.state) in constructor to create it  
        - this.state is a big object which contain state variable 
        e.g :- this.state = {
            count : 0,
        }
    * How to Update the state variable in Class Base component. 
        - Note :- Never Update the State Variable Directly
        - this.setState is used to update the state variable in class Component  
        - this.setState take object which contain the updated value for state.
        e.g :-    this.setState({
            count : this.state.count + 1;
        })
    * React Life Cycle Method :- 
        Note :-  Loading the page  is same as ---> Mounting the page 
        - When a CLass instance is created first constructor is call the render is call.
        
        - Parent Constructor is called --> Parent render is called ---> Child Constructor is called ---> Child render Is Called.


        - ComponentDidMount method --> this method is called when the components are Mounted on the Page.

        that means :- first components constructor is called --> components render is called ---> Components ComponentDidMount is Called.

        - Note :- use Of the ComponentDidMount method  we Can call API.
        
        - What if We have Multiple child Components then how React Life Cycle Method work.
            e.g :- let we have two child components.
                - Parent constructor is called
                - Parent render is called 
                - Child1 constructor is called
                - Child1 render Is called 
                - Child2 constructor is Called
                - Child2 render is called
                - Child1 ComponentDidMount is Called
                - Child2 ComponentDidMount id Called
                - Parent ComponentDidMount is Called
    * Why this Happen,because
        React has two phases 
            - 1. Render Phase
                - constructor called.
                - render called.
            - 2. Commit Phase
                - React Update the DOM and ref.
                - componentDidMount is called.
        This two Phase is work for all parent and child components.

    * Calling API in Class Base Components.
        - We can call API in componentDidMount method.
        e.g :- currently using Github User Api.
            - https://api.github.com/users/user_name. 

        - What happen when this api call.
          * ..........Mounting Cycle.......... 
            - First Constructor is call.
            - Then render is called.(with dummy data)
            - <HTML DOM Update with dummy Data >
            - Then componentDidMount is called.
            - Then API is called.
            - Then API response is set in state.(updated value).
        * ..........Update Cycle..........
            - render is called.(with API response data, Updated Data).
            - <HTML DOM is updated with new API response  Data>
            - Then componentDidUpdate Call.
        * ..........Unmounting Cycle..........
            - unmounting means  when the data is removing 
            e.g :- when we switch from one page to another.
            - Then componentWillUnmount is called.
        Note :- What we will do in unmounting.
            - the major fault is when we moving from one page to another it not reloading the page it's just changing the components(or reRender the component).
            - Let's say we set the setInterval in componentDidMount, and whenEver the page changes it's not getting clear
            - So we have to clear the setInterval in componentWillUnmount method.
            - So we will clear the API call in componentWillUnmount method.
            - Because if we don't clear the API call then it will be running in background and it will be consuming the memory.
        Note :- What will Have to do same in useEffect.
                - we have to return the  Function inside the useEffect.Which Help in cleanUp or unMounting.
                e.g :- useEffect(() {
                    <!-- API Call -->

                    return () => {
                        <!-- Clear API Call -->
                    }
                },[]);

