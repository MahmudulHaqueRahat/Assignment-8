import { Link, Outlet } from "react-router-dom";
import PropTypes from 'prop-types';
 


const Items = ({category}) => {

    return (
        <div className="w-11/12 mx-auto">

            <div className=" mt-72  text-center">
                <h1 className="text-2xl font-bold">Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="flex">
                <div className="grid grid-cols-1 gap-4 mt-10 w-[192px]  h-[52px]">
                    {category.map(category=>
                        <Link key={category.category } to={`/Cards/${category.category}`} >{category.category}
                        </Link>
                    )}
                </div>
                <div >
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};
Items.propTypes = {
    category: PropTypes.array.isRequired,
     
}
export default Items;