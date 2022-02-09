// Task 4

// Function that handles the error and success message displayed
const handleResult = (state, message = null) => {
  let result;
  if (state === "success") {
    result = {
      title: "Order complete",
      message
    };
  }

  // a switch statement based on the type of error code sent
  if (state === "error") {
    switch (message) {
      case "NO_STOCK":
        message = "No stock has been found";
        break;
      case "INCORRECT_DETAILS":
        message = "Incorrect details have been entered";
        break;
      case null:
        message = null;
        break;
      case undefined:
        message = undefined;
        break;
      default:
        message = null;
        break;
    }
    result = { title: "Error page", message };
  }
  console.log(result);
};

// Get output function that receives an array as its parameter
const getOutput = (values) => {
  if (values.length > 0) {
    for (let i = 0; i < values.length; i++) {
      if (values[i].state === "processing") {
        // this timeout function runs after 2 seconds
        setTimeout(() => {
          const nextValue = values[i + 1];
          if (nextValue.state === "success" || "error") {
            const message = nextValue.errorCode ? nextValue.errorCode : null;

            // Function is called to handle the result displayed
            handleResult(nextValue.state, message);
          }
        }, 2000);
      } else {
        return "";
      }
    }
  } else {
    return {};
  }
};

console.log(getOutput([{ state: "processing" }, { state: "success" }]));
