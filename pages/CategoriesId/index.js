import FoodObtion from "../../components/Maincomponent/FoodOption";
const Categories = (props) => {
  const CategoriesData = [
    { Name: 'FOOD', Age: 40 },
    { Name: 'FOOD', Age: 40 },
    { Name: 'FOOD', Age: 40 },
    { Name: 'FOOD', Age: 40 },
    { Name: 'FOOD', Age: 40 },
  ]


  return (<FoodObtion CategoriesData={CategoriesData} />);
}

export default Categories;








