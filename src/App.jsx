import './App.css'

// CODE ALONG, PART 1
// 1. What component has already been created for us?

// 2. Create another component called `FaveMovie`. This is where we'll later put the text to indicate people's favorite movies.



// CODE ALONG, PART 2
// 3. In the `FaveMovie` component, use JSX to create an `h1` tag that lists the favorite movie of one student in the class. The text should say something like "Fatima's favorite movie is Inside Out."


// 4. Render the `FaveMovie` component by nesting it inside of the `App` component. How would I go about doing this?
export default function App() {
  return (
    <div>
      
    </div>
  )
}

// CODE ALONG, PART 3
// In the second Code Along we hard-coded the name of the a particular person's favorite movie. Let's update the component with props.

// 5. In the `FaveMovie` component, add a prop named `studentName`.

// 6. Pass this prop to the `App` component. What would we need to change in the `App` component so that the name of the student we had picked before shows us?


// CODE SOLO
// 7. Add another prop to the component `FaveMovie` called "movie". This will be used to replace the favorite movie of the student we picked. Replace the movie name we wrote before with this new prop.

// 8. Pass this prop to the `App` component.

// 9. Create another instance of the `FaveMovie` in the `App` component to hold the name and favorite movie of another person in this class. If you have time, add yet another instance of `FaveMovie` this time with yet another person's name and favorite movie.