
var initialState={
	name:'name',
	option:0
};
var myReducer =(state=initialState,action)=>{
	switch(action.type)
	{
		case 'SORT':
			
			return {
				name:action.sort.name,
				option:action.sort.option
			};
		default: return state;
	}
}
export default myReducer;