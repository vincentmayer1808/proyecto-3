
export let ifChecked = (input, createGraph) => {

  console.log(input.checked);
  console.log(createGraph)

try{
  if (input.checked === true ) {
    return createGraph
  } else {
    console.log(`No se consulto el grafico de ${input.value}`);
  }
}catch(error){
  console.log(error)
}
};
