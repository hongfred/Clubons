let nextTodoId = 0
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function itemsHasErrored(bool) {
    return {
        type: 'ITEMS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function itemsIsLoading(bool) {
    return {
        type: 'ITEMS_IS_LOADING',
        isLoading: bool
    };
}

export function itemsFetchDataSuccess(results) {
    return {
        type: 'ITEMS_FETCH_RESULT_SUCCESS',
        results
    };
}

export function itemsFetchEventsSuccess(events) {
    return {
        type: 'ITEMS_FETCH_EVENTS_SUCCESS',
        events
    };
}

export function itemsFetchDataInstagram(url) {
    return((dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
              var images= [];
              for(var i=0;i<items.data.length;i++){
                var image = {
                    id: items.data[i].id,
                    url:items.data[i].images.standard_resolution.url,
                    link :items.data[i].link
                }
                images.push(image)
              }
						   dispatch(itemsFetchDataSuccess(images))
						})
            .catch(() => dispatch(itemsHasErrored(true)));
    });
}

export function itemsFetchEvents(url) {
    return((dispatch) => {
        dispatch(itemsIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => {
               dispatch(itemsFetchEventsSuccess(items))
            })
            .catch(() => dispatch(itemsHasErrored(true)));
    });
}

export function eventPostScenarioSuccess(postEvents) {
	return {
        type:'DATA_POST_EVENTS_SUCCESS',
        postEvents
    };
}

export function eventPostData(url, data) {
    return((dispatch) => {
        console.log(data)
        dispatch(itemsIsLoading(true));
        fetch(url, {
    			headers:{
    				'content-type': 'application/json'
    			},
    			method: 'POST',
    			body:data
    		})
            .then((response) => {
              console.log(url)
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(itemsIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((events) => dispatch(itemsFetchEventsSuccess(events)))
            .catch(() => dispatch(itemsHasErrored(true)));
    });
}
