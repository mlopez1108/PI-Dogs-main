// Le pasamos el STATE y la ACCION:
const initialState = {
  dogs: [],
  detail: [],
  allDogs: [],
  temperaments: [],
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_DOGS":
      return {
        ...state,
        dogs: payload,
        allDogs: payload,
      };
    case "FILTER_CREATED":
      const createdFilter =
        payload === "created"
          ? state.allDogs.filter((el) => el.createdInDb)
          : state.allDogs.filter((el) => !el.createdInDb);
      return {
        ...state,
        dogs: payload === "all" ? state.allDogs : createdFilter,
      };
    case "ORDER_BY_NAME":
      let sortedArr =
        payload === "asc"
          ? state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            })
          : state.dogs.sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (a.name < b.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        dogs: sortedArr,
      };
    case "GET_DOGS_BY_QUERY":
      return {
        ...state,
        dogs: payload,
      };
    case "GET_TEMPERAMENTS":
      return {
        ...state,
        temperaments: payload,
      };
    case "FILTER_BY_TEMPERAMENT":
      function temperamentFilter(payload) {
        const doggy = state.allDogs;
        let array = [];
        for (let i = 0; i < doggy.length; i++) {
          if (!doggy[i].createdInDb && doggy[i].temperament) {
            if (doggy[i].temperament.includes(payload)) {
              array.push(doggy[i]);
            }
          }
          if (doggy[i].temperaments) {
            for (let j = 0; j < doggy[i].temperaments.length; j++) {
              if (doggy[i].temperaments[j].name === payload) {
                array.push(doggy[i]);
              }
            }
          }
        }
        console.log("QUE HAY ACA PAPITO ::::", array);
        return array;
      }
      return {
        ...state,
        dogs: temperamentFilter(payload),
      };
    case "POST_DOG":
      return {
        ...state,
      };
    case "GET_DETAILS":
      return {
        ...state,
        detail: payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
