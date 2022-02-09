
// Task 5
// Code review
// Line 7 : I think you meant to name the function CarsFuel instead of CarsFuuel
// Line 12 : It's better to destructure fuel from props e.g const { fuel } = props, to avoid repetition
// Line 15: Can you add a dependency array to the useEffect to avoid a continous render on the react page, and I
// believe the fuel variable should be added to dependency array